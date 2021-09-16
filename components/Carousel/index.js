import styles from './index.module.css'

export default function Carousel({ children }) {
	console.log({ children })
  return (
    <div className={styles.slides}>
      {children}
    </div>
  )
}