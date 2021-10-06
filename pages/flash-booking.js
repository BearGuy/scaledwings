import {useState} from 'react';
import { Layout } from '../components/Layout'
import { useForm, useController, Controller } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Grid from '../components/Grid';

import styles from '../components/Content/content.module.css';

export default function FlashBooking({ flash }) {
	const { register, control, handleSubmit, formState, setValue, watch } = useForm({ mode: "onChange" });

  const [isRequesting, setIsRequesting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async ({ firstName, lastName, email, body_dir, body_part, placement, flash_id }) => {
    setIsRequesting(true);
    const data = {
      "records": [
        {
          "fields": {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "size": 'XS',
            "placement": `${body_dir} ${body_part} ${placement}`,
            "flash": [flash_id],
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
  };

  const onInvalid = (error) => {
    console.log({ error });
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
      {/* <div className="md:my-10 p-5 w-full sm:w-3/4 md:w-1/2 min-w-lg m-auto"> */}
      <div className="md:my-10 p-5 w-full m-auto">
        <h1 className="text-5xl text-lavenderblue font-bold">Flash Booking</h1>
        <form className="grid gap-2.5 my-5" onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <section className="grid md:grid-cols-2 gap-2.5 md:gap-5">
            <div>
              <label className="text-lg text-white font-bold mb-2.5">First Name</label>
              <input type="text" {...register("firstName", { required: true })} />
            </div>
            <div>
              <label className="text-lg text-white font-bold mb-2.5">Last Name</label>
              <input type="text" {...register("lastName", { required: true })} />
            </div>
          </section>
          <section>
            <label className="text-lg text-white font-bold flex justify-between">
              Email
            </label>
            <input type="text"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Please enter a valid email'
              })}
            />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5 md:mb-1 md:flex md:justify-between">
              Design
            </label>
            {/* <div className="max-w-89vw" style={{height: 600}}> */}
            <div className="max-w-89vw">
              <FlashCarousel control={control} flash={flash} />
            </div>
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5 md:mb-1 md:flex md:justify-between">
              Placement
            </label>
            <div className="grid md:grid-cols-2 gap-5">
              <SelectBox name="body_dir" control={control} boxes={['LEFT', 'RIGHT']} />
              <SelectBox name="body_part" control={control} boxes={['ARM', 'LEG']} />
            </div>
          </section>
          <section className="mb-2.5">
            <label className="text-lg text-white font-bold mb-2.5 md:flex md:justify-between">
              Placement Details
            </label>
            <input type="text" {...register("placement")} />
          </section>
          <button
            type="submit"
            disabled={!formState.isValid}
            className="bg-cerise text-white rounded-md disabled:bg-dustygray disabled:cursor-not-allowed" style={{ padding: `12px 15px`}}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )

}

function SelectBox({ name, boxes, control }) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <div className="grid md:grid-cols-2 gap-2.5">
    {
      boxes.map(button => {
        const is_selected = value === button;
        return (
          <div
            onClick={() => onChange(button)}
            className={`p-4 border-2 border-celeste rounded-md cursor-pointer ${is_selected ? `bg-celeste text-black` : ``}`}
          >
            <p className={`text-center font-bold ${is_selected ? `text-black` : `text-white`}`}>{button}</p>
          </div>
        )
      })
    }
  </div>
}

function FlashCarousel({ control, flash }) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'flash_id',
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <Grid>
    {
      flash.map((img) => {
        const is_selected = value === img.id;
        return (
          <div
            className={`${is_selected ? `border-cerise border-4` : ``} rounded-md overflow-hidden h-full`}
            // style={{scrollSnapAlign: 'start', minWidth: 200, minHeight: 275}}
            onClick={() => onChange(img.id)}
          >
            {/* <div className={`${styles.item}`}> */}
              <div className={`${styles.unset_img}`}>
                <Image
                  src={img.url}
                  className={`${styles.custom_img}`}
                  layout="responsive"
                  height={250}
                  width={200}
                />
              </div>
            {/* </div> */}
          </div>
        )
      })
    }
  </Grid>
}

export async function getStaticProps() {
  const response = await axios.get(`https://api.airtable.com/v0/appAE11Y9R7n8jKUn/Flash?api_key=${process.env.AIRTABLE_API_KEY}`)
  const records = (response.data.records ?? []).map((record) => {
    return {
      id: record.id,
      name: record?.fields?.Name,
      url: record.fields?.Attachments?.[0].url
    }
  })
  .filter((record) => record.name && record.url)

  return {
    props: { flash: records }, // will be passed to the page component as props
  }
}