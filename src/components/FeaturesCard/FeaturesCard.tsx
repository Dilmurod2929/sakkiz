import React from "react";
import styles from "./featuresCard.module.css";
import Image from "next/image";

interface FeaturesCardProps {
  image: string;
  title: string;
  description: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image src={image} alt={title} />
      </div>
      <div>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
