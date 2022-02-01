import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useReducer, useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart.tsx'), { ssr: false });

const initialState = {
  count: null,
  annotations: null
};

const Home: NextPage = () => {
  const [state, setState] = useState(initialState);
  const fetchData = async () => {
    const response = await fetch('/api/counts');

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return setState(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RNA Sequencing Service</title>
        <meta name="description" content="RNA Sequencing for everyone!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Overpass:ital@0;1&display=swap"
          as="style"
          onLoad="this.onLoad=null;this.rel='stylesheet'"
        />
      </Head>

      <main>
        <aside className={styles.sidebar}>
          <h2>RNA Sequencing</h2>
          <hr />
          <p>
            To zoom in on the data, highlight part of the graph. The chart can
            also be saved as an image by using the menu at the top right of the
            chart.
          </p>
          <h3>References</h3>
          <ul>
            <li>
              <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noreferrer">
                NCBI
              </a>
            </li>
            <li>
              <a href="http://parts.igem.org/Main_Page" target="_blank" rel="noreferrer">
                Registry of Standard Biological Parts
              </a>
            </li>
            <li>
              <a href="https://www.ebi.ac.uk/Tools/sss/fasta/" target="_blank" rel="noreferrer">
                FASTA
              </a>
            </li>
            <li>
              <a href="https://www.ncbi.nlm.nih.gov/genbank/" target="_blank" rel="noreferrer">
                GenBank Overview
              </a>
            </li>
            <li>
              <a href="https://sbolstandard.org/" target="_blank" rel="noreferrer">
                SBOL
              </a>
            </li>
            <li>
              <a href="https://www.snapgene.com/" target="_blank" rel="noreferrer">
                SnapGene
              </a>
            </li>
          </ul>
          <div className={styles.quote}>
            &quot;The most exciting phrase to hear in science, the one that heralds
            the most discoveries, is not &quot;Eureka!&quot; (I found it!) but &apos;That&apos;s
            funny...&apos;&quot;
            <br />
            <br />
            <em>― Isaac Asimov</em>
          </div>
        </aside>
        <section className="col content">
          {state.counts ? (
            <div>
              <Chart {...state} />
            </div>
          ) : (
            <div>
              <h4>Let&apos;s find some data.</h4>
              <button onClick={fetchData} data-cy="fetch-btn">Fetch Data</button>
            </div>
          )}
          <noscript>Your browser does not support JavaScript!</noscript>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/alissalikavec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by alissalikavec
        </a>
        <a href="https://www.linkedin.com/in/alissalikavec/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Alissa&apos;s LinkedIn</a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel!
        </a>
      </footer>
    </div>
  );
};

export default Home;
