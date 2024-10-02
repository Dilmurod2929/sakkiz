import React from "react";
import styles from "./FaqCard.module.css"; // CSS modulini import qilamiz
import Image from "next/image";

interface FaqCardProps {
  image: string;
  title: string;
  questions: string[];
}

const FaqCard: React.FC<FaqCardProps> = ({ image, title, questions }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <Image src={image} alt={title} />
      </div>
      <div className={styles.card_title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.card_question}>
        {questions.map((question, index) => (
          <a href="#" className={styles.question_link} key={index}>
            {question}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FaqCard;
