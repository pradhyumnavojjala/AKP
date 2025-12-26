'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Order', href: '/Order' },
        { name: 'Sofa', href: '/Sofa' },
        { name: 'About Us', href: '/About-us' },
        { name: 'Contact Us', href: '/Contact-us' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav style={{height: "4rem"}} className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isSticky ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white'}`}>
            <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-4 lg:py-6">
                
                {/* Logo */}
                <Link href="/" className={`text-4xl lg:text-5xl font-bold font-bricolage transition-colors duration-300 ${isSticky ? 'text-black' : 'text-white'}`}>
                    AKP<span style={{fontSize: "2rem"}} className="text-orange-500"> Homes & Furnitures</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            style={{fontSize: "1.2rem", margin: "1rem"}}
                            className={`
                                relative text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 group
                                ${isSticky ? 'text-black hover:bg-orange-50' : 'text-white hover:bg-white/20'}
                                ${pathname === link.href
                                    ? isSticky
                                        ? 'bg-orange-100 text-orange-600'
                                        : 'text-orange-400 bg-white/10'
                                    : ''
                                }
                            `}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`}></span>
                        </Link>
                    ))}
                </div>

                {/* Social Icons & CTA Button */}
                <div className="hidden lg:flex items-center gap-6">
                    <div style={{fontSize: "1.2rem"}} className="flex gap-4">
                        <a href="#" className={`transition-colors duration-300 ${isSticky ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                            <i className="bi bi-facebook text-xl"></i>
                        </a>
                        <a href="#" className={`transition-colors duration-300 ${isSticky ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                            <i className="bi bi-instagram text-xl"></i>
                        </a>
                        <a href="https://wa.me/919347017561?text=Hello%20I%Want%20to%20enquire%20about%20sofas" target="-blank" rel="noopener noreferrer" className={`transition-colors duration-300 ${isSticky ? 'text-black hover:text-orange-500' : 'text-white hover:text-orange-300'}`}>
                            <i className="bi bi-whatsapp text-xl"></i>
                        </a>
                    </div>
                    <Link href="/contact">
                        <button className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${isSticky ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-black hover:bg-gray-100'}`}>
                            Get Quote
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`lg:hidden text-2xl transition-colors duration-300 ${isSticky ? 'text-black' : 'text-white'}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
            </div>

            {/* Mobile Side Menu */}
            <div className={`lg:hidden bg-white text-black overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-[8%] py-6">
                    <ul className="space-y-4">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link 
                                    href={link.href} 
                                    className={`block text-lg py-2 px-4 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 ${pathname === link.href ? 'text-orange-600 bg-orange-50' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex justify-center gap-6 mb-4">
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                                <i className="bi bi-facebook text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                                <i className="bi bi-instagram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                                <i className="bi bi-whatsapp text-xl"></i>
                            </a>
                        </div>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300">
                                Get Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
