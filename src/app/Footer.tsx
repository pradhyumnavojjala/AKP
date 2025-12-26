import Link from "next/link";
import "./NavFooter.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h2>We’d love to cooperate <span className="highlight">sofa</span></h2>
          <p>Whether you have a specific design in mind or need assistance bringing your vision to life, our team is here to help.</p>
          <div className="footer__contacts">
            <div>
              <p>Call our office</p>
              <a href="tel:+919347017561">+91 93470 17561</a>
            </div>
            <div>
              <p>Send a message</p>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer__right">
          <div>
            <h3>Company:</h3>
            <ul>
              <li><Link href="/About-Us">About Us</Link></li>
              <li><Link href="/Sofa">Our Sofa</Link></li>
              <li><Link href="/Contact-Us">Contact Us</Link></li>
            </ul>
            <h4>Address:</h4>
            <p>123 Sofa Street, Comfort City,<br/>Cozy State, 45678</p>
          </div>
          <div>
            <h3>Follow Us:</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        © 2025 Sofa Project. All Rights Reserved by <span>K2infocom</span>
      </div>
    </footer>
  );
}
