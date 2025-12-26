import Image from "next/image";
import "./about.css";

export default function Page() {

  const processContent = [
    { id: 1, imgSrc: "/image/icon1.png", title: "Consultation and initial meeting", description: "The sofa company meets with the client to discuss their needs, budget, and timeline." },
    { id: 2, imgSrc: "/image/icon2.png", title: "Concept design", description: "Based on the client's requirements, the sofa company creates a concept design outline that matches the client's requirements." },
    { id: 3, imgSrc: "/image/icon3.png", title: "Design development", description: "Once the client approves the concept design, the sofa company begins to develop detailed design and plans." },
    { id: 4, imgSrc: "/image/icon4.png", title: "Permitting and approvals", description: "Before creation can begin, the sofa company must obtain the necessary permits and approval from the client." },
  ];

  const galleryItems = [
    { img: '/image/gallery.jpg', title: 'Gallery 1' },
    { img: '/image/gallery2.jpg', title: 'Gallery 2' },
    { img: '/image/gallery3.jpg', title: 'Gallery 3' },
    { img: '/image/gallery4.jpg', title: 'Gallery 4' },
    { img: '/image/gallery5.jpg', title: 'Gallery 5' },
    { img: '/image/gallery6.jpg', title: 'Gallery 6' },
    { img: '/image/gallery7.jpg', title: 'Gallery 7' },
    { img: '/image/gallery8.jpg', title: 'Gallery 8' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/image/F.jpg" alt="About Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <h1 className="hero-title">About Us</h1>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h1 className="about-heading">Sofas & Comfort Solutions</h1>
          </div>
          <div className="about-right">
            <h3>About Us</h3>
            <p>
              At Sofa Project, we are passionate about creating comfortable and stylish 
              sofas that enhance your living space. With years of experience in the furniture 
              industry, we pride ourselves on our craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-image">
            <Image src="/image/hero3.jpg" alt="Our Vision" width={800} height={500} />
          </div>
          <div className="vision-text">
            <p><strong>Our Vision:</strong> To be the leading provider of innovative and comfortable sofa solutions, transforming living spaces into havens of relaxation and style, while prioritizing sustainability and customer satisfaction, one sofa at a time.</p>
            <p>Our mission is to create high-quality, customizable sofas that meet the unique needs and preferences of our customers. We believe that everyone deserves a comfortable and stylish place to relax, and we are committed to making that a reality.</p>
          </div>
        </div>

        <div className="vision-container reverse">
          <div className="vision-text">
            <p><strong>Our Vision:</strong> To be the leading provider of innovative and comfortable sofa solutions, transforming living spaces into havens of relaxation and style, while prioritizing sustainability and customer satisfaction, one sofa at a time.</p>
            <p>Our mission is to create high-quality, customizable sofas that meet the unique needs and preferences of our customers. We believe that everyone deserves a comfortable and stylish place to relax, and we are committed to making that a reality.</p>
          </div>
          <div className="vision-image">
            <Image src="/image/interior3.jpeg" alt="Our Vision" width={800} height={500} />
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="process-section">
        <div className="process-container">
          <h1 className="process-heading">Our Design Process</h1>
          <h3 className="process-subtitle">Process</h3>
          <p className="process-text">Discover how our thoughtful process transforms ideas into personalized, functional and beautifully styled spaces.</p>
          <div className="process-grid">
            {processContent.map(({id, imgSrc, title, description}) => (
              <div key={id} className="process-card">
                <div className="process-icon">
                  <img src={imgSrc} alt={`Step ${id}`} />
                  <span className="process-number">{id}</span>
                </div>
                <h2 className="process-title">{title}</h2>
                <p className="process-desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h1 className="gallery-heading">Gallery</h1>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image src={item.img} alt={item.title} width={400} height={300} />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
