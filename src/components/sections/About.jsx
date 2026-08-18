import { Heart, Sparkles, CakeSlice } from "lucide-react";
import lemonMeringueCheesecake from "../../assets/images/lemon-meringue-cheesecake.png"

function About() {
    return (
        <section className="about" id="about">
            <div className="about-pattern" />

            <div className="container about-container">
                <div className="about-photos">
                    <div className="about-photo about-photo-main">
                        <img
                            src={lemonMeringueCheesecake}
                            alt="Homemade lemon meringue cheesecake by Country Rose Cakes & Candy"
                        />
                    </div>

                    <div className="about-photo about-photo-small">
                        <div className="about-mini-card">
                            <span className="script">Sweet</span>
                            <strong>memories</strong>
                        </div>
                    </div>

                    <div className="about-note">
                        <Heart size={15} fill="currentColor" />
                        <span>Baked with love</span>
                    </div>

                    <div className="about-flower about-flower-one">✿</div>
                    <div className="about-flower about-flower-two">✿</div>
                </div>

                <div className="about-content">
                    <div className="about-kicker">
                        <Sparkles size={15} />
                        <span>A little about us</span>
                        <Sparkles size={15} />
                    </div>

                    <h2>
                        Sweet treats,
                        <br />
                        <span className="script">made from the heart.</span>
                    </h2>

                    <div className="about-divider">
                        <span>♥</span>
                        <div />
                        <span>♥</span>
                    </div>

                    <p className="about-lead">
                        At Country Rose Cakes & Candy, we believe the best memories are made around the table with something sweet nearby.
                    </p>

                    <p>
                        Every cake, cupcakae, cookie, cheesecake, and chocolate-covered strawberry is made with care, creativity, and plenty of love. Whether you're celebrating a birthday, shower, holiday, or just treating yourself, we're here to make your sweet moment a little more special.
                    </p>

                    <div className="about-values">
                        <div className="about-value">
                            <div className="about-value-icon">
                                <Heart size={19} fill="currentColor" />
                            </div>

                            <div>
                                <strong>Made with love</strong>
                                <span>Every order gets a personal touch.</span>
                            </div>
                        </div>

                        <div className="about-value">
                            <div className="about-value-icon mint">
                                <CakeSlice size={19} />
                            </div>

                            <div>
                                <strong>Made Fresh</strong>
                                <span>Sweet treats made from scratch.</span>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" className="about-button">
                        Get to Know Us
                    </a>
                </div>
            </div>

            <div className="about-badge">
                <span>COUNTRY ROSE</span>
                <strong className="script">Sweetness</strong>
                <span>CAKES • CANDY • LOVE</span>
            </div>

            <div className="about-scallop" />
        </section>
    );
}

export default About;