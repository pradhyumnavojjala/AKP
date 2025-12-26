'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./NavFooter.css"

export default function Nav() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 10);
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
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="navbar__container">
                <Link href="/" className="navbar__logo">
                    AKP<span className="navbar__logo-sub"> Homes & Furnitures</span>
                </Link>

                <ul className="navbar__links">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`navbar__link ${pathname === link.href ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar__social-cta">
                    <div className="navbar__socials">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="https://wa.me/919347017561"><i className="bi bi-whatsapp"></i></a>
                    </div>
                    <Link href="/contact">
                        <button className="navbar__cta">Get Quote</button>
                    </Link>
                </div>

                <button className="navbar__menu-btn" onClick={toggleMenu}>
                    <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="navbar__mobile-socials">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-whatsapp"></i></a>
                </div>
                <Link href="/contact">
                    <button onClick={() => setIsMenuOpen(false)}>Get Quote</button>
                </Link>
            </div>
        </nav>
    );
}
