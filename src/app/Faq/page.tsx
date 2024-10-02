import React from "react";
import styles from "./faq.module.css";
import FaqCard from "@/components/FaqCard/FaqCard";
import Answers from "@/components/Answers/Answers";

// Komponent rasmlari
import general from "../../../public/images/FAQ-icons/general.svg";
import gapBasics from "../../../public/images/FAQ-icons/gap-basics.svg";
import yourAccount from "../../../public/images/FAQ-icons/your-account.svg";
import security from "../../../public/images/FAQ-icons/securty.svg";
import troubleshooting from "../../../public/images/FAQ-icons/troubleshooting.svg";
import deeper from "../../../public/images/FAQ-icons/deeper-questions.svg";

const Faq = () => {
  const answers = [
    "General",
    "Gap Basic",
    "Your Account",
    "Security",
    "Troubleshooting",
    "Deeper Questions",
  ];

  const cards = [
    {
      image: general,
      title: "General",
      questions: [
        "What is Gap?",
        "Who is it for?",
        "How is it different from WhatsApp?",
        "How old is Gap?",
        "Who are the people behind Gap?",
        "Where is Gap based?",
        "How do you make money?",
      ],
    },
    {
      image: gapBasics,
      title: "Gap Basics",
      questions: [
        "Who can I message?",
        "Who can message me?",
        "Who has Gap?",
        "Inviting friends",
        "Can I hide my 'last seen'?",
        "Who can see me 'online'?",
        "Can I delete my messages?",
      ],
    },
    {
      image: yourAccount,
      title: "Your Account",
      questions: [
        "Who can see my phone number?",
        "I have a new phone number, what do I do?",
        "Log out of Gap",
        "Change your phone number",
        "Delete your Gap account",
        "How does account self-destruction work?",
        "My phone was stolen. What do I do?",
      ],
    },
    {
      image: security,
      title: "Security",
      questions: [
        "How secure is Gap?",
        "How do you encrypt data?",
        "Why should I trust you?",
        "Do I need to trust Gap for it to be secure?",
        "What if my hacker friend doubts you?",
        "Can Gap protect me against everything?",
        "How does 2-Step Verification work?",
      ],
    },
    {
      image: troubleshooting,
      title: "Troubleshooting",
      questions: [
        "SMS, login, register",
        "Getting a login code via a phone call",
        "Getting codes via Gap",
        "Notification problems",
        "Problems with contacts",
        "Deleting contacts on Android",
        "Can't send messages to non contacts",
      ],
    },
    {
      image: deeper,
      title: "Deeper Questions",
      questions: [
        "Can I get Gap's server-side code?",
        "Can I use my own server?",
        "Can I use the Gap API?",
        "Do you have a Privacy Policy?",
        "What does the iOS privacy sheet mean?",
        "Can I translate Gap?",
        "Can I help?",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="title">Your Questions, Answered</h2>
        <p className="title__description">
          Find quick answers to common questions about Gap. Whether you're just
          getting started or need help with specific features, we've got you
          covered.
        </p>
        <div className={styles.cards}>
          {cards.map((item, index) => (
            <FaqCard
              key={index}
              title={item.title}
              image={item.image}
              questions={item.questions}
            />
          ))}
        </div>
        {answers.map((answer, index) => (
          <Answers key={index} title={answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
