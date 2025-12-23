export default function Page() { 
  return ( 
  <> 
  <div> 
    {/* Page Title */}
     <div className="relative flex justify-center items-center h-[75vh] overflow-hidden"> 
      <h1 style={{fontSize: "clamp(6rem, 10vw, 10rem)", fontFamily: "var(--font-bricolage)", fontWeight: "bold"}} className="absolute text-white font-bricolage text-8xl font-bold z-50"> Contact Us </h1> 
      <video muted loop autoPlay className="absolute top-0 left-0 w-full h-full object-cover"> 
        <source src="/video/video.mp4" type="video/mp4" /> </video> 
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" /> </div> 
        {/* Contact Form Section */} 
        <section className="py-20 bg-white"> 
          <div className="container mx-auto px-4"> 
            <div className="flex flex-col lg:flex-row gap-10"> 
              {/* Left Side */}
               <div className="lg:w-1/2 space-y-6">
                <h1 className="text-6xl font-bricolage font-bold">Let's Talk</h1> 
                <h2 className="text-xl text-gray-700"> We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to share your thoughts, our team is here to help. Reach out to us through the form below or via our contact details, and we'll get back to you as soon as possible. </h2> 
                <div className="space-y-4"> 
                  <h6 className="uppercase text-lg tracking-widest border-b pb-4"> Call Us </h6> 
                  <hr /> 
                  <h3 className="text-3xl font-light"> <a href="#" className="text-black no-underline"> +91 1234567890 </a> </h3> 
                  <div className="flex gap-4"> <a href="#"> <i className="bi bi-facebook text-2xl text-black"> </i> </a> 
                  <a href="#"> <i className="bi bi-instagram text-2xl text-black"> </i> </a> 
                  <a href="#"> <i className="bi bi-twitter text-2xl text-black"> </i> </a> 
                  </div> 
                  </div> 
                  </div> 
                  {/* Right Side - Contact Form */}
                   <div className="lg:w-2/5"> 
                   <form className="space-y-6"> 
                    <input type="text" placeholder="Name" name="name" required className="w-full border-b border-gray-300 py-2 focus:border-black outline-none" /> 
                    <input type="email" placeholder="Email" name="email" required className="w-full border-b border-gray-300 py-2 focus:border-black outline-none" /> 
                    <input type="text" placeholder="Phone" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none" /> 
                    <textarea rows={6} placeholder="Message" name="message" required className="w-full border-b border-gray-300 py-2 focus:border-black outline-none" /> 
                    <button type="submit" className="bg-black text-white py-2 px-6 rounded-md text-lg"> Submit </button> 
                   </form> 
                  </div> 
                 </div> 
                </div> 
               </section> 
               {/* Contact Banner */} 
               <section style={{
    paddingTop: '140px',
    paddingBottom: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }} className="bg-black px-[8%] lg:px-[12%] py-12"> 
                <div className="overflow-hidden"> 
                 <div className="bg-white rounded flex flex-col md:flex-row gap-6 p-10 items-center shadow-md"> 
                  {/* Image */} 
                  <div style={{ flex: '0 0 40%', maxWidth: '1200px', margin: '0 auto' }} className="w-full md:w-2/5 h-100"> 
                   <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} src="/image/gallery.jpg" alt="Contact Us" className="w-full h-full object-cover rounded-2xl" /> 
                  </div> 

                  {/* Info */}
                  <div className="w-full md:w-3/5">
                   <h1 style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Bravura, sans-serif' }}>Your Dream Starts Here</h1>
                   <p style={{ fontSize: '1rem', color: '#4A4A4A' }}>All queries are replied within 24 hours.</p>
                  </div>
                 </div> 

                 {/* Google Maps */}
                 <div style={{ marginTop: '40px' }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!
                  1m12!1m3!1d60901.260649635864!2d78.2985748184282!3d17.44397041374647!2
                  m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x
                  2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen
                  !2sin!4v1766235824992!5m2!1sen!2sin" width="100%" height="650" style={{ border: "0" }}
                   allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                   className="rounded-[10px]"></iframe>
                 </div>
                </div> 
               </section> 
              </div> 
             </> 
             );
             }