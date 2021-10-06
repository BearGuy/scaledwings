import Link from "next/link"
import { Layout } from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="my-10 p-5 md:max-w-2xl m-auto">
        <h1 className="text-5xl text-lavenderblue font-bold mt-5">Riya Patel</h1>
        <p className="text-white mt-3">
          Hi there, I'm Riya 👋  I'm an apprentice tattoo artist and watercolour painter based in Ottawa
        </p>
        <p className="text-white mt-3">While I'm still an apprentice, I'm already starting to take bookings. You can book with me <Link href="/flash-booking"><span className="text-celeste underline font-bold cursor-pointer">here</span></Link> and be first in line to get a tattoo from me!</p>
      </div>
    </Layout>
  )
}