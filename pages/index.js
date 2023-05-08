import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Board from '../components/board.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Word Game</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  )
}