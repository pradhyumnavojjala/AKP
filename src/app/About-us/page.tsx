import Image from "next/image";

export default function Page() {

  // Design Process
const processContent = [
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
    },
    {
        img: '/image/gallery7.jpg',
        title: 'Gallery 7',
        lightbox: 'gallery'
    },
    {
        img: '/image/gallery8.jpg',
        title: 'Gallery 8',
        lightbox: 'gallery'
    },
];
  return (
    
      <>
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >

                    <source src='/video/video2.mp4' type="video/mp4" />
                </video>
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'></div>
                <h1 style={{fontFamily: "bricolage", fontSize: "5rem", fontWeight: "bold"}} className="text-white text-[3rem] md:text-[5rem] font-bricolage z-20">
                    About Us    
                </h1>
            </div>

            {/* About us */}
            <div className="bg-white py-10">
              {/* Top Section */}
              <div style={{maxWidth: "1200px", padding: "0 1rem", marginTop: "3rem"}} className="container mx-auto mb-10 px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div style={{flex: "0 0 66.6667%", maxWidth: "66.6667%"}} className="lg:w-2/3 mb-6 lg:mb-0">
                    <h1 style={{fontFamily: "bricolage", fontSize: "5rem", fontWeight: "bold"}} className="text-3xl lg:text-8xl font-bold text-gray-800">Sofas & Comfort Solutions</h1>
                  </div>
                  <div style={{flex: "0 0 33.3333%", maxWidth: "33.3333%", marginLeft: "12rem", marginTop: "3rem"}} className="lg:w-1/3">
                    <div>
                      <h3 style={{fontFamily: "bricolage", fontSize: "2rem", fontWeight: "bold", position: "relative"}} className="text-xl font-semibold text-gray-700">About Us</h3>
                      <p style={{fontFamily: "bricolage", fontSize: "1.3rem"}} className="mt-2 text-gray-600">
                        At Sofa Project, we are passionate about creating comfortable and stylish 
                        sofas that enhance your living space. With years of experience in the furniture 
                        industry, we pride ourselves on our craftsmanship and attention to detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Section */}
              <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg">
                  <Image
                      src="/image/hero3.jpg"
                      alt="Our Vision"
                      width={800}
                      height={500}
                      className="w-full h-125 object-cover"
                  />
                  </div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <p style={{fontFamily: "bricolage", fontSize: "1.2rem", marginLeft: "10rem"}} className="mb-4 text-gray-700 leading-relaxed">
                      <span style={{fontFamily: "bricolage", fontSize: "1.6rem", fontWeight: "bold"}} className="text-gray-800 font-bold">Our Vision</span>:
                      To be the leading provider of innovative and comfortable sofa solutions,
                      transforming living spaces into havens of relaxation and style,
                      while prioritizing sustainability and customer satisfaction,
                      one sofa at a time.
                    </p>
                    <p style={{fontFamily: "bricolage", fontSize: "1.2rem", marginLeft: "10rem"}} className="text-gray-800 leading-relaxed">
                      Our mission is to create high-quality, customizable sofas that meet the unique needs
                      and preferences of our customers. We believe that everyone deserves a comfortable
                      and stylish place to relax, and we are committed to making that a reality.
                    </p>
                  </div>
                </div>
              </div>

               <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pl-12">
                    <p style={{fontFamily: "bricolage", fontSize: "1.2rem", marginRight: "9rem"}} className="mb-4 text-gray-700 leading-relaxed">
                      <span style={{fontFamily: "bricolage", fontSize: "1.6rem", fontWeight: "bold"}} className="text-gray-800 font-bold">Our Vision</span>:
                      To be the leading provider of innovative and comfortable sofa solutions,
                      transforming living spaces into havens of relaxation and style,
                      while prioritizing sustainability and customer satisfaction,
                      one sofa at a time.
                    </p>
                    <p style={{fontFamily: "bricolage", fontSize: "1.2rem", marginRight: "5rem"}} className="text-gray-800 leading-relaxed">
                      Our mission is to create high-quality, customizable sofas that meet the unique needs
                      and preferences of our customers. We believe that everyone deserves a comfortable
                      and stylish place to relax, and we are committed to making that a reality.
                    </p>
                  </div>
                  <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg">
                  <Image
                  style={{marginLeft: "1rem"}}
                      src="/image/interior3.jpeg"
                      alt="Our Vision"
                      width={800}
                      height={500}
                      className="w-full h-125 object-cover"
                  />
                  </div>
                </div>
              </div>
            </div>

             {/* Design Process */}
        <section style={{backgroundColor: "#f8f8f8", marginTop: "3rem"}} className="bg-gray-100 px-[8%] lg:px-[12%] py-16 min-h-[20vh]">
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

        {/* Gallery */}
                <section style={{backgroundColor: "#f8f8f8", display: "flex", justifyContent: "center", alignItems: "center"}} className="px-[8%] lg:px-[12%] py-16">
                    <div className="container mx-auto px-4">
                        <h1 style={{fontFamily: "bricolage", fontSize: "5rem", margin: "2rem", fontWeight: "bold"}} className="text-8xl font-bricolage font-bold mb-10">Gallery</h1>
                        <div style={{display: "grid", fontSize: "1.2rem", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem", borderRadius: "0.5rem"}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </>
    
  );
}
