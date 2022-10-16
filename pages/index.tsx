import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CardGrid } from "../components/CardGrid";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Admin use only" />
        {/* TODO: Add out favicon here */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <CardGrid />
      </main>
    </div>
  );
};

export default Home;
