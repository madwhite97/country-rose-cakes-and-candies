import { Heart, ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/country-rose-logo.png";
import InstagramIcon from "../ui/InstagramIcon";

function Footer() {
    const location = useLocation();

    const isGalleryPage = location.pathname === "/gallery";
    const isSpecialtiesPage = location.pathname === "/specialties";

    const handleBackToTop = (event) => {
        if (isGalleryPage || isSpecialtiesPage) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-top-pattern" />

            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="/" className="footer-logo">
                        <img
                            src={logo}
                            alt="Country Rose Cakes & Candy"
                        />
                    </a>

                    <p className="footer-tagline">
                        Sweet treats, happy hearts,
                        <br />
                        and memories made from scratch.
                    </p>

                    <div className="footer-socials">
                        <a
                            href="https://www.facebook.com/countryrosecakes/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Country Rose Cakes & Candy on Facebook"
                        >
                            <span className="social-letter">f</span>
                        </a>

                        <a
                            href="https://www.instagram.com/bugzzie14"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Country Rose Cakes & Candy on Instagram"
                        >
                            <InstagramIcon size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3 className="script">Explore</h3>

                    <a href="/">Home</a>
                    <a href="/#about">About Us</a>
                    <a href="/specialties">Specialties</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/#contact">Contact</a>
                </div>

                <div className="footer-links">
                    <h3 className="script">Sweet Stuff</h3>

                    <ul>
                        <li>
                            <a href="/gallery">Custom Cakes</a>
                        </li>

                        <li>
                            <a href="/specialties#cupcakes">
                                Cupcakes
                            </a>
                        </li>

                        <li>
                            <a href="/specialties#cookies">
                                Cookies
                            </a>
                        </li>

                        <li>
                            <a href="/specialties#candy">
                                Candy &amp; Treats
                            </a>
                        </li>

                        <li>
                            <a href="/specialties#cheesecakes">
                                Pies &amp; Cheesecakes
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-order">
                    <div className="footer-heart">
                        <Heart size={22} fill="currentColor" />
                    </div>

                    <p className="script">
                        Life is short.
                        <br />
                        Eat the cake.
                    </p>

                    <a
                        href="/#contact"
                        className="footer-order-button"
                    >
                        Start an Order
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>
                        © {new Date().getFullYear()} Country Rose Cakes & Candy.
                        <span>Made with love.</span>
                    </p>

                    <a
                        href={
                            isGalleryPage
                                ? "/gallery#gallery-top"
                                : isSpecialtiesPage
                                ? "/specialties"
                                : "/"
                        }
                        className="footer-back-top"
                        onClick={handleBackToTop}
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </a>
                </div>
            </div>

            <div className="footer-credit">
                Designed & Developed by{" "}
                <span className="script">Maddie W</span>
            </div>
        </footer>
    );
}

export default Footer;