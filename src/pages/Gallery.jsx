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
   GALLERY IMAGES
========================================================= */

const imageModules = import.meta.glob(
    "../assets/images/Gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

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

const galleryItems = Object.entries(imageModules)
    .map(([path, src], index) => {
        const name = formatName(path);

        return {
            id: `${name}-${index}`,
            name,
            src,
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