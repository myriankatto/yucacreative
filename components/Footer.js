import React from "react";
import dynamic from "next/dynamic";
import FooterStyles from "../styles/Footer.module.scss";

const Button = dynamic(() => import("../components/Button"));

const Footer = () => {
  return (
    <div className={FooterStyles.container}>
      <div></div>
      <div className={FooterStyles.schedule}>
        <p>Let's talk?</p>
        <a
          href="mailto:yucacreative@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>yucacreative@gmail.com</span>
        </a>
      </div>
      <footer className={FooterStyles.footer}>
        <p>Yuca Creative @ 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
