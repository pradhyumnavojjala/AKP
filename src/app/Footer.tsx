import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{height: "30rem"}} className="relative bg-white overflow-hidden">
      
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 bg-white
        bg-cover bg-center opacity-10"
      />

      {/* Main footer */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 style={{fontFamily: "Poppin", fontSize: "3rem", fontWeight: "bold", marginTop: "2rem"}} className="font-bricolage text-4xl lg:text-5xl font-semibold leading-tight">
              We’d love to cooperate <br />
              to create your amazing{" "}
              <span className="text-orange-500">sofa</span>
            </h2>

            <p style={{fontFamily: "Poppin", fontSize: "1.5rem", marginTop: "2rem"}} className="mt-6 text-lg text-gray-600 max-w-xl">
              Whether you have a specific design in mind or need assistance
              bringing your vision to life, our team is here to help.
            </p>

            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p style={{fontFamily: "Poppins", fontSize: "1.5rem", marginTop: "2rem"}} className="underline text-sm uppercase tracking-widest text-gray-500">
                  Call our office
                </p>
                <a 
                style={{fontFamily: "Poppins", fontSize: "1.5rem",marginTop: "2rem"}}
                  href="tel:+919347017561"
                  className="block mt-2 text-lg font-medium hover:text-orange-500"
                >
                  +91 93470 17561
                </a>
              </div>

              <div>
                <p style={{fontFamily: "Poppins", fontSize: "1.5rem", marginTop: "2rem"}} className="underline text-sm uppercase tracking-widest text-gray-500">
                  Send a message
                </p>
                <a
                style={{fontFamily: "Poppins", fontSize: "1.5rem", marginTop: "2rem"}}
                  href="mailto:example@gmail.com"
                  className="block mt-2 text-lg font-medium hover:text-orange-500"
                >
                  example@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 style={{fontFamily: "Poppins", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem"}}className="text-xl font-semibold mb-5">Company:</h3>
              <ul style={{fontFamily: "Poppins", fontSize: "1.5rem", marginTop: "2rem"}}className="space-y-3 text-gray-600">
                <li><Link href="/About-Us">About Us</Link></li>
                <li><Link href="/Sofa">Our Sofa</Link></li>
                <li><Link href="/Contact-Us">Contact Us</Link></li>
              </ul>

              <h4 style={{fontFamily: "Poppins", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem"}}className="mt-8 text-lg font-semibold">Address:</h4>
              <p style={{fontFamily: "Poppins", fontSize: "1.5rem", marginTop: "2rem"}}className="mt-2 text-gray-600">
                123 Sofa Street, Comfort City,<br />
                Cozy State, 45678
              </p>
            </div>

            <div>
              <h3 style={{fontFamily: "Poppins", fontSize: "1.5rem", fontWeight: "bold", marginTop: "2rem"}}className="text-xl font-semibold mb-5">Follow Us:</h3>
              <ul style={{fontFamily: "Poppins", fontSize: "1.5rem", marginTop: "2rem"}}className="space-y-3 text-gray-600">
                <li className="hover:text-black cursor-pointer">Facebook</li>
                <li className="hover:text-black cursor-pointer">Instagram</li>
                <li className="hover:text-black cursor-pointer">Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{fontFamily: "Poppins", fontSize: "1.5rem"}}className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2025 Sofa Project. All Rights Reserved by{" "}
        <span style={{fontFamily: "Poppins", fontSize: "1.5rem"}}className="font-medium text-gray-700">K2infocom</span>
      </div>
    </footer>
  );
}
