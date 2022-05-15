import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test app</title>
        <meta name="description" content="Best Next js template!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Happy Next JS Coding!</h1>
    </div>
  )
}
