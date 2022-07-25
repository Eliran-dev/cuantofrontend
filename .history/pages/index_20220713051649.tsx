import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Product from '../components/product';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cuanto | Homepage</title>
        <meta name="description" content="Cuanto | Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



    </div>
  )
}

export default Home
