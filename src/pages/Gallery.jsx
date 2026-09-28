import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Sparkles,
    X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

/* =========================================================
   HELPERS
========================================================= */

function formatName(path) {
    const fileName = path
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "");

    if (!fileName) {
        return "Country Rose Creation";
    }

    return fileName
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (letter) =>
            letter.toUpperCase()
        );
}

function getCategory(name) {
    const value = name.toLowerCase();

    /* CUPCAKES */
    if (
        value.includes("cupcake") ||
        value.includes("cup-cake")
    ) {
        return "Cupcakes";
    }

    /* COOKIES */
    if (
        value.includes("cookie") ||
        value.includes("sugar-cookie")
    ) {
        return "Cookies";
    }

    /* CELEBRATIONS */
    if (
        value.includes("birthday") ||
        value.includes("graduation") ||
        value.includes("wedding") ||
        value.includes("baby") ||
        value.includes("shower") ||
        value.includes("engagement") ||
        value.includes("retirement") ||
        value.includes("father") ||
        value.includes("thanksgiving") ||
        value.includes("halloween") ||
        value.includes("easter") ||
        value.includes("holiday") ||
        value.includes("christmas")
    ) {
        return "Celebrations";
    }

    /* EVERYTHING ELSE */
    return "Cakes";
}

/* =========================================================
   GALLERY DATA
========================================================= */
const galleryImages = [
    "18-cake.jpg",
    "alice-in-wonderland-graduation-cake.png",
    "alice-in-wonderland-cake-2.png",
    "american-flag-cookies.jpg",
    "angry-birds-cake.jpg",
    "anna-doll-cake.jpg",
    "aquaman-cupcakes.jpg",
    "ariel-cake.jpg",
    "baby-carriage-cookies.jpg",
    "baby-rattle-cookies.jpg",
    "baby-shower-cake.png",
    "baseball-cake.png",
    "baseball-cake-2.jpg",
    "baseball-cookie-cake.jpg",
    "baseball-cupcakes.png",
    "beauty-and-the-beast-cake.jpg",
    "belle-cupcake-cake.jpg",
    "birthday-cake.jpg",
    "birthday-cake.png",
    "birthday-cake-2.png",
    "birthday-cake-3.png",
    "birthday-cake-4.png",
    "birthday-cake-5.png",
    "birthday-cake-6.png",
    "birthday-cake-7.png",
    "birthday-cake-8.png",
    "birthday-cake-9.png",
    "birthday-cake-10.png",
    "birthday-cake-11.png",
    "birthday-cake-12.png",
    "birthday-cake-13.jpg",
    "birthday-cake-14.jpg",
    "birthday-cake-15.jpg",
    "birthday-cake-16.jpg",
    "birthday-cake-17.jpg",
    "birthday-cake-18.jpg",
    "birthday-cake-19.jpg",
    "birthday-cake-20.jpg",
    "birthday-cake-21.jpg",
    "birthday-cake-22.jpg",
    "birthday-cake-23.jpg",
    "birthday-cake-24.jpg",
    "birthday-cake-25.jpg",
    "birthday-cake-26.jpg",
    "birthday-cake-27.jpg",
    "birthday-cake-28.jpg",
    "birthday-cake-29.jpg",
    "birthday-cake-30.jpg",
    "birthday-cake-31.jpg",
    "birthday-cake-32.jpg",
    "birthday-cake-33.jpg",
    "birthday-cake-34.jpg",
    "birthday-cake-35.jpg",
    "birthday-cake-36.jpg",
    "birthday-cake-with-cupcakes.png",
    "birthday-cake-with-cupcakes-2.jpg",
    "birthday-cake-with-cupcakes-3.jpg",
    "blood-donation-cake.jpg",
    "browning-cake.jpg",
    "butterfly-cake.jpg",
    "butterfly-cake-2.png",
    "butterfly-cake-3.jpg",
    "butterfly-cupcakes.png",
    "camo-baby-shower-cake.jpg",
    "camo-dirtbike-cake.jpg",
    "camo-doll-cake.png",
    "camping-cake.jpg",
    "car-cupcake-cake.png",
    "cars-cake.jpg",
    "cars-cookie-cake.jpg",
    "cars-cupcakes.jpg",
    "cars-cupcakes-2.jpg",
    "caterpillar-cake.jpg",
    "chesire-cat-cake.png",
    "cookie-cake.png",
    "cookie-cake-with-cupcakes.png",
    "cookie-monster-cupcake-cake.jpg",
    "crayon-cupcakes.jpg",
    "cupcake-cupcake-cake.jpg",
    "cupcakes.jpg",
    "cupcakes-2.png",
    "cupcakes-3.png",
    "cupcakes-4.png",
    "cupcakes-5.png",
    "cupcakes-6.png",
    "cupcakes-7.png",
    "cupcakes-8.png",
    "cupcakes-9.png",
    "dad-tic-tac-toe-cookie-cake.png",
    "descendants-cake.png",
    "descendants-cake-2.jpg",
    "dino-cake.png",
    "dino-cake-2.png",
    "dino-cookie-cake.png",
    "dino-cupcakes.jpg",
    "dirtbike-cake.png",
    "disney-princess-cake.png",
    "disney-princess-cake-2.png",
    "disney-princess-cake-3.jpg",
    "disney-princess-cake-4.jpg",
    "disney-princess-cupcakes.png",
    "dora-cupcakes.jpg",
    "easter-bunny-cake.jpg",
    "elmo-cake.png",
    "emoji-cake.jpg",
    "emoji-cupcakes.jpg",
    "engagement-cookies.jpg",
    "fathers-day-cake.jpg",
    "fathers-day-cake-2.jpg",
    "fathers-day-cupcakes.png",
    "fathers-day-cupcakes-2.png",
    "feather-cake.png",
    "firetruck-cake.jpg",
    "firetruck-cake-2.jpg",
    "fishbowl-cupcake-cake.jpg",
    "fishing-cake.png",
    "fishing-cake-2.png",
    "fishing-cake-3.jpg",
    "fishing-cake-4.jpg",
    "fishing-cake-5.jpg",
    "fishing-cake-6.jpg",
    "fishing-in-the-dark-cake.jpg",
    "flamingo-cupcake-cake.png",
    "flower-cake.jpg",
    "flower-cookie-cake.jpg",
    "flower-cookie-cake-with-cupcakes.png",
    "flower-cookies.png",
    "football-cake.jpg",
    "ford-cake.jpg",
    "ford-cake-2.jpg",
    "fox-cake.jpg",
    "frozen-cake.png",
    "frozen-cake-2.jpg",
    "frozen-cookie-cake.png",
    "golf-cake.jpg",
    "graduation-cake.png",
    "gun-cake.jpg",
    "halloween-baby-shower-cake.png",
    "hello-kitty-cookie-cake.png",
    "hello-kitty-cupcakes.jpg",
    "ice-cream-cake.jpg",
    "jake-and-the-neverland-pirates-cake.jpg",
    "joe-exotic-cookie-cake.jpg",
    "jojo-siwa-cake.jpg",
    "kindergarten-graduation-cake.jpg",
    "lips-cake.jpg",
    "mermaid-cake.jpg",
    "mermaid-cake-2.png",
    "mermaid-cupcakes.jpg",
    "mickey-and-minnie-cake.jpg",
    "mickey-mouse-cake.jpg",
    "mickey-roadster-cake.jpg",
    "minecraft-cake.jpg",
    "mini-flower-cupcakes.jpg",
    "minion-cookies.jpg",
    "minion-cupcake-cake.jpg",
    "minnie-mouse-cake.png",
    "minnie-mouse-cake-2.jpg",
    "monster-high-cake.png",
    "monster-high-doll-cake.png",
    "mustang-cake.jpg",
    "my-little-pony-cake.png",
    "noahs-ark-cake.png",
    "owl-baby-shower.png",
    "owl-cake.png",
    "penguin-cupcakes.jpg",
    "peppa-pig-cake.png",
    "peppa-pig-cake-2.png",
    "peppa-pig-cupcakes.png",
    "pj-masks-cookie-cake.png",
    "pj-masks-cupcakes.jpg",
    "pokemon-graduation-cake.jpg",
    "pokemon-graduation-cake-2.jpg",
    "poker-fathers-day-cookie-cake.jpg",
    "popcorn-fathers-day-cake.png",
    "popsicle-cookies.jpg",
    "popsicle-fathers-day-cake.jpg",
    "puppy-safe-cake.jpg",
    "purple-and-blue-flower-cake.jpg",
    "purple-cake.png",
    "purple-flower-cake.png",
    "rainbow-rose-cake.jpg",
    "ravenclaw-cake.jpg",
    "retirement-cake.jpg",
    "retirement-cake-2.jpg",
    "retirement-cookie-cake.jpg",
    "rocket-cake.png",
    "seahawks-cake.png",
    "shark-cake.jpg",
    "shimmer-and-shine-cake.png",
    "shimmer-and-shine-cake-2.jpg",
    "shopkins-cake.png",
    "skull-cake.png",
    "skull-cookie-cake.jpg",
    "slytherin-cake.jpg",
    "snowflake-cake.jpg",
    "spongebob-cake.png",
    "spongebob-cake-2.png",
    "star-wars-cake.jpg",
    "star-wars-cake-2.jpg",
    "stitch-cake.jpg",
    "sunflower-cake.jpg",
    "sunflower-cake-2.jpg",
    "sunflower-cake-3.jpg",
    "sunflower-cupcakes.jpg",
    "sunshine-cookies.jpg",
    "superhero-cake.jpg",
    "superman-cupcakes.jpg",
    "superman-fathers-day-cake.jpg",
    "supernatural-cake.jpg",
    "taco-fathers-day-cookie-cake.jpg",
    "teddy-bear-baby-cake.png",
    "teenage-mutant-ninja-turtles.jpg",
    "tennessee-donuts.jpg",
    "thanksgiving-cake.jpg",
    "tie-dye-birthday-cake.png",
    "tik-tok-cake.jpg",
    "toy-story-cake.jpg",
    "tractor-cake.png",
    "tractor-cake-2.jpg",
    "truck-cake.jpg",
    "turtle-cupcake-cake.png",
    "unicorn-cake.jpg",
    "unicorn-cupcakes.jpg",
    "unicorn-cupcakes-2.jpg",
    "wedding-cake.jpg",
    "whale-fathers-day-cake.jpg",
    "wiggles-cake.png",
    "wiggles-car-cake.jpg",
    "wizard-of-oz-cake.png",
    "woodland-baby-shower-cake.png",
    "woodland-baby-shower-cake-2.png",
    "world-of-warcraft-cake.jpg",
    "zebra-birthday-cake.png",
    "zoo-baby-cake.png",
];


/* =========================================================
   GALLERY DATA
========================================================= */

const galleryItems = galleryImages
    .map((fileName, index) => {
        const name = formatName(fileName);

        return {
            id: `${name}-${index}`,
            name,
            src: `/images/gallery/${fileName}`,
            category: getCategory(name),
        };
    })
    .sort((a, b) =>
        a.name.localeCompare(b.name)
    );

/* =========================================================
   FILTERS
========================================================= */

const filters = [
    "All",
    "Cakes",
    "Cupcakes",
    "Cookies",
    "Celebrations",
];

/* =========================================================
   COMPONENT
========================================================= */

function Gallery() {
    const [activeFilter, setActiveFilter] =
        useState("All");

    const [selectedImage, setSelectedImage] =
        useState(null);

    /* =====================================================
       FILTER IMAGES
    ===================================================== */

    const filteredImages = useMemo(() => {
        if (activeFilter === "All") {
            return galleryItems;
        }

        return galleryItems.filter(
            (item) =>
                item.category === activeFilter
        );
    }, [activeFilter]);

    /* =====================================================
       SELECTED IMAGE INDEX
    ===================================================== */

    const selectedIndex = selectedImage
        ? filteredImages.findIndex(
              (item) =>
                  item.id === selectedImage.id
          )
        : -1;

    /* =====================================================
       LIGHTBOX CONTROLS
    ===================================================== */

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const showPrevious = () => {
        if (!filteredImages.length) {
            return;
        }

        const previousIndex =
            selectedIndex <= 0
                ? filteredImages.length - 1
                : selectedIndex - 1;

        setSelectedImage(
            filteredImages[previousIndex]
        );
    };

    const showNext = () => {
        if (!filteredImages.length) {
            return;
        }

        const nextIndex =
            selectedIndex >=
            filteredImages.length - 1
                ? 0
                : selectedIndex + 1;

        setSelectedImage(
            filteredImages[nextIndex]
        );
    };

    /* =====================================================
       KEYBOARD LIGHTBOX CONTROLS
    ===================================================== */

    useEffect(() => {
        if (!selectedImage) {
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "";
        };
    }, [
        selectedImage,
        selectedIndex,
        filteredImages,
    ]);

    return (
        <div
            className="gallery-page"
            id="gallery-top"
        >
            {/* =================================================
                HERO
            ================================================== */}

            <section className="gallery-hero">
                <div className="gallery-container">
                    <Link
                        to="/"
                        className="gallery-back-button"
                    >
                        <ArrowLeft size={15} />
                        Back to Home
                    </Link>

                    <div className="gallery-hero-content">
                        <div className="gallery-eyebrow">
                            <span />

                            <Sparkles size={13} />

                            <span>
                                Made with love
                            </span>

                            <Sparkles size={13} />

                            <span />
                        </div>

                        <h1>
                            Our
                            <span>Gallery</span>
                        </h1>

                        <div className="gallery-heading-divider">
                            <span />

                            <Heart
                                size={16}
                                fill="currentColor"
                            />

                            <span />
                        </div>

                        <p>
                            A little look at some of the
                            sweet creations we've made
                            for our wonderful customers.
                            Every cake, cupcake, cookie,
                            and celebration is made with
                            care and a whole lot of love.
                        </p>
                    </div>
                </div>
            </section>

            {/* =================================================
                FILTER BAR
            ================================================== */}

            <section className="gallery-filter-section">
                <div className="gallery-container">
                    <div className="gallery-filter-header">
                        <div>
                            <span className="gallery-section-label">
                                BROWSE OUR CREATIONS
                            </span>

                            <h2>
                                Sweet
                                <span>Moments</span>
                            </h2>
                        </div>

                        <div className="gallery-count">
                            {filteredImages.length}{" "}
                            {filteredImages.length === 1
                                ? "creation"
                                : "creations"}
                        </div>
                    </div>

                    <div className="gallery-controls">
                        <div className="gallery-filters">
                            {filters.map(
                                (filter) => (
                                    <button
                                        key={
                                            filter
                                        }
                                        type="button"
                                        onClick={() =>
                                            setActiveFilter(
                                                filter
                                            )
                                        }
                                        className={
                                            activeFilter ===
                                            filter
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {filter}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================
                GALLERY
            ================================================== */}

            <main className="gallery-content">
                <div className="gallery-container">
                    {filteredImages.length >
                    0 ? (
                        <motion.div
                            layout
                            className="gallery-grid"
                        >
                            {filteredImages.map(
                                (
                                    item,
                                    index
                                ) => (
                                    <motion.button
                                        key={
                                            item.id
                                        }
                                        type="button"
                                        layout
                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.96,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay:
                                                (index %
                                                    8) *
                                                0.035,
                                        }}
                                        className="gallery-card"
                                        onClick={() =>
                                            setSelectedImage(
                                                item
                                            )
                                        }
                                    >
                                        <div className="gallery-card-image">
                                            <img
                                                src={
                                                    item.src
                                                }
                                                alt={`${item.name} by Country Rose Cakes & Candy`}
                                                loading={
                                                    index <
                                                    8
                                                        ? "eager"
                                                        : "lazy"
                                                }
                                            />

                                            <div className="gallery-card-overlay">
                                                <div className="gallery-view-icon">
                                                    <Heart
                                                        size={
                                                            18
                                                        }
                                                        fill="currentColor"
                                                    />
                                                </div>

                                                <span>
                                                    View
                                                    Creation
                                                </span>
                                            </div>
                                        </div>

                                        <div className="gallery-card-info">
                                            <span>
                                                {
                                                    item.category
                                                }
                                            </span>

                                            <h3>
                                                {
                                                    item.name
                                                }
                                            </h3>
                                        </div>
                                    </motion.button>
                                )
                            )}
                        </motion.div>
                    ) : (
                        <div className="gallery-empty">
                            <Heart
                                size={28}
                                fill="currentColor"
                            />

                            <h3>
                                Nothing sweet
                                found
                            </h3>

                            <p>
                                Choose another
                                category to see
                                more creations.
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    setActiveFilter(
                                        "All"
                                    )
                                }
                            >
                                Show All
                                Creations
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* =================================================
                CTA
            ================================================== */}

            <section className="gallery-cta">
                <div className="gallery-container">
                    <div className="gallery-cta-card">
                        <div className="gallery-cta-decoration">
                            <Heart
                                size={30}
                                fill="currentColor"
                            />
                        </div>

                        <span className="gallery-section-label">
                            HAVE SOMETHING SWEET IN
                            MIND?
                        </span>

                        <h2>
                            Let's Create
                            <span>
                                Something Special
                            </span>
                        </h2>

                        <p>
                            Have an idea for a
                            custom cake, cupcakes,
                            cookies, or something
                            completely unique? We'd
                            love to bring your vision
                            to life.
                        </p>

                        <Link
                            to="/#contact"
                            className="gallery-cta-button"
                        >
                            Start Your Order
                            <ArrowRight
                                size={17}
                            />
                        </Link>

                        <div className="gallery-cta-hearts">
                            <span>♥</span>
                            <span>✦</span>
                            <span>♥</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================
                LIGHTBOX
            ================================================== */}

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="gallery-lightbox"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={
                            closeLightbox
                        }
                    >
                        {/* CLOSE */}

                        <button
                            type="button"
                            className="gallery-lightbox-close"
                            onClick={
                                closeLightbox
                            }
                            aria-label="Close image"
                        >
                            <X size={24} />
                        </button>

                        {/* PREVIOUS */}

                        <button
                            type="button"
                            className="gallery-lightbox-prev"
                            onClick={(
                                event
                            ) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            aria-label="Previous image"
                        >
                            <ArrowLeft
                                size={24}
                            />
                        </button>

                        {/* IMAGE */}

                        <motion.div
                            className="gallery-lightbox-content"
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                            }}
                            onClick={(
                                event
                            ) =>
                                event.stopPropagation()
                            }
                        >
                            <img
                                src={
                                    selectedImage.src
                                }
                                alt={`${selectedImage.name} by Country Rose Cakes & Candy`}
                                className="gallery-lightbox-image"
                            />

                            <div className="gallery-lightbox-caption">
                                <span>
                                    {
                                        selectedImage.category
                                    }
                                </span>

                                <h3>
                                    {
                                        selectedImage.name
                                    }
                                </h3>

                                <div className="gallery-lightbox-counter">
                                    {selectedIndex +
                                        1}{" "}
                                    /{" "}
                                    {
                                        filteredImages.length
                                    }
                                </div>
                            </div>
                        </motion.div>

                        {/* NEXT */}

                        <button
                            type="button"
                            className="gallery-lightbox-next"
                            onClick={(
                                event
                            ) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            aria-label="Next image"
                        >
                            <ArrowRight
                                size={24}
                            />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Gallery;