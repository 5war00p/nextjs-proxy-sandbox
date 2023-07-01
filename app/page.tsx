"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState();
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p>Using rewrites to test CORS issue of Across bridge protocol</p>
      </div>

      <div className={styles.grid}>
        <button
          className={styles.card}
          onClick={async () => {
            fetch("/across/available-routes")
              .then((response) => {
                return response.json();
              })
              .then((data) => setResponse(data))
              .catch(console.log);
          }}
        >
          <h2>Available Routes</h2>
          <p>To get list of routes</p>
        </button>

        <button
          className={styles.card}
          onClick={async () => {
            fetch(
              "/across/limits?token=0x7f5c764cbc14f9669b88837ca1490cca17c31607&destinationChainId=42161"
            )
              .then((response) => {
                return response.json();
              })
              .then((data) => setResponse(data))
              .catch(console.log);
          }}
        >
          <h2>Limits</h2>
          <p>To get limits of the transactions</p>
        </button>

        <button
          className={styles.card}
          onClick={async () => {
            fetch(
              "/across/suggested-fees?token=0x7f5c764cbc14f9669b88837ca1490cca17c31607&destinationChainId=42161&amount=100000000000"
            )
              .then((response) => {
                return response.json();
              })
              .then((data) => setResponse(data))
              .catch(console.log);
          }}
        >
          <h2>Suggested Fees</h2>
          <p>To get suggested fees for bridging</p>
        </button>
      </div>

      <div className={styles.center}>
        <span className={styles.code}>{JSON.stringify(response)}</span>
      </div>
    </main>
  );
}
