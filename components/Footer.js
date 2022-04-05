import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://lighthouse.app" target="_blank" rel="noopener noreferrer">
        <span className={styles.logo}>
          <Image src="/lighthouse.svg" alt="Vercel Logo" width={160} height={50} />
        </span>
      </a>
    </footer>
  )
}