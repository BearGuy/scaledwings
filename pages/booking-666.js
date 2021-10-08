import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Layout } from '../components/Layout'
import Dropzone from 'react-dropzone'
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import firebase from "../stores/firebase";
import axios from 'axios';
import { validateEmail } from '../utils/helpers';

const PER_HOUR_COST = 100; // in USD

/*
  We want to get this information from people
  1. Firstname Lastname (text)
  2. Email (email)
  3. Placement on body (be as specific as possible) (text)
  4. Reference photos
  5. Description
*/

export default function Booking() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('');
  const [placement, setPlacement] = useState('');
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const size_buttons = [
    { id: 'XS', description: `Time Est: 1 hour, Price: $${PER_HOUR_COST} USD` },
    { id: 'SM', description: `Time Est: 2 hour, Price: $${PER_HOUR_COST * 2} USD` },
    { id: 'MD', description: `Time Est: 3 hours, Price: $${PER_HOUR_COST * 3} USD` },
    { id: 'L+', description: `Time Est: 4 hours+, Price: $${PER_HOUR_COST * 4} USD` },
  ]
  const selected_button = size_buttons.find(btn => btn.id == size);

  const isDisabled = (
    firstName == '' ||
    lastName == '' ||
    email == '' ||
    isInvalidEmail ||
    !selected_button ||
    placement == '' ||
    description == ''
  );

  useEffect(() => {
    setIsInvalidEmail(false);
    const delayDebounceFn = setTimeout(() => {
      if (!validateEmail(email) && email !== '') setIsInvalidEmail(true);
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [email])

  const removeFile = (e, remove_idx) => {
    e.stopPropagation();
    const filtered_files = files.filter((_, idx) => idx !== remove_idx);
    setFiles([...filtered_files]);
  }

  const onFileUpload = (new_files) => {
    let good_files = [];
    let invalid_file = false;
    for (let file of new_files) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "image/svg"
      ) {
        good_files.push(file);
      } else {
        invalid_file = true;
      }
    }
    setFiles([...files, ...good_files]);
    if (invalid_file) alert("Please upload photos that are either JPEG, PNG, or SVG");
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsRequesting(true);

    // upload our files to firebase first;
    const storage = getStorage(firebase);
    const storage_refs = files.map(file => ref(storage, file.name));

    // upload our files to firebase
    await Promise.all(
      files.map(file => {
        const storageRef = ref(storage, file.name);
        return uploadBytes(storageRef, file);
      })
    );

    // get our public urls to prep to upload to Airtable
    let urls = await Promise.all(storage_refs.map(ref => {
      try {
        return getDownloadURL(ref)
      } catch(e) {
        console.log({ e });
      }
    }));

    const data = {
      "records": [
        {
          "fields": {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "size": size,
            "placement": placement,
            "attachments": urls.map(url => ({ url }) ),
            "description": description,
            "status": 'Incoming'
          }
        }
      ]
    };

    // upload to airtable
    let results = await axios.post(
      `https://api.airtable.com/v0/appAE11Y9R7n8jKUn/Bookings`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
        }
      }
    );

    setIsRequesting(false);
    setIsSubmitted(true);
  }

  const displayDropzoneContent = (isDragActive, isDragAccept, isDragReject) => {
    if (isDragActive) {
      return <p className="text-white">Drop them here!</p>
    }

    if (files.length > 0) {
      return files.map((file, idx) => {
        return (
          <div className="flex">
            <p key={idx} className="text-white mr-2.5">{file.name}</p>
            <p onClick={(e) => removeFile(e, idx)} className="text-white cursor-pointer">✕</p>
          </div>
        )
      })
    }

    return <p className="text-white">Drag 'n' drop some files here, or click to select files</p>
  }

  if (isSubmitted) {
    return (
      <Layout>
        <div className="md:my-10 p-5 w-full md:w-1/2 min-w-lg m-auto">
          <p className="text-center text-xl text-lavenderblue font-bold mt-5">
            Your Request Was Sent! Expect To Hear Back From Me Soon
          </p>
          <div className="text-center">
            <Link href="/">
              <p className="text-xl text-celeste font-bold mt-5 underline cursor-pointer">Return to Gallery</p>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  if (isRequesting) {
    return (
      <Layout>
        <div className="md:my-10 p-5 w-full md:w-1/2 min-w-lg m-auto flex items-center justify-center">
          <div className="loader"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="md:my-10 p-5 w-full md:w-1/2 min-w-lg m-auto">
        <h1 className="text-5xl text-lavenderblue font-bold">Tattoo Booking</h1>
        <form className="grid gap-2.5 my-5">
          <section className="grid md:grid-cols-2 gap-2.5 md:gap-5">
            <div>
              <label className="text-lg text-white font-bold mb-2.5">First Name</label>
              <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <label className="text-lg text-white font-bold mb-2.5">Last Name</label>
              <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>
          </section>
          <section>
            <label className="text-lg text-white font-bold flex justify-between">
              Email
              {
                isInvalidEmail
                ? <p className="text-sm text-imperialred align-center self-center">Email is invalid</p>
                : null
              }
            </label>
            <input className={`${isInvalidEmail ? `border-2 border-imperialred` : ``}`} type="text" onChange={(e) => setEmail(e.target.value)} />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Body Placement (e.g. back, shoulder, wrist)</label>
            <input type="text" onChange={(e) => setPlacement(e.target.value)} />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5 md:mb-1 md:flex md:justify-between">
              Size
              {
                selected_button
                ? <p className="text-white text-md mb-2.5 md:mb-0">{selected_button.description}</p>
                : null
              }
            </label>
            <div className="grid md:grid-cols-4 gap-2.5">
              {
                size_buttons.map(button => {
                  const is_selected = button.id === size;
                  return (
                    <div
                      onClick={() => setSize(button.id)}
                      className={`p-4 border-2 border-celeste rounded-md cursor-pointer ${is_selected ? `bg-celeste text-black` : ``}`}
                    >
                      <p className={`text-center font-bold ${is_selected ? `text-black` : `text-white`}`}>{button.id}</p>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Reference Photos</label>
            <Dropzone onDrop={onFileUpload}>
              {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => (
                <section>
                  <div
                    className="border-dashed border-4 border-celeste p-4 rounded-md h-12 md:h-full md:min-h-25 grid items-center justify-center"
                    style={{ minHeight: `8rem` }}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {
                      displayDropzoneContent(isDragActive, isDragAccept, isDragReject)
                    }
                  </div>
                </section>
              )}
            </Dropzone>
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Description</label>
            <textarea className="h-64 md:h-32" type="text" onChange={(e) => setDescription(e.target.value)} />
          </section>
          <button
            onClick={onSubmit}
            disabled={isDisabled}
            className="bg-cerise text-white rounded-md disabled:bg-dustygray disabled:cursor-not-allowed" style={{ padding: `12px 15px`}}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}