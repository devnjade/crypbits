import { useRef, useEffect } from "react";
import { discord, instagram, twitter } from '../assets/svg';
import styles from '../styles/app.module.css';
import data from '../data.json';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector("#header"),
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector("#art"),
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power2.inOut",
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector("#detts"),
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power2.inOut",
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.from(
      // @ts-ignore
      element.querySelector("#item"),
      {
        opacity: 1,
        scale: 0,
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector(".detts"),
          start: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.header} id="header">
        <p>Crypbits</p>
        <button>Connect Wallet</button>
      </div>
      <section className={styles.featured_section}>
        <div className={styles.art} id="art">
          <img src="https://res.cloudinary.com/dudhmrdin/image/upload/v1636736947/victor-grabarczyk-wN9DU73b8_s-unsplash_b4zb0j.jpg" alt="art" />
        </div>
        <div className={styles.details} id="detts">
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
      <section className={styles.all_section} id="coll">
        <p className={styles.title}>NFT Collections</p>
        <div className={styles.all_grid}>
          {data.map(i => (
            <div className={styles.grid_item} key={i.id}>
              <img src={i.img} alt="art" />
              <div className={styles.sub}>
                <p className={styles.title}>{i.name}</p>
                <div className={styles.last_sec}>
                  <p className={styles.price}>{i.price} ETH</p>
                  <p className={styles.number}>{i.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.extra}>
          <p className={styles.cc}>© 2021 Crypbits</p>
          <a href="/">Terms</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className={styles.icons}>
          <a href="/"><img src={twitter} alt=""/></a>
          <a href="/"><img src={instagram} alt=""/></a>
          <a href="/"><img src={discord} alt=""/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
