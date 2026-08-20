import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import customCake from "../../assets/images/custom-cake.png";
import cupcakes from "../../assets/images/cupcakes.png";
import cookies from "../../assets/images/cookies.jpg";
import strawberries from "../../assets/images/strawberries.jpg";
import cheesecake from "../../assets/images/cheesecake.png";

const goodies = [
    {
        title: "Custom Cakes",
        description:
            "Beautiful cakes made for your sweetest celebrations.",
            accent: "mint",
            emoji: "🎂",
            image: customCake,
            imageAlt:
                "Custom decorated birthday cake by Country Rose Cakes & Candy",
            href: "/gallery",
    },
    {
        title: "Cupcakes",
        description:
            "Fluffy, frosted, and made fresh in every flavor.",
        accent: "rose",
        emoji: "🧁",
        image: cupcakes,
        imageAlt:
            "Freshly baked cupcakes with chocolate, cherries, and sprinkles",
        href: "/specialties#cupcakes",
    },
    {
        title: "Cookies",
        description:
            "Soft, sweet treats baked with plenty of love.",
        accent: "pink",
        emoji: "🍪",
        image: cookies,
        imageAlt:
            "Decorated sugar cookies by Country Rose Cakes & Candy",
        href:"/specialties#cookies",
    },
    {
        title: "Candy & Treats",
        description:
            "Hand-dipped goodies homemade sweet treats.",
        accent: "mint",
        emoji: "🍓",
        image: strawberries,
        imageAlt:
            "Chocolate-covered strawberries with pink drizzle",
        href: "/specialties#candy",
    },
    {
        title: "Pies & Cheesecakes",
        description:
            "Classic pies & creamy cheesecakes made from scratch.",
        accent: "rose",
        emoji: "🥧",
        image: cheesecake,
        imageAlt:
            "Blueberry lemon cheesecake with whipped cream and blueberries",
        href: "/specialties#cheesecakes",
    },
];

function Goodies() {
    return (
        <section className="goodies" id="goodies">
            <div className="goodies-inner container">

                <div className="goodies-heading">
                    <div className="heading-decoration">
                        <Heart size={18} fill="currentColor" />
                    </div>

                    <h2 className="script">Our Goodies</h2>

                    <div className="heading-decoration">
                        <Heart size={18} fill="currentColor" />
                    </div>

                    <div className="goodies-bow">🎀</div>
                </div>

                <div className="goodies-categories">
                    <Link to ="/gallery">
                        Cakes
                    </Link>

                    <span>♥</span>

                    <Link to="/specialties#cupcakes">
                        Cupcakes
                    </Link>

                    <span>♥</span>

                    <Link to="/specialties#cookies">
                        Cookies
                    </Link>
                    
                    <span>♥</span>

                    <Link to="/specialties#candy">
                        Candy
                    </Link>

                    <span>♥</span>

                    <Link to="/specialties#cheesecakes">
                        Treats
                    </Link>
                </div>

                <div className="goodies-layout">

                    <div className="goodies-grid">

                        {goodies.map((goodie, index) => (
                            <Link
                                to={goodie.href}
                                className={`goodie-card goodie-card-${index + 1}`}
                                key={goodie.title}
                            >
                                <div className="goodie-tape" />

                                <div className="goodie-photo">
                                    {goodie.image ? (
                                        <img
                                            src={goodie.image}
                                            alt={goodie.imageAlt}
                                        />
                                    ) : (
                                        <div className="goodie-photo-placeholder">
                                            <span>
                                                {goodie.emjoi}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`goodie-label ${goodie.accent}`}
                                >
                                    {goodie.title}
                                </div>
                            </Link>
                        ))}

                    </div>

                    <div className="goodies-note">
                        <Sparkles size={18} />

                        <p className="script">
                            Fresh Baked.
                            <br />
                            Hand Dipped.
                            <br />
                            Always Sweet.
                        </p>

                        <Heart
                            size={18}
                            fill="currentColor"
                        />

                        <div className="note-rose">
                            🌹
                        </div>
                    </div>

                </div>

                <div className="goodies-bottom">
                    <p>
                        A little something sweet for every celebration, craving, and special moment.
                    </p>

                    <Link to="/specialties">
                        View full Menu
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Goodies;