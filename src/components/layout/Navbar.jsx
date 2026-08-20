import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/country-rose-logo.png";
import InstagramIcon from "../ui/InstagramIcon";

const navLinks = [
    { label: "About Us", href: "/#about", type: "anchor" },
    { label: "Specialties", href: "/specialties", type: "route" },
    { label: "Gallery", href: "/gallery", type: "route" },
    { label: "Contact", href: "/#contact", type: "anchor" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

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

                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMenu}
                    >
                        <img
                            src={logo}
                            alt="Country Rose Cakes & Candy"
                        />
                    </Link>

                    <div className="navbar-actions">
                        <a
                            href="/#contact"
                            className="order-link"
                            onClick={closeMenu}
                        >
                            <ShoppingBag size={18} />
                            <span>Order</span>
                        </a>

                        <button
                            type="button"
                            className="mobile-menu-button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={
                                menuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? (
                                <X size={22} />
                            ) : (
                                <Menu size={22} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <nav
                className={`navbar-links ${
                    menuOpen ? "open" : ""
                }`}
                aria-label="Main navigation"
            >
                <div className="navbar-links-inner">
                    {navLinks.map((link) =>
                        link.type === "route" ? (
                            <Link
                                key={link.label}
                                to={link.href}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </a>
                        )
                    )}

                    <a
                        href="/#contact"
                        className="nav-order-button"
                        onClick={closeMenu}
                    >
                        Order Now
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;