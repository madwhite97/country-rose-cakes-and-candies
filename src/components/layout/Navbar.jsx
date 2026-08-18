import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/country-rose-logo.png";
import InstagramIcon from "../ui/InstagramIcon";

const navLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Specialties", href: "/specialties" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-top">
                <div className="navbar-inner container">
                    <div className="navbar-socials">
                        <a
                            href="https://www.facebook.com/countryrosecakes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <span className="social-letter">f</span>
                        </a>

                        <a
                            href="https://www.instagram.com/bugzzie14/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon size={19} />
                        </a>
                    </div>

                    <a href="/" className="navbar-logo">
                        <img src={logo} alt="Country Rose Cakes & Candy" />
                    </a>

                    <div className="navbar-actions">
                        <a
                            href="/#contact"
                            className="order-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            <ShoppingBag size={18} />
                            <span>Order</span>
                        </a>

                        <button
                            type="button"
                            className="mobile-menu-button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={
                                menuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>
            
            <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <div className="navbar-links-inner">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="/#contact"
                        className="nav-order-button"
                        onClick={() => setMenuOpen(false)}
                    >
                        Order Now
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;