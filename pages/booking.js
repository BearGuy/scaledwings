import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout'
import Dropzone from 'react-dropzone'
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import firebase from "../stores/firebase";
import axios from 'axios';

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
  const [placement, setPlacement] = useState();
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isDisabled = (
    firstName == '' ||
    lastName == '' ||
    email == '' ||
    placement == '' ||
    description == ''
  );

  const removeFile = (e, remove_idx) => {
    e.stopPropagation();
    const filtered_files = files.filter((_, idx) => idx !== remove_idx);
    setFiles([...filtered_files]);
  }

  const onFileUpload = (new_files) => {
    console.log({ new_files });
    let good_files = [];
    let invalid_file = false;
    for (let file of new_files) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "image/svg"
      ) {
        // console.log("TRY IT OUT");
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

    setIsSubmitted(true);
  }

  const displayDropzoneContent = (isDragActive, isDragAccept, isDragReject) => {
    if (isDragActive) {
      return <p className="text-white">Drop them here!</p>
    }

    if (files.length > 0) {
      console.log({ files });
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
            Your Request Was Sent! Expect To Hear Back From Me Soon 😄
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="md:my-10 p-5 w-full md:w-1/2 min-w-lg m-auto">
        <h1 className="text-5xl text-lavenderblue font-bold mt-5">Tattoo Booking</h1>
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
            <label className="text-lg text-white font-bold mb-2.5">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Body Placement (e.g. back, shoulder, wrist)</label>
            <input type="text" onChange={(e) => setPlacement(e.target.value)} />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Reference Photos</label>
            <Dropzone onDrop={onFileUpload}>
              {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => (
                <section>
                  <div
                    className="border-dashed border-4 border-celeste p-4 rounded-md h-12 md:h-full md:min-h-25 grid items-center justify-center"
                    style={{ minHeight: `12rem` }}
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
            className="bg-cerise text-white rounded-md disabled:bg-dustygray" style={{ padding: `12px 15px`}}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}