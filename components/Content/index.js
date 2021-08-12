import Link from 'next/link'
import Image from 'next/image'
import styles from './content.module.css'

import useDimensions from "react-cool-dimensions";

export const Content = ({ posts }) => {
  const { observe, width } = useDimensions();

  return (
    <div className={`p-5 md:overflow-y-scroll h-screen`}>
      <div className={styles.masonry}>
        {
          posts.map((post, idx) => {
            return (
              <Link idx={idx} key={idx} href={`/posts/${post.id}`}>
                <div className={styles.item}>
                  {/* // <img src={post.url} /> */}
                  <div ref={observe}>
                    <Image
                      src={post.url}
                      height={16}
                      width={9}
                      layout="responsive"
                      quality={65}
                      sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}
                    />
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
