import React from 'react';
import { discord, instagram, twitter } from '../assets/svg';
import styles from '../styles/app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Crypbits</p>
        <button>Connect Wallet</button>
      </div>
      <section className={styles.featured_section}>
        <div className={styles.art}></div>
        <div className={styles.details}>
            <span className={styles.profile}>
              <div className={styles.avatar}></div>
              <p className={styles.name}>him.eth</p>
            </span>
            <p className={styles.title}>#24 - UnClearical</p>
            <div className={styles.last_sec}>
              <p className={styles.price}>3.6 ETH</p>
              <p className={styles.number}>1/1</p>
            </div>
            <div className={styles.button_sec}>
              <button>Buy</button>
              <button>Place bid</button>
            </div>
        </div>
      </section>
      <section className={styles.all_section}>
        <p className={styles.title}>NFT Collections</p>
        <div className={styles.all_grid}>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
          <div className={styles.grid_item}></div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.extra}>
          <p className={styles.cc}>© 2021 Crypbits</p>
          <a href="/">Terms</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className={styles.icons}>
          <a href="/"><img src={twitter}/></a>
          <a href="/"><img src={instagram}/></a>
          <a href="/"><img src={discord}/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
