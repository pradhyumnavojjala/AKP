import "./contact.css";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <img src="image/G.jpg" alt="" />
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-info">
            <h2>Let’s Talk</h2>
            <p>
              Whether you have questions, custom requirements,
              or need help choosing the perfect sofa — we’re here.
            </p>

            <div className="contact-actions">
              <a href="tel:+911234567890">📞 +91 1234567890</a>
              <a href="mailto:akphomes@gmail.com">📧 akphomes@gmail.com</a>
              <a href="https://wa.me/911234567890" target="_blank">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />
            <textarea rows={5} placeholder="Message" />
            <button type="submit">Send Message</button>
          </form>

        </div>
      </section>

      {/* BANNER */}
      <section className="contact-banner">
        <div className="contact-banner-card">
          <img src="/image/gallery.jpg" />
          <div>
            <h2>Your Dream Starts Here</h2>
            <p>All queries are replied within 24 hours.</p>
          </div>
        </div>

        {/* MAP */}
         <div style={{ marginTop: '40px' }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!
                  1m12!1m3!1d60901.260649635864!2d78.2985748184282!3d17.44397041374647!2
                  m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x
                  2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen
                  !2sin!4v1766235824992!5m2!1sen!2sin" width="100%" height="650" style={{ border: "0" }}
                   allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                   className="rounded-[10px]"></iframe>
                 </div>
      </section>
    </>
  );
}

