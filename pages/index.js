import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const About = dynamic(() => import("../components/About"));
const Footer = dynamic(() => import("../components/Footer"));

import styles from "../styles/Styles.module.scss";

export default function Home({ theme }) {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoadSpline(true), 100);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Yuca Creative</title>
      </Head>
      {loadSpline && (
        <div className={styles.spline}>
          <iframe
            src={
              theme === "dark"
                ? "https://my.spline.design/spline-d9e6800a4821d222a1d6a2d46a7d072c/"
                : "https://my.spline.design/splinecopy-6ff8d48cfa08c095381aef44bb6653f8/"
            }
            frameBorder="0"
            title="spline"
          ></iframe>
        </div>
      )}
      <Header />
      <About />
      <Footer />
    </div>
  );
}
