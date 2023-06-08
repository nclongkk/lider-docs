import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Meeting safely",
    imgSrc: "/img/picture1.jpeg",

    description: (
      <>
        Meet uses the same protections that Lider uses to protect information
        and protect your privacy. Video conferencing on Meet is encrypted in
        transit, and we continuously update a series of security measures for
        more effective protection.
      </>
    ),
  },
  {
    title: "Screen sharing",
    imgSrc: "/img/picture2.jpeg",
    description: (
      <>
        Sharing your screen with other participants in the meeting allows you to
        share your screen with other participants in the meeting.
      </>
    ),
  },
  {
    title: "Lider as a Service (LaaS)",
    imgSrc: "/img/picture3.png",
    description: (
      <>
        Lider as a Service is a special feature of Lider ecosystem. Allow
        developers to build their own video conferencing applications quickly
        base on Lider platform.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
