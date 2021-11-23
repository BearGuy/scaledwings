import {useState, useEffect} from 'react';
import { Layout } from '../components/Layout'
import { useForm, useController, Controller } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Grid from '../components/Grid';

import styles from '../components/Content/content.module.css';

export default function FlashBooking({ flash }) {
	const { register, control, handleSubmit, formState, getValues, watch } = useForm({ mode: "onChange" });

  const [est_total, setEstTotal] = useState(0)
  const [isRequesting, setIsRequesting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (params) => {
    params = {
      ...params,
      flash_id: params.flash.id,
      price: params.type == 'colour' ? params.flash.colour_price : params.flash.line_work_price,
    }
    delete params['flash']
    console.log({ params })

    setIsRequesting(true);

    try {
      const results = await axios.post('/api/booking', params);
    } catch(err) {
      console.log(err)
    }

    setIsRequesting(false);
    setIsSubmitted(true);
  };

  const onInvalid = (error) => {
    console.log({ error });
  }

  useEffect(() => {
    let flash = watch('flash')
    let type = watch('type')
    if (flash && type) {
      setEstTotal(type == 'colour' ? flash.colour_price : flash.line_work_price)
    }
  }, [watch(['flash', 'type'])])

  if (isSubmitted) {
    return (
      <Layout>
        <div className="md:my-10 p-5 w-full md:w-1/2 min-w-lg m-auto">
          <p className="text-center text-xl text-lavenderblue font-bold mt-5">
            Your Request Was Sent, Thank You For Submitting! Further Details Will Come Through Email
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
      <div className="md:my-10 p-5 w-full m-auto md:max-w-5xl">
        <h1 className="text-5xl text-lavenderblue font-bold">Flash Booking</h1>
        <form className="grid gap-2.5 my-5" onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <section>
            <div className="my-1.25">
              <h3 className="text-2xl text-white font-bold flex justify-between">Name</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-2.5 md:gap-5">
              <div>
                <div className="flex justify-between">
                  <label className="text-lg text-white font-bold">First Name</label>
                  <label className="text-white">(required)</label>
                </div>
                <input type="text" {...register("firstName", { required: true })} />
              </div>
              <div>
                <div className="flex justify-between">
                  <label className="text-lg text-white font-bold">Last Name</label>
                  <label className="text-white">(required)</label>
                </div>
                <input type="text" {...register("lastName", { required: true })} />
              </div>
            </div>
          </section>
          <section >
            <div className="my-1.25">
              <h3 className="text-2xl text-white font-bold flex justify-between">Contact</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-2.5 md:gap-5">
              <div>
                <div className="flex justify-between">
                  <label className="text-lg text-white font-bold">Email</label>
                  <label className="text-white">(required)</label>
                </div>
                <input type="text"
                  {...register("email", {
                    required: true,
                    // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Please enter a valid email'
                  })}
                />
              </div>
              <div>
                <label className="text-lg text-white font-bold mb-2.5">Instagram</label>
                <input type="text" {...register("instagram")} />
              </div>
            </div>
          </section>
          <section>
            <div className="my-1.25">
              <h3 className="text-2xl text-white font-bold flex justify-between">Tattoo</h3>
            </div>
            <div className="flex justify-between mb-2.5 md:mb-1">
              <label className="text-lg text-white font-bold">Design</label>
              <label className="text-white">(required)</label>
            </div>
            <div className="md:max-w-89vw">
              <FlashCarousel control={control} flash={flash} getValues={getValues} />
            </div>
          </section>
          <section>
            <div className="flex justify-between mb-2.5 md:mb-1">
              <label className="text-lg text-white font-bold">Placement</label>
              <label className="text-white">(required)</label>
            </div>
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
          <section className="mb-2.5">
            <div className="flex justify-between mb-2.5 md:mb-1">
              <label className="text-lg text-white font-bold">Type</label>
              <label className="text-white">(required)</label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio w-4" name="accountType" value="colour" {...register("type", { required: true }) } />
                <span className="ml-2 text-white">Colour</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio w-4" name="accountType" value="line-work" {...register("type", { required: true }) } />
                <span className="ml-2 text-white">Line-work</span>
              </label>
            </div>
          </section>
          <section className="mb-2.5">
            <label className="block">
              <label className="text-lg text-white font-bold mb-2.5 md:flex md:justify-between">
                Colour Details
              </label>
              <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="Please provide additional information (if applicable)" {...register("description")} ></textarea>
            </label>
          </section>
          <section className="mb-2.5">
            <div className="flex justify-between mb-2.5 md:mb-1">
              <label className="text-lg text-white font-bold">Apprentice Acknowledgment</label>
              <label className="text-white">(required)</label>
            </div>
            <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox w-4" {...register('apprentice_agreement', { required: true } )} />
              <span className="ml-2 text-white">I acknowledge that I am being tattooed by an apprentice</span>
            </label>
            </div>
          </section>
          <section className="mb-2.5">
            <label className="text-xl text-white font-bold mb-2.5 md:flex md:justify-between">
              Est. Total
            </label>
            <h2 className="text-celeste font-bold text-4xl">${est_total}</h2>
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

function FlashCarousel({ control, flash, getValues }) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'flash',
    control,
    rules: { required: true },
    defaultValue: "",
  });

  console.log(value)

  const onClick = (img) => {
    const type = getValues('type');
    onChange({
      id: img.id,
      colour_price: img.colour_price,
      line_work_price: img.line_work_price,
    })
  }

  return <Grid>
    {
      flash.map((img) => {
        const is_selected = value?.id === img.id;
        return (
          <div
            className={`${is_selected ? `border-cerise border-4` : ``} rounded-md overflow-hidden h-full cursor-pointer`}
            onClick={() => onClick(img)}
          >
            <div className={`${styles.unset_img}`}>
              <Image
                src={img.url}
                className={`${styles.custom_img}`}
                layout="responsive"
                height={250}
                width={200}
              />
            </div>
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
      url: record.fields?.Attachments?.[0].url,
      colour_price: record.fields?.ColourPrice || null,
      line_work_price: record.fields?.LineWorkPrice || null,
    }
  })
  .filter((record) => record.name && record.url)

  return {
    props: { flash: records }, // will be passed to the page component as props
  }
}