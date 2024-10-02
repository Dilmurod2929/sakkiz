import React from "react";
import styles from "./download-btn-group.module.css";
import Image from "next/image";

const DownloadBtnGroup = () => {
  return (
    <div className="container">
      <div className={styles.box}>
        <p className={styles.download_info}>
          Download Gap on all your devices and enjoy uninterrupted
          communication.
        </p>
      </div>
      <div className={styles.btns_all}>
        <div className={styles.btns}>
          <a className={styles.download_btn} href="#">
            <Image
              width={144}
              height={48}
              src="/images/download-btn-group/app-store.svg"
              alt="App Store"
            />
          </a>
          <a className={styles.download_btn} href="#">
            <Image
              width={144}
              height={48}
              src="/images/download-btn-group/googlePlay.svg"
              alt="Google Play"
            />
          </a>
          <a className={styles.download_btn} href="#">
            <Image
              width={144}
              height={48}
              src="/images/download-btn-group/appGallery.svg"
              alt="App Gallery"
            />
          </a>
          <a className={styles.download_btn} href="#">
            <Image
              width={144}
              height={48}
              src="/images/download-btn-group/macOs.svg"
              alt="macOS"
            />
          </a>
          <a className={styles.download_btn} href="#">
            <Image
              width={144}
              height={48}
              src="/images/download-btn-group/windows.svg"
              alt="Windows"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadBtnGroup;
