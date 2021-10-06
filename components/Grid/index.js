import styles from './grid.module.css'

export default function Grud({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  )
}