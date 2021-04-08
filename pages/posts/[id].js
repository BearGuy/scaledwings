import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { useState } from 'react';
import { truncate, getIdFromInstaURL } from '../../utils/helpers';
import axios from 'axios';

export default function Post({ postData, prevId, nextId }) {
  const [show_hover, setShowHover] = useState(false);
  const [show_arrows, setShowArrows] = useState(false);
  return (
    <Layout hide_menu={true}>
      <div className="px-5 md:p-5 md:h-screen">
        <div
          className="relative h-full flex justify-center"
          onMouseOver={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
        >
          <Link href="/">
            <img
              className="absolute filter-white left-0 cursor-pointer"
              src="/back-arrow.svg"
              style={{ width: 40, height: 40 }}
            />
          </Link>
          <img
            onMouseOver={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
            src={postData.url}
            className="mt-16 md:mt-10"
          />
          {
            show_arrows && prevId
            ?
              <Link href={`/posts/${prevId}`}>
                <div className="hidden md:block absolute rounded-full cursor-pointer" style={{ top: `50%`, left: 0 }}>
                  <img src="/left-arrow.svg" style={{ width: 50, height: 50 }} className="bg-white rounded-full border-2 border-white" />
                </div>
              </Link>
            : null
          }
          {
            show_arrows && nextId
            ?
            <Link href={`/posts/${nextId}`}>
              <div className="hidden md:block absolute rounded-full cursor-pointer" style={{ top: `50%`, right: 0 }}>
                <img src="/right-arrow.svg" style={{ width: 50, height: 50 }} className="bg-white rounded-full border-2 border-white"/>
              </div>
            </Link>
          : null
          }
          {
            show_hover
            ?
            <div
              className="bg-raisinblack fixed p-5 bg-opacity-70 pointer-events-none"
              style={{ bottom: 10, boxSizing: `border-box` }}
            >
              <p className="text-white">{truncate(postData.description, 300)}</p>
              {/* <div className="my-5">
                <Link href={postData.url}>
                  <button className="bg-lavenderblue text-raisinblack rounded-md" style={{ padding: `12px 15px`}}>
                    See on Instagram
                  </button>
                </Link>
              </div> */}
            </div>
            : null
          }
        </div>
        {
          prevId
          ?
          <Link href={`/posts/${prevId}`}>
            <div className="md:hidden absolute rounded-full cursor-pointer" style={{ bottom: 20, left: 20 }}>
              <img src="/left-arrow.svg" style={{ width: 50, height: 50 }} className="bg-white rounded-full border-2 border-white" />
            </div>
          </Link>
          : null
        }
        {
          nextId
          ?
          <Link href={`/posts/${nextId}`}>
            <div className="md:hidden absolute rounded-full cursor-pointer" style={{ bottom: 20, right: 20 }}>
              <img src="/right-arrow.svg" style={{ width: 50, height: 50 }} className="bg-white rounded-full border-2 border-white"/>
            </div>
          </Link>
          : null
        }
      </div>
    </Layout>
  )
}

const returnPosts = async () => {
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

  return records.map((post, idx) => {
    return {
      params: {
        id: post.id,
      }
    }
  })
}

const getPostFromId = async (id) => {
  let selected_post = {};
  let prevPostId = null;
  let nextPostId = null;

  const response = await axios.get(`https://api.airtable.com/v0/appAE11Y9R7n8jKUn/Gallery/${id}?api_key=${process.env.AIRTABLE_API_KEY}`)

  selected_post = {
    id: response.data.id,
    name: response.data.fields?.Name,
    description: response.data.fields?.Notes,
    url: response.data.fields?.Attachments?.[0].url
  }

  nextPostId = response.data?.fields?.Next?.[0]
  prevPostId = response.data?.fields?.Prev?.[0]

  return [selected_post, prevPostId, nextPostId]
}

export async function getStaticProps({ params }) {
  const [postData, prevPostId, nextPostId] = await getPostFromId(params.id)
  return {
    props: {
      postData,
      prevId: prevPostId ?? null,
      nextId: nextPostId ?? null,
    }
  }
}

export async function getStaticPaths() {
  const paths = await returnPosts();
  return {
    paths,
    fallback: false
  }
}