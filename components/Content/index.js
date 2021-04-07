import Link from 'next/link'
import styles from './content.module.css'

export const Content = ({ posts }) => {
  return (
    <div className={`p-5 md:overflow-y-scroll h-screen`}>
      <div className={styles.masonry}>
        {
          posts.map((post) => {
            const id = post.url.split("/")[4]
            return (
              <Link href={`/posts/${id}`}>
                <div className={styles.item}>
                  <img src={post.displayUrl} />
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
