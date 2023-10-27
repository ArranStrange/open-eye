import lukeHeadshot from '../assets/luke-headshot.png';
import saphHeadshot from '../assets/saph-headshot.png';
import './styles.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us contact-us-form">
        Contact Us
        <div className="contact-us-names">
          <input
            id="constact-us-first-name"
            className="contact-us-input"
            placeholder="First Name"
          />
          <input className="contact-us-input" placeholder="Last Name" />
        </div>
        <div className="contact-us-email-company">
          <input className="contact-us-input" placeholder="Email Address" />
          <input className="contact-us-input" placeholder="Company (optional)" />
        </div>
        <div className="contact-us-message">
          <textarea className="contact-us-input" placeholder="Message" />
        </div>
        <button className="contact-us-send-button">Send</button>
      </div>
      <div className="contact-us-images">
        <img className="headshots" src={saphHeadshot}></img>
        <img className="headshots" src={lukeHeadshot} />
      </div>
    </div>
  );
}

export default ContactUs;
