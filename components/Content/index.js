import Link from 'next/link'
import Image from 'next/image'
import styles from './content.module.css'

export const Content = ({ posts }) => {
  return (
    <div className={`p-5 md:overflow-y-scroll h-screen`}>
      <div className={styles.masonry}>
        {
          posts.map((post, idx) => {
            return (
              <Link idx={idx} key={idx} href={`/posts/${post.id}`}>
                <div className={styles.item}>
                  <div className={`${styles.unset_img}`}>
                    <Image
                      src={post.url}
                      className={`${styles.custom_img}`}
                      layout="fill"
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
