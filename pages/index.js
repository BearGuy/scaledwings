import { SideMenu } from '../components/SideMenu';
import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import Head from 'next/head'
import axios from 'axios';

export default function Home({ posts }) {
  return (
    <Layout>
      <Content posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`https://api.airtable.com/v0/appAE11Y9R7n8jKUn/Gallery?api_key=${process.env.AIRTABLE_API_KEY}`)
  const records = (response.data.records ?? []).map((record) => {
    return {
      id: record.id,
      name: record?.fields?.Name,
      description: record?.fields?.Notes,
      url: record.fields?.Attachments?.[0].url
    }
  })
  .filter((record) => record.name && record.description && record.url)

  return {
    props: { posts: records }, // will be passed to the page component as props
  }
}