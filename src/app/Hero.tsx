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
        <div className="w-full h-screen relative">
            {/* ... Hero Swiper Code ... */}
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{ nextEl: '.custom-swiper-next', prevEl: '.custom-swiper-prev' }}
                className='h-full'
            >
                {HeroSlides.map((slide, index) => (
                    <SwiperSlide>
  <div
    className="hero-slide"
    style={{ backgroundImage: `url(${slide.bgImage})` }}
  >
    <div className="hero-overlay"></div>

    <div className="hero-content">
      <span className="hero-span">{slide.span}</span>

      <h1 className="hero-title">
        {slide.title}
      </h1>

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
            
            <div style={{width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#000',
    border: 'none',
    fontFamily: 'monospace',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 'x-large',
    transition: '.5s',
    zIndex: '100',
    
            }}className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-4 md:p-6 bg-black/50 text-white hover:bg-orange-500 transition-colors duration-300">
                <i className="ri-arrow-left-s-line text-3xl"></i>
            </div>
            <div style={{
                width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#000',
    border: 'none',
    fontFamily: 'monospace',
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 'large',
    transition: '.5s',
    zIndex: '100',
            }} className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-4 md:p-6 bg-black/50 text-white hover:bg-orange-500 transition-colors duration-300">
                <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>
        </div>
        
        {/* Marquee (Unchanged) */}
        <div style={{marginTop: '3rem'}} className="overflow-hidden whitespace-nowrap my-10 relative">
            <div className="animate-marquee flex w-max gap-8">
                {MarqueeItems.map((item , idx) => 
                    <div 
                    style={{backgroundColor: "gray", borderRadius: "50px"}}
                    key={idx}
                    className="min-w-62.5 h-25 border-4 border-black flex items-center justify-center text-black text-2xl font-bold uppercase px-5 my-4"
                    >
                        {item}
                    </div>
                )}
            </div>
        </div>
        
        {/* About Section (Unchanged) */}
        <section style={{marginTop: '3rem'}} className="px-[8%] lg:px-[12%] py-12">
            
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="lg:w-3/5">
                    <h2 style={{fontSize: "6rem", fontFamily: "bricolage"}} className="text-7xl leading-tight lg:text-9xl lg:leading-none font-bold tracking-wider font-bricolage">
                        Sofa & custom Design Solutions
                    </h2>
                </div>
                <div className="lg:w-2/5">
                    <h3 style={{fontSize: "2rem", fontFamily: "bold"}} className="underline uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                        About Us
                    </h3>
                    <p style={{fontSize: "1rem", margin: "2rem", fontStyle: "italic"}} className="text-base mb-4 text-gray-700">
                        At Our Sofa Company, We're committed to transforming spaces through creative vision, 
                        elegant design, and solutions that truly reflect your lifestyle. 
                    </p>
                    <a href="/About-us" style={{fontSize: "1.2rem", color: "orange", margin: "2rem"}} className="underline inline-flex items-center text-black font-medium hover:underline text-lg">
                     <span className="ml-2">Company Info</span>
                     <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>
                </div>
            </div>

            {/* Main Section: Swiper Cards and Tabs */}
            <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">
                
                {/* Column 1: Swiper Cards */}
                <div className="lg:w-1/2 w-full relative">
                    {isClient && (
                         <Swiper
                            modules={[Navigation, EffectCards, Autoplay]}
                            loop={true}
                            effect='cards'
                            grabCursor={true}
                            autoplay={{delay: 1500}}
                            navigation={{ nextEl: '.swiper-about-next', prevEl: '.swiper-about-prev' }}
                            className='rounded h-145' 
                            style={{padding: '30px'}}
                        >
                            {[
                                '/image/interior.jpg',
                                '/image/interior2.jpg',
                                '/image/interior3.jpeg',
                            ].map((src , index) => (
                                <SwiperSlide key={index}>
                                    <img 
                                    src={src} 
                                    alt={`slide ${index + 1}`} 
                                    className="w-full h-145 object-cover rounded" 
                                    />
                                </SwiperSlide>
                            ))}

                            <div style={{ marginTop: '2rem', fontSize: "x-large"}}
                            
                            className="flex justify-center mt-6 gap-4 relative z-20 pointer-events-none">
                                <div className="swiper-about-prev p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition pointer-events-auto cursor-pointer">
                                    <i className="ri-arrow-left-s-line text-2xl"></i>
                                </div>
                                <div className="swiper-about-next p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition pointer-events-auto cursor-pointer">
                                    <i className="ri-arrow-right-s-line text-2xl"></i>
                                </div>
                            </div>
                        </Swiper>
                    )}
                </div>

                {/* Column 2: Tabs & Content */}
                <div className="lg:w-1/2 w-full px-0 lg:px-10 pt-10">
                    {/* Tabs */}
                    <div className="flex gap-6 border-b mb-6">
                        {tabs.map((tab) => (
                            <button 
                            key={tab.key}
                            style={{fontSize: "1.5rem", fontFamily: "bold"}}
                            className={`relative pb-2 text-lg font-medium transition-colors cursor-pointer ${activeTab === tab.key
                                ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black'
                                : 'text-gray-400 hover:text-black'
                            }`}
                            onClick={() => SetActiveTab(tab.key as keyof TabContent)}
                            >
                                {tab.label}
                            </button>
                            
                        ))}
                    </div>
                    <hr style={{margin: "1rem"}} className="my-11 border-gray-300" />

                    {/* Tab Content */}
                    <div className="space-y-4 text-gray-700">
                        {tabContent[activeTab].map((para , idx) => (
                            <p key={idx} style={{fontSize: "1rem", fontStyle: "italic"}} className="text-base leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>

        {/* Design Process */}
        <section style={{ marginTop: '3rem'}} className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 style={{fontSize: "5rem", fontFamily: "bricolage", margin: "2rem", fontStyle: "bold"}} className="text-8xl font-[bricolage-font] font-semibold">
                            Our Design Process
                        </h1>
                    </div>
                    <div className="lg:w-1/3">
                    <h3 style={{fontFamily: "bold"}} className="uppercase tracking-wide font-semibold border-b border-black inline-flex">
                        Process
                    </h3>
                    <hr style={{width: "80px", fontFamily: "bold"}}/>
                    <p style={{margin: "0.4rem"}} className="text-lg max-w-md">
                        Discover how our thoughtful process transforms ideas into personalized, function and beautifully styled spaces. 
                    </p>
                    </div>
                </div>
                
                {/* FIX: Re-inserting the correct JSX structure for the process steps */}
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-10 gap-8"> 
                    {processContent.map(({id, imgSrc, title, description}) => (
                        <div key={id} className="w-full relative mb-10">
                            <div className="flex flex-col items-center cursor-pointer relative group">
                                {/* Circle with image and number */}
                                <div style={{margin: "2rem"}} className="w-42.5 h-42.5 rounded-full shadow-lg flex items-center justify-center relative hover:-translate-y-1.5 transition-transform duration-300">
                                    <img 
                                    src={imgSrc}
                                    alt={`process ste ${id}`} 
                                    className='w-17.5 h-17.5 transition-transform duration-500 ease-out group-hover:-rotate-y-360'
                                    />
                                    <span className="absolute -top-3 right-10 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold select-none">
                                        {id}.
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 style={{margin: "1rem", fontSize: "1.2rem", fontFamily: "bold"}} className="font-bricolage text-xl mt-6 mb-4 relative after:absolute after:bottem-0 after:left-0 after:h-0.5 after:bg-black after:w-0 group-hover:after:w-full after:transition-width after:duration-300">
                                    {title}
                                </h2>
                                {/* Description */}
                                <p style={{margin: "1rem", fontSize: "1.2rem"}} className="text-center text-base max-w-[70%] mx-auto">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* Services */}
        <section style={{marginTop: '3rem'}} className="px-[8%] lg:px-[12%] py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="lg:w-3/5">
                    <h2 style={{fontSize: "6rem", fontFamily: "bricolage"}} className="text-7xl leading-tight lg:text-9xl lg:leading-none font-bold tracking-wider font-bricolage">
                        Our Design Solutions
                    </h2>
                </div>
                <div className="lg:w-2/5">
                    <h3 style={{fontSize: "2rem", fontFamily: "bold"}} className="underline uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                        Our services
                    </h3>
                    <p style={{fontSize: "1rem", margin: "2rem", fontStyle: "italic"}} className="text-base mb-4 text-gray-700">
                        Whether you're dreaming of a cozy sofa retreat or a bold, mordern workspace, 
                        our expert designers bring your vision to life
                    </p>
                    <button style={{fontSize: "1.2rem", color: "orange", margin: "2rem"}} className="underline inline-flex items-center text-black font-medium hover:underline text-lg">
                     <span className="ml-2">All Services</span>
                    <i className="bi bi-arrow-up-right ms-2"></i>
                    </button>
                </div>
            </div> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {Services.map((service , index) => (
                    <div 
                    style={{margin: "2rem"}}
                    key={index}
                    className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    >
                        <Image 
                        src={service.icon} 
                        alt={service.title}
                        width={80}
                        height={80}
                        className='mb-4 transition-transform duration-700 group-hover:rotate-360'
                        />
                        <h2 style={{fontSize: "2rem", fontFamily: "bold", border: "2rem"}} className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block  
                        after:contrast-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                        after:bg-black hover:after:w-full after:transition-all after:duration-300">
                            {service.title}
                        </h2>
                        <p style={{fontSize: "1.2rem"}} className="text-gray-700 font-normal w-4/5">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Sofa */}
        <section style={{marginTop: '3rem'}} className="px-[8%] lg:px-[12%] py-16 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="lg:w-3/5">
                    <h2 style={{fontSize: "6rem", fontFamily: "bricolage"}} className="text-7xl leading-tight lg:text-9xl lg:leading-none font-bold tracking-wider font-bricolage">
                        Our Sofas
                    </h2>
                </div>
                <div className="lg:w-2/5">
                    <h3 style={{fontSize: "2rem", fontFamily: "bold"}} className="underline uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                        Our Sofas
                    </h3>
                    <p style={{fontSize: "1rem", margin: "2rem", fontStyle: "italic"}} className="text-base mb-4 text-gray-700">
                        We build our sofas with a perfect blend of comfort, style, and durability, ensuring each piece not only enhances your living space but also stands the test of time.
                    </p>
                    <a href="/sofa1" style={{fontSize: "1.2rem", color: "orange", margin: "2rem"}} className="underline inline-flex items-center text-black font-medium hover:underline text-lg">
                    <button style={{fontSize: "1.2rem", color: "orange", margin: "2rem"}} className="underline inline-flex items-center text-black font-medium hover:underline text-lg">
                     <span className="ml-2">View More</span>
                    <i className="bi bi-arrow-up-right ms-2"></i>
                    </button>
                    </a>
                </div>
            </div>   

            <Swiper
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
                nextEl: '.sofa-swiper-next', 
                prevEl: '.sofa-swiper-prev' 
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            className='relative'

            >
                {SofaData.map((sofa) => (
                    <SwiperSlide key={sofa.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                      <Link href={`/Sofa/${sofa.id}`}>
                        <img 
                        src={sofa.image} 
                        alt={sofa.title} 
                        className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 style={{ fontSize: "1.5rem", fontFamily: "bold" }} className="text-xl font-bricolage mb-2">{sofa.title}</h3>
                          <p style={{ fontSize: "1.2rem" }} className="text-gray-600 mb-4">{sofa.desc}</p>
                          <span style={{ fontSize: "1.2rem" }} className="text-lg font-semibold text-black">{sofa.Price}</span>
                        </div>
                      </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Navigation Buttons */}
            <div className="sofa-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-4 md:p-6 bg-black/50 text-white hover:bg-orange-500 transition-colors duration-300">
                <i className="ri-arrow-left-s-line text-3xl"></i>
            </div>
            <div className="sofa-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-4 md:p-6 bg-black/50 text-white hover:bg-orange-500 transition-colors duration-300">
                <i className="ri-arrow-right-s-line text-3xl"></i>
            </div>
        </section>

        {/* Marquee 2 */}
        <div style={{marginTop: '3rem'}} className="overflow-hidden whitespace-nowrap py-12">
            <div className="animate-marquee flex items-center gap-8">
                {MarqueeItems2.map((item , index) => (
                    <div key={index} className='flex items-center gap-10 mr-12'>
                        <div className="w-62.5 h-25 overflow-hidden rounded-full">
                            <Image
                                src={item.imgs}
                                alt={item.title}
                                width={250}
                                height={100}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="min-w-62.5 h-25 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span style={{fontSize: "1.5rem", fontFamily: "bold"}} className="text-2xl font-bold uppercase">{item.title}</span>
                        </div>
                    </div>
                ))}

                {MarqueeItems2.map((item , index) => (
                    <div key={`clone-${index}`} className="flex items-center gap-10 mr-12">
                        <div className="w-62.5 h-25 overflow-hidden rounded-full">
                            <Image
                                src={item.imgs}
                                alt={item.title || 'Sofa Image'}
                                width={250}
                                height={100}
                                className="object-cover"
                            />
                        </div>

                        <div className="min-w-62.5 h-25 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-black text-2xl font-bold uppercase px-4 text-center">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Service2 */}
        <section style={{marginTop: '3rem'}} className='px-[8%] lg:px-[12%] py-12 bg-gray-100'>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h1 style={{fontSize: "5rem", fontFamily: "bricolage", fontWeight: "bold"}} className="text-8xl font-bricolage font-bold">
                    Sofa <br/>Design Services
                </h1>
                </div>
                <div className="lg:w-1/3">
                <h3 style={{fontSize: "2.5rem", fontWeight: "bold"}}className="underline text-2xl font-jost font-semibold mb-3">Our Service</h3>
                <p style={{fontSize: "1rem", margin: "2rem", fontStyle: "italic"}} className="text-base mb-4 text-gray-700">
                        Whether you're dreaming of a cozy sofa retreat or a bold, mordern workspace, 
                        our expert designers bring your vision to life
                    </p>
                    <a href="/" className="underline inline-flex items-center text-black font-medium hover:underline text-lg">
                    <button style={{fontSize: "1.2rem", color: "orange", margin: "2rem"}} className="underline inline-flex items-center text-black font-medium hover:underline text-lg">
                     <span className="ml-2">All Services</span>
                    <i className="bi bi-arrow-up-right ms-2"></i>
                    </button>
                    </a>
                </div>
            </div>

           {service2.map((service , index) => (
            <div key={index} className="border border-black rounded-xl p-6 transition-all duration-300 hover:border-transparent shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <Image 
                style={{margin: "2rem", fontFamily: "bold"}}
                src={service.icon} 
                alt={service.title}
                width={400}
                height={400}
                className='mb-4 transition-transform duration-700 group-hover:rotate-360'
                />
                <h2 style={{fontFamily: "bricolage", fontSize: "3rem", fontWeight: "bold", textAlign: "center"}} className="text-3xl font-bricolage relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute
                after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black hover:after:w-full after:transition-all 
                after:duration-300">
                    {service.title}
                </h2>
                <p style={{fontFamily: "bricolage", fontSize: "1.2rem"}} className="text-gray-700 font-normal w-4/5">
                    {service.description}
                </p>
            </div>
           ))}
        </section>

        {/* Gallery */}
        <section style={{marginTop: '3rem'}} className="px-[8%] lg:px-[12%] py-16">
            <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 1rem"}} className="container mx-auto px-4">
                <h1 style={{fontFamily: "bricolage", fontSize: "5rem", fontWeight: "bold", margin: "3rem 0", marginTop: "3rem"}} className="text-8xl font-bricolage font-bold mb-10">Gallery</h1>
                <div style={{display: "grid", fontSize: "1.2rem", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem"}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item , index) => (
                        <a 
                        key={index}
                        href={item.img} 
                        data-lightbox={item.lightbox}
                        data-title={item.title}
                        className='group relative block overflow-hidden rounded-md'
                        >
                            <div className="relative w-full h-100">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black to-transparent z-10
                            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500
                            ease-in-out">
                                <h4 className="text-white text-3xl font-bricolage">{item.title}</h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>

        {/* Video Banner */}
        <div style={{margin: "0rem", top: "2rem"}} className="relative w-full h-125 overflow-hidden">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute top-0 left-0"
            >
                <source src="/video/video2.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 z-10">
            <h2 style={{fontSize: "2rem", margin: "3rem"}} className="text-5xl md:text-6xl font-bricolage font-bold text-white">
                Ready For an Upgrade? Let's Talk
            </h2>
            <button style={{backgroundColor: "white", margin: "5rem", borderRadius: "0.375rem", fontSize: "1.8rem"}} className="mt-10 px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded hover:bg-gray-200 
            transition hover:translate-y-1">Contact Us</button>
            </div>
        </div>

        {/* Testimonial */}
        <section style={{marginTop: '3rem'}} className="px-[8%] lg:px-[12%] py-32 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
                <div className="lg:w-1/2">
                <h1 style={{fontSize: "4rem", top: "200rem", fontWeight: "bold", margin: "4rem"}} className="text-7xl font-bricolage font-bold">Client <br/>Testimonials</h1>
                </div>
                <div style={{ top: "20rem", margin: "4rem", fontWeight: "bold"}} className="lg:w2/5">
                <h3  style={{fontSize: "1.5rem", margin: "1rem"}}className="text-xl font-semibold mb-2">
                    Testimonials
                </h3>
                <p style={{fontSize: "1rem", margin: "1rem"}} className="text-gray-600">
                    Hear what our satisfied clients have to say about our exceptional sofa design services and how we've transformed their living spaces,
                    enhancing both comfort and style, creating homes they truly love one sofa at a time.
                </p>
                </div>
            </div>

            <Swiper style={{margin: "0rem", top: "2rem", fontSize: "1.5rem", alignItems: "center", justifyContent: "center"}} spaceBetween={30} slidesPerView={3} loop={true} className='w-full'>
                {testimonials.map((testimonial , index) => (
                    <SwiperSlide key={index} style={{backgroundColor: "gray-100", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s ease-in-out"}} className="bg-gray-100 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <img src="/quote.svg" alt='quote' className='w-10 h-10 object-contain mb-4 opacity-25'/>
                        <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                        <div className="flex items-center">
                            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 object-cover rounded-full" />
                            <div className="ml-4">
                                <h2 className="font-semibold text-lg">{testimonial.name}</h2>
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

        {/* Social Images */}
        <section style={{marginBottom: "5rem"}} className='py-32 bg-white min-h-[50vh]'>
        <div className="w-full h-125">
            <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={2} loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }} className='w-full h-full'>
                {socialImages.map((src , index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full">
                            <img src={src} alt={`Social Image ${index + 1}`} style={{margin: "4rem"}} className="w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </section>
    </>
  );
}