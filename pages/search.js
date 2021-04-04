import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import React, {useState} from 'react';
import Link from 'next/link'

export default function Search() {
	const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState([]);


	async function search() {
		const config = {
      method: 'get',
      headers: { 
        'Accept': 'application/json', 
      },
      url: 'https://icanhazdadjoke.com/search?term=' + encodeURIComponent(keyWord)
		};
		
		try {
			const res = await axios(config);
			console.log("success :)");
			setResults(res.data.results);
			console.log(res);
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
            Search away my unfunny <span style={{color: '#0470F3'}}>friend</span>
        </h1>
        {results.length === 0 && <p>I can't believe you couldn't remember one dad joke</p>}
        <ul>
					{results.map((item) => 
						<li>{item.joke}</li>
					)}
				</ul>

        <div className={styles.grid}>
            <div className={styles.card}>
                <h3>Keywords :)</h3>
								<input id="name" name="name" type="text" value={keyWord} 
											 onChange = {(e) => setKeyWord(e.target.value)} autoComplete="name"  />
								<button style={{position: 'relative', top: '10px'}} onClick={search}>Search</button>
            </div>
            <Link href="/"> 
                <div className={styles.card}>
                    <p>Out of ideas</p>
                </div>
            </Link>

            
        </div>
      </main>

      <footer className={styles.footer}>
        <p style={{textAlign: "center"}}>Powered by <a href="https://twitter.com/amirbolous">Amir</a> + <a href="https://mashable.com/article/websites-for-wasting-time/"
          >boredom</a></p>
      </footer>
    </div>
  )
}
