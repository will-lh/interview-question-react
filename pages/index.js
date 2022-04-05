import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lighthouse Interview Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.accent}>Lighthouse!</span>
        </h1>

        {/** Edit Below This Line */}

        <div className={styles.placeholder}>
          Replace this div with your component
        </div>

        {/** Edit Above This Line */}
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://cat-fact.herokuapp.com/facts/`)
  const data = await res.json()
  return { props: { data } }
}