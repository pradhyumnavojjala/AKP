'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards'; 
import Image from 'next/image'; 
import Link from 'next/link';
import './home.css';
import { useState } from 'react';
import SofaData from './JsonData/sofa.json';
import { it } from 'node:test';

// --- INTERFACES FOR TYPE SAFETY (Resolves TS Errors) ---
interface TabContent {
    his: string[];
    mis: string[];
    vis: string[];
    [key: string]: string[]; 
}
interface HeroSlide {
    bgImage: string;
    span: string;
    title: string;
    paragraphs: string[];
    buttonText: string;
    buttonLink: string;
    lightbox?: string;
}
// FIX: Added the ProcessStep interface
interface ProcessStep {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
}
// --------------------------------------------------------

// HERO SLIDES (Path fix for common Next.js setup: /image/ becomes /images/)
const HeroSlides: HeroSlide[] = [
    { bgImage:'/image/hero1.jpg', span:'Space Planning', title: 'Unique \nCreations', paragraphs: ['Beyond just furniture, we craft experiences. Our space planning expertise ensures every piece','like this inviting curved sofa, fits perfectly into your home’s narrative, turning rooms into meticulously designed sanctuaries.'], buttonText: 'About Us', buttonLink: '/About-Us' },
    { bgImage:'/image/hero2.jpg', span:'Furniture Selection', title: 'Design \nPerfection', paragraphs: ['Experience the pinnacle of design perfection with our hand-selected furnishings.','This stunning tufted sofa combines luxurious materials with timeless form, offering both visual elegance and unparalleled comfort for the modern living space.'], buttonText: 'Portfolio', buttonLink: '/Projects' },
    { bgImage:'/image/1.jpg', span:'Lighting Solutions', title: 'Elegant \nLiving', paragraphs: ['Elegant living is defined by atmosphere. Our design philosophy integrates sophisticated lighting solutions that highlight the texture and form of our pieces',' creating warm, inviting environments that elevate every moment spent at home.'], buttonText: 'Blog', buttonLink: '/blog' },
    { bgImage:'/image/hero4.jpg', span:'Color Harmony', title: 'Functional \nBeauty', paragraphs: ['Discover the balance of functional beauty and harmonious color palettes.','This expansive sectional demonstrates how careful selection and arrangement can maximize comfort and flow, transforming a large area into a cohesive and stylish family hub.'], buttonText: 'Services', buttonLink: '/Order' },
];

// Marquee Texts
const MarqueeItems = [
    'Space Planning ', 'Color & Material Consultation',  'Furniture & Decor Selection', 'Structure Design', 'Residential Sofa Space', 'Residential Sofa Space',
    'Space Planning ', 'Color & Material Consultation',  'Furniture & Decor Selection', 'Structure Design', 'Residential Sofa Space', 'Residential Sofa Space',
];

// About Tabs
const tabs =[
    { label: 'History', key: 'his'},
    { label: 'Mission', key: 'mis'},
    { label: 'Vision', key: 'vis'},
]

const tabContent: TabContent = {
    his: [
        "At our sofa Company , we believe every space should tell a meaningful story...",
        "With years of industry experience and a passion for innovation , We specialize in both residential and compannies...",
        "From initial concepts to final execution, we manage every stage of the process with precision and create them..."
    ],
    mis: [
        "Our mission at our Sofa company it is to design personalized, functional, and inspiring spaces...",
        "We focus on building lasting client relationships and approach every project with attention to detail..."
    ],
    vis: [
        "Our vision is to be a leading force in custom and sofa design... ",
        "We strive to shape living and working environments that reflect individual aspirations... ",
    ],
}

// Design Process
const processContent: ProcessStep[] = [
    {
        id: 1,
        imgSrc: "/image/icon1.png",
        title: "Consultation and initial meeting",
        description: 
        "The sofa company meets with the client to discuss their needs, budget, and timeline.",
    },
    {
        id: 2,
        imgSrc: "/image/icon2.png",
        title: "Concept design",
        description: 
        "Based on the client's requirments, the sofa company creates a concept design outlines that matches the clients requirments.",
    },
    {
        id: 3,
        imgSrc: "/image/icon3.png",
        title: "Design development",
        description: 
        "Once the client approves the concept design, the sofa company begins to develop detailed development and design.",
    },
    {
        id: 4,
        imgSrc: "/image/icon4.png",
        title: "Permitting and approvals",
        description: 
        "Before creation can begin, the sofa company must obtain the neessary permits and approval from the client.",
    },
];

// Services
const Services = [
    {
        icon: '/image/service1.png',
        title: 'Sofa Selection',
        description: 'Picking Stylish, functional pieces to match space and purpose.',
    },
    {
        icon: '/image/service2.png',
        title: 'Colour Cunsultation',
        description: 'Choosing harmonius palettes that reflect mood, space, and personality.',
    },
    {
        icon: '/image/service3.png',
        title: 'Design Conclustion',
        description: 'Enhancing ambiance and functionality with strategic design placements.',
    },
    {
        icon: '/image/service4.png',
        title: 'Sofa Treatments',
        description: 'Applying color, wallpaper, or texture for visual interest enhancement.',
    },
    {
        icon: '/image/service5.png',
        title: 'Sofa Design',
        description: 'Selecting materials for style, durability, and room-specific performance.',
    },
    {
        icon: '/image/room.png',
        title: 'living Room',
        description: 'Crafting mordern, efficient living room tailored for comfort and utility.',
    },
];

// marqueeItems2
const MarqueeItems2 = [
    {
        imgs: '/image/marquee.jpg',
        title: 'Sofa 1',
    },
    {
        imgs: '/image/marquee2.jpg',
        title: 'Sofa 2',
    },
    {
        imgs: '/image/marquee3.jpg',
        title: 'Sofa 3',
    },
    {
        imgs: '/image/marquee4.jpg',
        title: 'Sofa 4',
    },
    {
        imgs: '/image/marquee5.jpg',
        title: 'Sofa 5',
    },
];

//Service2
const service2 = [
    {
        icon: '/image/service26.jpg',
        title: 'Custom Sofa Design',
        description: 'Tailored sofa designs to fit your unique style and space requirements.',
    },
    {
        icon: '/image/service21.jpg',
        title: '3D Sofa Visualization',
        description: 'Realistic 3D renderings to help you visualize your sofa in your space.',
    },
    {
        icon: '/image/service22.jpg',
        title: 'Material Selection',
        description: 'Expert guidance on choosing the perfect fabrics and finishes for your sofa.',
    },
    {
        icon: '/image/service23.jpg',
        title: 'Sofa Styling',
        description: 'Professional styling services to enhance the look of your sofa and living space.',
    },
    {
        icon: '/image/service24.jpg',
        title: 'Sofa Maintenance Tips',
        description: 'Advice on how to care for and maintain your sofa to ensure its longevity.',
    },
    {
        icon: '/image/service25.jpg',
        title: 'Sofa Customization',
        description: 'Options for personalizing your sofa to match your unique style.',
    }
];

//gallery items
const galleryItems = [
    {
        img: '/image/gallery.jpg',
        title: 'Gallery 1',
        lightbox: 'gallery'
    },
    {
        img: '/image/gallery2.jpg',
        title: 'Gallery 2',
        lightbox: 'gallery'
    },
    {
        img: '/image/gallery3.jpg',
        title: 'Gallery 3',
        lightbox: 'gallery'
    },
    {
        img: '/image/gallery4.jpg',
        title: 'Gallery 4',
        lightbox: 'gallery'
    },
    {
        img: '/image/gallery5.jpg',
        title: 'Gallery 5',
        lightbox: 'gallery'
    },
    {
        img: '/image/gallery6.jpg',
        title: 'Gallery 6',
        lightbox: 'gallery'
    }
];

// Testimonials
const testimonials = [
    {
        name: 'John Doe',
        location: 'New York, USA',
        image: '/',
        quote: 'The sofa company transformed my living room into a stylish and comfortable space. Their attention to detail and design expertise is unmatched.'
    },
    {
        name: 'Jane Smith',
        location: 'London, UK',
        image: '/',
        quote: 'I am thrilled with the custom sofa design provided by the sofa company. It perfectly fits my space and reflects my personal style.'
    },
    {
        name: 'Alice Johnson',
        location: 'Sydney, Australia',
        image: '/',
        quote: 'The 3D visualization helped me see exactly how the sofa would look in my living room. Highly recommend!'
    },
    {
        name: 'Michael Brown',
        location: 'Toronto, Canada',
        image: '/',
        quote: 'The sofa company exceeded my expectations. The quality and design are outstanding!'
    },
];

// Social Images
const socialImages = [
    '/image/social1.jpg',
    '/image/social2.jpg',
    '/image/social3.jpg',
    '/image/social4.jpg',
    '/image/social5.jpg',
    '/image/social6.jpg',
];
// -------------------------------------------------------------

export default function Hero() {
    const [activeTab, SetActiveTab] = useState<keyof TabContent>('his'); 
    const isClient = typeof window !== 'undefined';

  return (
    <>
        {/* Hero Section (Unchanged) */}
        {/* HERO SECTION */}
<div className="hero-wrapper">
  <Swiper
    modules={[Navigation, Autoplay]}
    loop
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    navigation={{
      nextEl: '.custom-swiper-next',
      prevEl: '.custom-swiper-prev'
    }}
  >
    {HeroSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="hero-span">{slide.span}</span>

            <h1 className="hero-title">{slide.title}</h1>

            <div className="hero-text">
              {slide.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Link href={slide.buttonLink}>
              <button className="hero-button">
                {slide.buttonText} →
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Navigation */}
  <div className="custom-swiper-prev">‹</div>
  <div className="custom-swiper-next">›</div>
</div>

        
        {/* Marquee (Unchanged) */}
       {/* MARQUEE SECTION */}
<div className="marquee-wrapper">
  <div className="marquee-track">
    {MarqueeItems.map((item, idx) => (
      <div key={idx} className="marquee-item">
        {item}
      </div>
    ))}
  </div>
</div>

        
        {/* About Section (Unchanged) */}
       {/* ABOUT SECTION */}
<section className="about-section">
  {/* TOP */}
  <div className="about-top">
    <div className="about-title">
      <h2>Sofa & Custom Design Solutions</h2>
    </div>

    <div className="about-intro">
      <h3>About Us</h3>
      <p>
        At Our Sofa Company, we're committed to transforming spaces through
        creative vision, elegant design, and solutions that truly reflect your lifestyle.
      </p>
      <a href="/About-us">Company Info ↗</a>
    </div>
  </div>

  {/* CONTENT */}
  <div className="about-content">
    {/* SWIPER */}
    <div className="about-swiper">
      {isClient && (
        <Swiper
          modules={[EffectCards, Autoplay, Navigation]}
          effect="cards"
          loop
          autoplay={{ delay: 1500 }}
          navigation={{
            nextEl: '.about-next',
            prevEl: '.about-prev'
          }}
        >
          {[
            '/image/interior.jpg',
            '/image/interior2.jpg',
            '/image/interior3.jpeg'
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="interior" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="about-nav">
        <div className="about-prev">‹</div>
        <div className="about-next">›</div>
      </div>
    </div>

    {/* TABS */}
    <div className="about-tabs">
      <div className="tab-buttons">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? 'active' : ''}
            onClick={() => SetActiveTab(tab.key as keyof TabContent)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-text">
        {tabContent[activeTab].map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* Design Process */}
        <section className="design-process">
        <div className="design-process__header">
          <div>
            <h1>Our Design Process</h1>
          </div>
          <div>
            <h3>Process</h3>
            <p>
              Discover how our thoughtful process transforms ideas into
              personalized, functional, and beautifully styled spaces.
            </p>
          </div>
        </div>

        <div className="design-process__grid">
          {processContent.map(({ id, imgSrc, title, description }) => (
            <div key={id} className="process-step">
              <div className="process-step__circle">
                <img src={imgSrc} alt={`Step ${id}`} />
                <span>{id}.</span>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
        {/* Services */}
       {/* SERVICES SECTION */}
<section className="services-section">
  {/* HEADER */}
  <div className="services-header">
    <div className="services-title">
      <h2>Our Design Solutions</h2>
    </div>

    <div className="services-intro">
      <h3>Our Services</h3>
      <p>
        Whether you're dreaming of a cozy sofa retreat or a bold, modern workspace,
        our expert designers bring your vision to life.
      </p>
      <a href="/services">All Services ↗</a>
    </div>
  </div>

  {/* CARDS */}
  <div className="services-grid">
    {Services.map((service, index) => (
      <div className="service-card" key={index}>
        <Image
          src={service.icon}
          alt={service.title}
          width={80}
          height={80}
        />
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
</section>


        {/* Sofa */}
         <section className="our-sofas">
        <div className="our-sofas__header">
          <div className="our-sofas__title">
            <h2>Our Sofas</h2>
          </div>
          <div className="our-sofas__desc">
            <h3>Our Sofas</h3>
            <p>
              We build our sofas with a perfect blend of comfort, style, and
              durability, ensuring each piece not only enhances your living
              space but also stands the test of time.
            </p>
            <Link href="/sofa1">
              <button className="our-sofas__view-more">
                View More
              </button>
            </Link>
          </div>
        </div>

        <Swiper
          loop={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".sofa-swiper-next",
            prevEl: ".sofa-swiper-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {SofaData.map((sofa) => (
            <SwiperSlide key={sofa.id} className="sofa-slide">
              <Link href={`/Sofa/${sofa.id}`}>
                <img src={sofa.image} alt={sofa.title} className="sofa-slide__img" />
                <div className="sofa-slide__info">
                  <h3>{sofa.title}</h3>
                  <p>{sofa.desc}</p>
                  <span>{sofa.Price}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="sofa-swiper-prev">{"<"}</div>
        <div className="sofa-swiper-next">{">"}</div>
      </section>

        {/* Marquee 2 */}
         <div className="marquee2">
        <div className="marquee2__inner">
          {MarqueeItems2.concat(MarqueeItems2).map((item, index) => (
            <div key={index} className="marquee2__item">
              <div className="marquee2__image">
                <Image
                  src={item.imgs}
                  alt={item.title}
                  width={250}
                  height={100}
                />
              </div>
              <div className="marquee2__text">{item.title}</div>
            </div>
          ))}
        </div>
      </div>


        {/* Service2 */}
         <section className="services2">
        <div className="services2__header">
          <div>
            <h1>Sofa <br/>Design Services</h1>
          </div>
          <div>
            <h3>Our Service</h3>
            <p>
              Whether you're dreaming of a cozy sofa retreat or a bold, modern
              workspace, our expert designers bring your vision to life.
            </p>
            <button>All Services</button>
          </div>
        </div>

        <div className="services2__grid">
          {service2.map((service, index) => (
            <div key={index} className="service-card">
              <Image src={service.icon} alt={service.title} width={400} height={400} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

        {/* Gallery */}
      {/* GALLERY SECTION */}
<section className="gallery-section">
  <div className="gallery-header">
    <h2>Featured Collection</h2>
    <p>
      A curated selection of our finest designs crafted for comfort,
      elegance, and durability.
    </p>
  </div>

  <div className="gallery-grid">
    {galleryItems.map((item, index) => (
      <div className="gallery-card" key={index}>
        <div className="gallery-image">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="img-cover"
          />
        </div>

        <div className="gallery-content">
          <h4>{item.title}</h4>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Video Banner */}
         {/* Hero Video */}
      <div className="hero-video">
        <video autoPlay loop muted playsInline className="hero-video__video">
          <source src="/video/video2.mp4" type="video/mp4" />
        </video>
        <div className="hero-video__overlay">
          <h2 className="hero-video__title">
            Ready For an Upgrade? Let's Talk
          </h2>
          <button className="hero-video__button">Contact Us</button>
        </div>
      </div>

        {/* Testimonial */}
        {/* TESTIMONIALS SECTION */}
<section className="testimonials-section">
  <div className="testimonials-header">
    <h2>Client Testimonials</h2>
    <p>Hear what our satisfied clients have to say about our custom sofa designs.</p>
  </div>

  <div className="testimonials-grid">
    {testimonials.map((t, index) => (
      <div className="testimonial-card" key={index}>
        <img src={t.image || "/default-user.jpg"} alt={t.name} className="testimonial-avatar" />
        <p className="testimonial-quote">"{t.quote}"</p>
        <h4 className="testimonial-name">{t.name}</h4>
        <span className="testimonial-location">{t.location}</span>
      </div>
    ))}
  </div>
</section>


        {/* Social Images */}
        {/* SOCIAL MEDIA SECTION */}
<section className="social-section">
  <div className="social-header">
    <h2>Connect With Us</h2>
    <p>Follow us on social media for latest designs and updates</p>
  </div>

  <div className="social-links">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/instagram.png" alt="Instagram" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/facebook.png" alt="Facebook" />
    </a>
    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/whatsapp.png" alt="WhatsApp" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="/icons/twitter.png" alt="Twitter" />
    </a>
  </div>

  <div className="social-marquee">
    <div className="marquee-track">
      <img src="/showcase1.jpg" alt="sofa1" />
      <img src="/showcase2.jpg" alt="sofa2" />
      <img src="/showcase3.jpg" alt="sofa3" />
      <img src="/showcase4.jpg" alt="sofa4" />
    </div>
  </div>
</section>

    </>
  );
}