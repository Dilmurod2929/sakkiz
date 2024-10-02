import React from "react";
import styles from "./showcase.module.css";
import devices from "../../../public/images/Showcase-img/devices.png";
import Image from "next/image";
import DownloadBtnGroup from "../DownloadBtnGroup/DownloadBtnGroup";

const ShowCase = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div>
          <h2 className="title">Seamless Communication at Your Fingertips</h2>
          <div className="title__description">
            <p>
              Experience lightning-fast messaging. Send texts, photos, and
              videos in an instant. Stay connected with your friends and family
              no matter where they are.
            </p>
          </div>
        </div>

        <div className={styles.devices}>
          <Image
            src={devices}
            alt="devices"
            width={1128}
            height={605}
            priority
          />
        </div>
        <div className="downloads">
          <DownloadBtnGroup />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
