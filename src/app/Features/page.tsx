import React from "react";
import styles from "./features.module.css";
import DownloadBtnGroup from "@/components/DownloadBtnGroup/DownloadBtnGroup";
import phoneMockup from "../../../public/images/Features-img/phone-mockup.svg";

// Komponent rasmlari
import charts from "../../../public/images/Features-img/charts.svg";
import usability from "../../../public/images/Features-img/usability.svg";
import deviceAccess from "../../../public/images/Features-img/device-access.svg";
import thousands from "../../../public/images/Features-img/Thousands.svg";
import messaging from "../../../public/images/Features-img/Messaging.svg";
import phoneNumber from "../../../public/images/Features-img/phone-number.svg";
import Image from "next/image";
import FeaturesCard from "@/components/FeaturesCard/FeaturesCard";

const Features = () => {
  const cards = [
    {
      image: charts,
      title: "Protected Chats",
      description:
        "Enable face or fingerprint ID to unlock Messenger, ensuring that only you can access your conversations.",
    },
    {
      image: usability,
      title: "Instant Usability",
      description:
        "Gap is designed to be so intuitive that you'll feel like you've been using it for years, even if you're just getting started.",
    },
    {
      image: deviceAccess,
      title: "Multi-Device Access",
      description:
        "Seamlessly access your conversations from a range of devices, so you can stay connected no matter where you are.",
    },
    {
      image: thousands,
      title: "Connect with Thousands",
      description:
        "Gap groups can have up to 50,000 members, making it easy to connect with a large audience in one place.",
    },
    {
      image: messaging,
      title: "Swift Messaging",
      description:
        "Gap offers the fastest message delivery speed, ensuring your messages are sent and received with lighting quick.",
    },
    {
      image: phoneNumber,
      title: "Transfer Phone Number",
      description:
        "Transfer all your phone's data, including contacts, messages, and media, to seamlessly continue your conversations.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="title">Discover What Makes Gap Unique</h2>
        <p className="title__description">
          From instant messaging to advanced privacy settings, discover
          everything Gap offers to keep you connected, secure, and engaged.
          Uncover the features designed to make your interactions smoother, more
          meaningful, and more fun.
        </p>
        <div className={styles.cards}>
          {cards.map((item, index) => (
            <FeaturesCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <h2 className="title">More Ways to Keep in Contact</h2>
        <p className="title__description">
          Gap offers a comprehensive set of features designed to help you stay
          intimately connected with your favorite people, making it easy to
          share moments and keep in touch no matter where you are.
        </p>
        <div className="container">
          <Image
            src={phoneMockup}
            alt="phone-mokup"
            width={1128}
            height={750}
            layout="responsive"
          />
        </div>
        <div className="downloads">
          <DownloadBtnGroup />
        </div>
      </div>
    </section>
  );
};

export default Features;
