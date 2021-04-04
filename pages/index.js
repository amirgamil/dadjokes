import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import React, {useState} from 'react';
import Link from 'next/link'

export default function Home() {
  const [dadJoke, setDadJoke] = useState("A joke is waiting for you...");

  async function getDadJokes(){
    const config = {
      method: 'get',
      headers: { 
        'Accept': 'application/json', 
      },
      url: 'https://icanhazdadjoke.com/'
    };

    try {
      const res = await axios(config);
      setDadJoke(res.data.joke);
    } catch (exception) {
      console.log(exception);
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>I like dad jokes</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{color: '#0470F3'}}>Puntastic</span>
        </h1>

        <p style={{fontSize: '30px'}}>{dadJoke}</p>

        <div className={styles.grid}>
          <div onClick={getDadJokes} className={styles.card}>
            <h3>Get a new joke</h3>
            <p>So your friends don't think you're funny. Changing that is only one click away</p>
          </div>

          <Link href="/search">
            <div className={styles.card}>
              <h3>Search for a joke</h3>
              <p>Forgot your dad joke, have you? smh</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by <a href="https://twitter.com/amirbolous">Amir</a> and <a href="https://mashable.com/article/websites-for-wasting-time/"
        >boredom</a></p>
      </footer>
    </div>
  )
}
