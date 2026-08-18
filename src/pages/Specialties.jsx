import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Specialties.css";

/* =========================================================
   CAKES
========================================================= */

import bananaPuddingCake from "../assets/images/specialties/cakes/banana-pudding-cake.png";
import cannoliCake from "../assets/images/specialties/cakes/cannoli-cake.png";
import caramelPoundCake from "../assets/images/specialties/cakes/caramel-pound-cake.jpg";
import carrotCake from "../assets/images/specialties/cakes/carrot-cake.png";
import chocolateBananaCake from "../assets/images/specialties/cakes/chocolate-banana-cake.jpg";
import chocolateCake from "../assets/images/specialties/cakes/chocolate-cake.jpg";
import chocolateCaramelCake from "../assets/images/specialties/cakes/chocolate-caramel-cake.jpg";
import chocolateCaramelCake2 from "../assets/images/specialties/cakes/chocolate-caramel-cake-2.jpg";
import germanChocolateCake from "../assets/images/specialties/cakes/german-chocolate-cake.jpg";
import insideOutGermanChocolateCake from "../assets/images/specialties/cakes/inside-out-german-chocolate-cake.jpg";
import redVelvetCake from "../assets/images/specialties/cakes/red-velvet-cake.jpg";
import redVelvetCheesecakeCake from "../assets/images/specialties/cakes/red-velvet-cheesecake-cake.jpg";
import reesesCake from "../assets/images/specialties/cakes/reeses-cake.jpg";
import strawberryCheesecakeCake from "../assets/images/specialties/cakes/strawberry-cheesecake-cake.jpg";
import strawberryPistachioMatchaTresLecheCake from "../assets/images/specialties/cakes/strawberry-pistachio-matcha-tres-leche-cake.jpg";
import sundaeCake from "../assets/images/specialties/cakes/sundae-cake.jpg";

/* =========================================================
   CANDY & FUDGE
========================================================= */

import blueChocolateCoveredStrawberries from "../assets/images/specialties/candy/blue-chocolate-covered-strawberries.jpg";
import boozyChocolateCoveredStrawberries from "../assets/images/specialties/candy/boozy-chocolate-covered-strawberries.jpg";
import butterfingerFudge from "../assets/images/specialties/candy/butterfinger-fudge.jpg";
import caramelAppleFudge from "../assets/images/specialties/candy/caramel-apple-fudge.jpg";
import chocolateBananaFudge from "../assets/images/specialties/candy/chocolate-banana-fudge.jpg";
import chocolateCakeBalls from "../assets/images/specialties/candy/chocolate-cake-balls.png";
import chocolateCoveredStrawberries from "../assets/images/specialties/candy/chocolate-covered-strawberries.jpg";
import chocolateFudge from "../assets/images/specialties/candy/chocolate-fudge.jpg";
import chocolateTruffles from "../assets/images/specialties/candy/chocolate-truffles.jpg";
import coconutStrawberries from "../assets/images/specialties/candy/coconut-strawberries.png";
import cookieDoughFudge from "../assets/images/specialties/candy/cookie-dough-fudge.jpg";
import cookiesAndCreamFudge from "../assets/images/specialties/candy/cookies-and-cream-fudge.jpg";
import cottonCandyFudge from "../assets/images/specialties/candy/cotton-candy-fudge.jpg";
import creamsicleFudge from "../assets/images/specialties/candy/creamsicle-fudge.jpg";
import hotCocoaBomb from "../assets/images/specialties/candy/hot-cocoa-bomb.jpg";
import keyLimePieFudge from "../assets/images/specialties/candy/key-lime-pie-fudge.jpg";
import oreoMintFudge from "../assets/images/specialties/candy/oreo-mint-fudge.jpg";
import peanutButterFudge from "../assets/images/specialties/candy/peanut-butter-fudge.jpg";
import redVelvetFudge from "../assets/images/specialties/candy/red-velvet-fudge.jpg";
import strawberryCheesecakeFudge from "../assets/images/specialties/candy/strawberry-cheesecake-fudge.jpg";
import strawberryCrunchFudge from "../assets/images/specialties/candy/strawberry-crunch-fudge.jpg";
import strawberryHotCocoaBombs from "../assets/images/specialties/candy/strawberry-hot-cocoa-bombs.jpg";

/* =========================================================
   CHEESECAKES
========================================================= */

import blueberryCrumbCheesecake from "../assets/images/specialties/cheesecake/blueberry-crumb-cheesecake.jpg";
import chocolateCoveredStrawberryCheesecake from "../assets/images/specialties/cheesecake/chocolate-covered-strawberry-cheesecake.png";
import circusCookieCheesecake from "../assets/images/specialties/cheesecake/circus-cookie-cheesecake.png";
import dulceDeLecheSnickerdoodleCheesecake from "../assets/images/specialties/cheesecake/dulce-de-leche-snickerdoodle-cheesecake.jpg";
import lemonBlueberryCheesecake from "../assets/images/specialties/cheesecake/lemon-blueberry-cheesecake.jpg";
import lemonMeringueCheesecake from "../assets/images/specialties/cheesecake/lemon-meringue-cheesecake.jpg";
import lemonMeringueCheesecake2 from "../assets/images/specialties/cheesecake/lemon-meringue-cheesecake-2.jpg";
import strawberryCheesecake from "../assets/images/specialties/cheesecake/strawberry-cheesecake.jpg";

/* =========================================================
   COOKIES
========================================================= */

import raspberryLemonadeCookies from "../assets/images/specialties/cookies/raspberry-lemonade-cookies.jpg";

/* =========================================================
   CUPCAKES
========================================================= */

import bananaPuddingCupcakes from "../assets/images/specialties/cupcakes/banana-pudding-cupcakes.jpg";
import blackAndWhiteCupcakes from "../assets/images/specialties/cupcakes/black-and-white-cupcakes.jpg";
import caramelBananaCupcakes from "../assets/images/specialties/cupcakes/caramel-banana-cupcakes.png";
import cherryFloatCupcakes from "../assets/images/specialties/cupcakes/cherry-float-cupcakes.jpg";
import chocolateBananaCupcakes from "../assets/images/specialties/cupcakes/chocolate-banana-cupcakes.jpg";
import chocolateBlueberryCupcakes from "../assets/images/specialties/cupcakes/chocolate-blueberry-cupcakes.jpg";
import chocolateCaramelCupcakes from "../assets/images/specialties/cupcakes/chocolate-caramel-cupcakes.png";
import chocolateMarshmallowCupcakes from "../assets/images/specialties/cupcakes/chocolate-marshmallow-cupcakes.jpg";
import cookiesAndCreamCupcakes from "../assets/images/specialties/cupcakes/cookies-and-cream-cupcakes.jpg";
import funfettiCupcakes from "../assets/images/specialties/cupcakes/funfetti-cupcakes.jpg";
import germanChocolateCupcakes from "../assets/images/specialties/cupcakes/german-chocolate-cupcakes.jpg";
import neopolitanSundaeCupcakes from "../assets/images/specialties/cupcakes/neopolitan-sundae-cupcakes.jpg";
import peanutButterChocolateCupcakes from "../assets/images/specialties/cupcakes/peanut-butter-chocolate-cupcakes.jpg";
import raspberryLemonadeCupcakes from "../assets/images/specialties/cupcakes/raspberry-lemonade-cupcakes.jpg";
import redVelvetCupcakes from "../assets/images/specialties/cupcakes/red-velvet-cupcakes.jpg";
import redVelvetPeppermintCupcakes from "../assets/images/specialties/cupcakes/red-velvet-peppermint-cupcakes.jpg";
import smoresCupcakes from "../assets/images/specialties/cupcakes/smores-cupcakes.jpg";
import snickerdoodleCupcakes from "../assets/images/specialties/cupcakes/snickerdoodle-cupcakes.jpg";
import strawberryCupcakes from "../assets/images/specialties/cupcakes/strawberry-cupcakes.jpg";
import strawberryLemonadeCupcakes from "../assets/images/specialties/cupcakes/strawberry-lemonade-cupcakes.jpg";
import strawberryShortcakeCupcakes from "../assets/images/specialties/cupcakes/strawberry-shortcake-cupcakes.jpg";
import watermelonCupcakes from "../assets/images/specialties/cupcakes/watermelon-cupcakes.jpg";

/* =========================================================
   OTHER SWEET TREATS
========================================================= */

import blueberryLemonBread from "../assets/images/specialties/other/blueberry-lemon-bread.jpg";
import cherryButterscotchBars from "../assets/images/specialties/other/cherry-butterscotch-bars.jpg";
import chocolateChipZucchiniBread from "../assets/images/specialties/other/chocolate-chip-zucchini-bread.png";
import miniPavlovas from "../assets/images/specialties/other/mini-pavlovas.jpg";
import strawberryBars from "../assets/images/specialties/other/strawberry-bars.png";
import strawberryCrunchBlondie from "../assets/images/specialties/other/strawberry-crunch-blondie.jpg";

/* =========================================================
   PIES
========================================================= */

import blueberryPeachPie from "../assets/images/specialties/pies/blueberry-peach-pie.jpg";
import pecanPie from "../assets/images/specialties/pies/pecan-pie.jpg";
import reesesPie from "../assets/images/specialties/pies/reeses-pie.png";
import strawberryPie from "../assets/images/specialties/pies/strawberry-pie.png";

/* =========================================================
   DATA
========================================================= */

const categories = [
    {
        id: "cakes",
        eyebrow: "Classic & Custom",
        title: "Specialty Cakes",
        description:
            "Rich, delicious cakes made for birthdays, celebrations, and every sweet occasion in between.",
        theme: "pink",
        items: [
            { name: "Banana Pudding Cake", image: bananaPuddingCake },
            { name: "Cannoli Cake", image: cannoliCake },
            { name: "Caramel Pound Cake", image: caramelPoundCake },
            { name: "Carrot Cake", image: carrotCake },
            { name: "Chocolate Banana Cake", image: chocolateBananaCake },
            { name: "Chocolate Cake", image: chocolateCake },
            { name: "Chocolate Caramel Cake", image: chocolateCaramelCake },
            { name: "Chocolate Caramel Cake", image: chocolateCaramelCake2 },
            { name: "German Chocolate Cake", image: germanChocolateCake },
            {
                name: "Inside-Out German Chocolate Cake",
                image: insideOutGermanChocolateCake,
            },
            { name: "Red Velvet Cake", image: redVelvetCake },
            {
                name: "Red Velvet Cheesecake Cake",
                image: redVelvetCheesecakeCake,
            },
            { name: "Reese's Cake", image: reesesCake },
            {
                name: "Strawberry Cheesecake Cake",
                image: strawberryCheesecakeCake,
            },
            {
                name: "Strawberry Pistachio Matcha Tres Leche Cake",
                image: strawberryPistachioMatchaTresLecheCake,
            },
            { name: "Sundae Cake", image: sundaeCake },
        ],
    },
    {
        id: "candy",
        eyebrow: "Sweet & Indulgent",
        title: "Fudge & Candy",
        description:
            "Handmade fudge, chocolate-covered treats, truffles, cake balls, and other little bites of happiness.",
        theme: "cream",
        items: [
            {
                name: "Blue Chocolate-Covered Strawberries",
                image: blueChocolateCoveredStrawberries,
            },
            {
                name: "Boozy Chocolate-Covered Strawberries",
                image: boozyChocolateCoveredStrawberries,
            },
            { name: "Butterfinger Fudge", image: butterfingerFudge },
            { name: "Caramel Apple Fudge", image: caramelAppleFudge },
            { name: "Chocolate Banana Fudge", image: chocolateBananaFudge },
            { name: "Chocolate Cake Balls", image: chocolateCakeBalls },
            {
                name: "Chocolate-Covered Strawberries",
                image: chocolateCoveredStrawberries,
            },
            { name: "Chocolate Fudge", image: chocolateFudge },
            { name: "Chocolate Truffles", image: chocolateTruffles },
            { name: "Coconut Strawberries", image: coconutStrawberries },
            { name: "Cookie Dough Fudge", image: cookieDoughFudge },
            {
                name: "Cookies & Cream Fudge",
                image: cookiesAndCreamFudge,
            },
            { name: "Cotton Candy Fudge", image: cottonCandyFudge },
            { name: "Creamsicle Fudge", image: creamsicleFudge },
            { name: "Hot Cocoa Bombs", image: hotCocoaBomb },
            { name: "Key Lime Pie Fudge", image: keyLimePieFudge },
            { name: "Oreo Mint Fudge", image: oreoMintFudge },
            { name: "Peanut Butter Fudge", image: peanutButterFudge },
            { name: "Red Velvet Fudge", image: redVelvetFudge },
            {
                name: "Strawberry Cheesecake Fudge",
                image: strawberryCheesecakeFudge,
            },
            {
                name: "Strawberry Crunch Fudge",
                image: strawberryCrunchFudge,
            },
            {
                name: "Strawberry Hot Cocoa Bombs",
                image: strawberryHotCocoaBombs,
            },
        ],
    },
    {
        id: "cheesecakes",
        eyebrow: "Rich & Creamy",
        title: "Cheesecakes",
        description:
            "Creamy, decadent cheesecakes with flavors ranging from fruity favorites to rich chocolate creations.",
        theme: "pink",
        items: [
            {
                name: "Blueberry Crumb Cheesecake",
                image: blueberryCrumbCheesecake,
            },
            {
                name: "Chocolate-Covered Strawberry Cheesecake",
                image: chocolateCoveredStrawberryCheesecake,
            },
            {
                name: "Circus Cookie Cheesecake",
                image: circusCookieCheesecake,
            },
            {
                name: "Dulce de Leche Snickerdoodle Cheesecake",
                image: dulceDeLecheSnickerdoodleCheesecake,
            },
            {
                name: "Lemon Blueberry Cheesecake",
                image: lemonBlueberryCheesecake,
            },
            {
                name: "Lemon Meringue Cheesecake",
                image: lemonMeringueCheesecake,
            },
            {
                name: "Lemon Meringue Cheesecake",
                image: lemonMeringueCheesecake2,
            },
            {
                name: "Strawberry Cheesecake",
                image: strawberryCheesecake,
            },
        ],
    },
    {
        id: "cookies",
        eyebrow: "Freshly Baked",
        title: "Cookies",
        description:
            "From specialty flavors to classic favorites, cookies make the perfect little treat for any occasion.",
        theme: "cream",
        items: [
            {
                name: "Raspberry Lemonade Cookies",
                image: raspberryLemonadeCookies,
            },
        ],
    },
    {
        id: "cupcakes",
        eyebrow: "Perfectly Frosted",
        title: "Cupcakes",
        description:
            "Perfectly portioned treats in a variety of specialty flavors for birthdays, showers, parties, and everyday celebrations.",
        theme: "pink",
        items: [
            {
                name: "Banana Pudding Cupcakes",
                image: bananaPuddingCupcakes,
            },
            {
                name: "Black & White Cupcakes",
                image: blackAndWhiteCupcakes,
            },
            {
                name: "Caramel Banana Cupcakes",
                image: caramelBananaCupcakes,
            },
            {
                name: "Cherry Float Cupcakes",
                image: cherryFloatCupcakes,
            },
            {
                name: "Chocolate Banana Cupcakes",
                image: chocolateBananaCupcakes,
            },
            {
                name: "Chocolate Blueberry Cupcakes",
                image: chocolateBlueberryCupcakes,
            },
            {
                name: "Chocolate Caramel Cupcakes",
                image: chocolateCaramelCupcakes,
            },
            {
                name: "Chocolate Marshmallow Cupcakes",
                image: chocolateMarshmallowCupcakes,
            },
            {
                name: "Cookies & Cream Cupcakes",
                image: cookiesAndCreamCupcakes,
            },
            { name: "Funfetti Cupcakes", image: funfettiCupcakes },
            {
                name: "German Chocolate Cupcakes",
                image: germanChocolateCupcakes,
            },
            {
                name: "Neapolitan Sundae Cupcakes",
                image: neopolitanSundaeCupcakes,
            },
            {
                name: "Peanut Butter Chocolate Cupcakes",
                image: peanutButterChocolateCupcakes,
            },
            {
                name: "Raspberry Lemonade Cupcakes",
                image: raspberryLemonadeCupcakes,
            },
            {
                name: "Red Velvet Cupcakes",
                image: redVelvetCupcakes,
            },
            {
                name: "Red Velvet Peppermint Cupcakes",
                image: redVelvetPeppermintCupcakes,
            },
            { name: "S'mores Cupcakes", image: smoresCupcakes },
            {
                name: "Snickerdoodle Cupcakes",
                image: snickerdoodleCupcakes,
            },
            {
                name: "Strawberry Cupcakes",
                image: strawberryCupcakes,
            },
            {
                name: "Strawberry Lemonade Cupcakes",
                image: strawberryLemonadeCupcakes,
            },
            {
                name: "Strawberry Shortcake Cupcakes",
                image: strawberryShortcakeCupcakes,
            },
            {
                name: "Watermelon Cupcakes",
                image: watermelonCupcakes,
            },
        ],
    },
    {
        id: "other",
        eyebrow: "A Little Something Extra",
        title: "Other Sweet Treats",
        description:
            "Dessert bars, breads, blondies, pavlovas, and other specialty sweets to make dessert a little more delicious.",
        theme: "cream",
        items: [
            {
                name: "Blueberry Lemon Bread",
                image: blueberryLemonBread,
            },
            {
                name: "Cherry Butterscotch Bars",
                image: cherryButterscotchBars,
            },
            {
                name: "Chocolate Chip Zucchini Bread",
                image: chocolateChipZucchiniBread,
            },
            { name: "Mini Pavlovas", image: miniPavlovas },
            { name: "Strawberry Bars", image: strawberryBars },
            {
                name: "Strawberry Crunch Blondie",
                image: strawberryCrunchBlondie,
            },
        ],
    },
    {
        id: "pies",
        eyebrow: "Homemade & Delicious",
        title: "Pies",
        description:
            "Classic pies and decadent dessert pies made to bring a little extra sweetness to the table.",
        theme: "pink",
        items: [
            { name: "Blueberry Peach Pie", image: blueberryPeachPie },
            { name: "Pecan Pie", image: pecanPie },
            { name: "Reese's Pie", image: reesesPie },
            { name: "Strawberry Pie", image: strawberryPie },
        ],
    },
];

/* =========================================================
   COMPONENT
========================================================= */

function Specialties() {
    return (
        <div className="specialties-page">
            {/* HERO */}
            <section className="specialties-hero">
                <div className="specialties-container">
                    <Link to="/" className="back-home-button">
                        <ArrowLeft size={14} />
                        Back to Home
                    </Link>

                    <div className="specialties-hero-content">
                        <div className="specialties-eyebrow">
                            <span />
                            <Sparkles size={13} />
                            <span>Made with love</span>
                            <Sparkles size={13} />
                            <span />
                        </div>

                        <h1>Our Specialties</h1>

                        <p>
                            A little look at some of the cakes,
                            cupcakes, candies, cookies, cheesecakes,
                            pies, and sweet treats we love creating
                            at Country Rose Cakes &amp; Candy.
                        </p>
                    </div>
                </div>
            </section>

            {/* CATEGORY NAVIGATION */}
            <nav className="specialties-nav">
                <div className="specialties-container">
                    <p className="specialties-nav-label">
                        Browse our sweet selection
                    </p>

                    <div className="specialties-nav-links">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={`#${category.id}`}
                            >
                                {category.title}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* SPECIALTY CATEGORIES */}
            <main>
                {categories.map((category) => (
                    <section
                        key={category.id}
                        id={category.id}
                        className={`specialty-category specialty-category-${category.theme}`}
                    >
                        <div className="specialties-container">
                            <div className="specialty-heading">
                                <p className="specialty-eyebrow">
                                    {category.eyebrow}
                                </p>

                                <h2>{category.title}</h2>

                                <div className="specialty-heading-line">
                                    <span />
                                    <Heart
                                        size={14}
                                        fill="currentColor"
                                    />
                                    <span />
                                </div>

                                <p className="specialty-description">
                                    {category.description}
                                </p>
                            </div>

                            <div className="specialty-grid">
                                {category.items.map(
                                    (item, index) => (
                                        <article
                                            className="specialty-card"
                                            key={`${category.id}-${item.name}-${index}`}
                                        >
                                            <div className="specialty-card-inner">
                                                <div className="specialty-image-wrap">
                                                    <img
                                                        src={item.image}
                                                        alt={`${item.name} by Country Rose Cakes & Candy`}
                                                        className="specialty-image"
                                                        loading="lazy"
                                                    />

                                                    <div className="specialty-image-overlay" />
                                                </div>

                                                <div className="specialty-card-content">
                                                    <h3>
                                                        {item.name}
                                                    </h3>

                                                    <a
                                                        href={`/?item=${encodeURIComponent(
                                                            item.name
                                                        )}&category=${encodeURIComponent(
                                                            category.title
                                                        )}#contact`}
                                                        className="specialty-order-link"
                                                    >
                                                        Order This
                                                        <ArrowRight
                                                            size={13}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            {/* CTA */}
            <section className="specialties-cta">
                <div className="specialties-cta-content">
                    <p className="specialties-cta-eyebrow">
                        Have Something Sweet In Mind?
                    </p>

                    <h2>
                        Let's Make Something{" "}
                        <span>Delicious</span>
                    </h2>

                    <p>
                        Don't see exactly what you're looking for?
                        Country Rose Cakes &amp; Candy loves creating
                        something special just for you.
                    </p>

                    <Link
                        to="/#contact"
                        className="specialties-cta-button"
                    >
                        Start Your Order
                        <Heart size={15} fill="currentColor" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Specialties;