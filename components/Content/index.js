import Link from 'next/link'
import styles from './content.module.css'

export const Content = ({ posts }) => {
  return (
    <div className={`p-5 md:overflow-y-scroll h-screen`}>
      <div className={styles.masonry}>
        {
          posts.map((post, idx) => {
            return (
              <Link idx={idx} href={`/posts/${post.id}`}>
                <div className={styles.item}>
                  <img src={post.url} />
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
