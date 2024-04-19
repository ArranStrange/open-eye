import './styles.css';

function Footer() {
  return (
    <div className="footer-content">
      <a className="footer-content-link">Contact Us</a>
      <a className="footer-content-link">+44(0)7403455133</a>
      <a
        href="mailto:studio@openeyemotion.com?subject=Lets Work Together!"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-content-link"
      >
        studio@openeyemotion.com
      </a>
    </div>
  );
}

export default Footer;
