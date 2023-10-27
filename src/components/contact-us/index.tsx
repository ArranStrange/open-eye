import { Fade } from 'react-awesome-reveal';

import lukeHeadshot from '../assets/luke-headshot.png';
import saphHeadshot from '../assets/saph-headshot.png';
import './styles.css';

function ContactUs() {
  return (
    <Fade duration={2000} triggerOnce={true}>
      <div className="contact-us">
        <div className="contact-us-form-wrapper">
          <div className="contact-us-form">
            <p>Contact Us</p>
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
              <textarea className="contact-us-input contact-us-textarea" placeholder="Message" />
            </div>
            <button className="contact-us-send-button">Send</button>
          </div>
        </div>
        <div className="contact-us-images">
          <div className="headshotWrapper">
            <img className="headshots" src={saphHeadshot}></img>
            <p className="headshotNames">Sapphire Stanton</p>
          </div>
          <div className="headshotWrapper">
            <img className="headshots" src={lukeHeadshot} />
            <p className="headshotNames">Luke Stanton</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ContactUs;
