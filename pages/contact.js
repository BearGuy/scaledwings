import { Layout } from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="my-10 p-5 w-full md:w-1/2 min-w-lg m-auto">
        <h1 className="text-5xl text-lavenderblue font-bold mt-5">Contact me</h1>
        <form className="grid gap-2.5 my-5">
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Name</label>
            <input type="text" />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Email</label>
            <input type="text" />
          </section>
          <section>
            <label className="text-lg text-white font-bold mb-2.5">Description</label>
            <textarea className="md:h-32" type="text" />
          </section>
          <button className="bg-cerise text-white rounded-md" style={{ padding: `12px 15px`}}>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}