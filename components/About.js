import React from "react";
import Image from "next/image";
import Button from "./Button";
import AboutStyles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={AboutStyles.container}>
      <div className={AboutStyles.content}>
        <div className={AboutStyles.text}>
          <span>Hi, we are Yuca!</span>
          <p>
            We are a consultancy team founded by{" "}
            <a href="https://anabatista.eu">Ana Batista</a> and
            <a href="https://myriankatto.com"> Myrian Katto</a>.
          </p>{" "}
          <p>
            Our work is focused in human-centered, accessible and innovative
            development and design.{" "}
          </p>
          <p>
            <strong>
              {" "}
              Design and development to inspire, include, help people, make
              changes, spread ideas, <br />
              solve problems and build a web for everyone.
            </strong>
          </p>
          <p>We offer consultancy for:</p>
          <div className={AboutStyles.technologies}>
            <ul>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>Web App Development</li>
            </ul>
            <ul>
              <li>Product Design</li>
              <li>UX Design</li>
              <li>User Research</li>
            </ul>
          </div>{" "}
        </div>
        <div className={AboutStyles.image}>
          <Image
            src="/images/profile.png"
            alt="Picture of the author"
            width={1031}
            height={800}
          />
        </div>
      </div>{" "}
      <div className={AboutStyles.btn}>
        <a href="https://myriankatto.com" target="_blank" rel="noreferrer">
          <Button title="Myrian Katto" />
        </a>
        <a href="https://anabatista.eu" target="_blank" rel="noreferrer">
          <Button title="Ana Batista" />
        </a>
      </div>
    </div>
  );
};

export default About;
