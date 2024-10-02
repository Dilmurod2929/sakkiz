import React from "react";

interface AnswersProps {
  title: string;
}

const Answers: React.FC<AnswersProps> = ({ title }) => {
  return (
    <section>
      <div className="container border">
        <h3 className="answer_title">{title}</h3>
        <div className="question__answer">
          <span className="question">What is Gap?</span>
          <span className="answer">
            You can write to people who are in your phone contacts and have Gap.
            Another way of contacting people is to type their Gap username into
            the search <br />
            field - you don't need to know their phone number to do this.
          </span>
        </div>
        <div className="question__answer">
          <span className="question">Who can message me?</span>
          <span className="answer">
            People can contact you on Gap if they know your phone number or if
            you message them first. If they don't know your phone number, they
            can find you in these cases:
            <ul className="answer_list">
              <li>When you both are members of the same group.</li>
              <li>
                If you set a public username. Others can use Global Search and
                find you by your username
              </li>
            </ul>
          </span>
        </div>
        <div className="question__answer">
          <span className="question">Who has Gap?</span>
          <span className="answer">
            YoYour contacts, who have Gap, are shown at the top of your
            Contacts. They also have pictures.
          </span>
        </div>
        <div className="question__answer">
          <span className="question">Inviting friends</span>
          <span className="answer">
            iOS: The basic invitations are simple SMS messages. They will be
            charged as standard outgoing SMS by your carrier (unless sent via
            iMessage). <br />
            Naturally, you have other options to bring your friends here. Try
            sending them a download link via any other messaging service: email,
            Facebook, <br />
            WhatsApp, an actual Gap — you name it.
          </span>
        </div>
        <div className="question__answer">
          <span className="question">Can I hide my 'last seen'?</span>
          <span className="answer">
            You can choose who sees this info in Privacy and Security settings.
            Remember that you won't see Last Seen timestamps for people with
            whom you don't share your own. You will, however, see an approximate
            last seen value. This keeps stalkers away but makes it possible to
            understand whether a person is reachable over Gap. There are four
            possible approximate values:
            <ul className="answer_list">
              <li>
                Last seen recently — covers anything between 1 second and 2-3
                days
              </li>
              <li>Last seen within a week — between 2-3 and seven days</li>
              <li>Last seen within a month — between 6-7 days and a month</li>
              <li>
                Last seen a long time ago — more than a month (this is also
                always shown to blocked use
              </li>
            </ul>
          </span>
        </div>
        <div className="question__answer">
          <span className="question">Who can see me 'online'?</span>
          <span className="answer">
            iOS: The basic invitations are simple SMS messages. They will be
            charged as standard outgoing SMS by your carrier (unless sent via
            iMessage). Naturally, you have other options to bring your friends
            here. Try sending them a download link via any other messaging
            service: email, Facebook, WhatsApp, an actual Gap — you name it.
          </span>
        </div>
        <div className="question__answer">
          <span className="question">Can I delete my messages?</span>
          <span className="answer">
            Yes. You can always delete any messages you sent in any one-on-one
            conversation (in groups, it's still your own messages only). You can
            also clear the <br />
            entire chat history on both ends. On Gap, deleted messages do not
            leave a mark in the chat.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Answers;
