import { ArrowDown, Heart, Sparkles } from "lucide-react";
import heroCupcakes from "../../assets/images/hero-cupcakes.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-pattern" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-sticker">
            <Sparkles size={14} />
            <span>Freshly Baked</span>
            <Sparkles size={14} />
          </div>

          <p className="hero-kicker">Sweet things made with love</p>

          <h1>
            A Little Bit
            <br />
            <span className="script">Country</span>
            <br />
            A Lot of <span className="script">Sweet</span>
          </h1>

          <p className="hero-description">
            Homemade cakes, delightful candies, and sweet treats made from
            scratch with a whole lot of love.
          </p>

          <div className="hero-buttons">
            <a href="#goodies" className="hero-button hero-button-primary">
              View Our Goodies
            </a>

            <a href="/#contact" className="hero-button hero-button-secondary">
              Order Something Sweet
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-photo">
            <img
                src={heroCupcakes}
                alt="Beautifully decorated Country Rose cupcakes"
            />

            <div className="hero-photo-caption">
                <span className="script">Made with love</span>
                <small>Fresh from the Country Rose kitchen</small>
            </div>
          </div>

          <div className="hero-note hero-note-top">
            <Heart size={15} fill="currentColor" />
            <span>Made with love</span>
          </div>

          <div className="hero-note hero-note-bottom">
            <span className="script">So much</span>
            <strong>goodness!</strong>
          </div>

          <div className="hero-flower flower-one">✿</div>
          <div className="hero-flower flower-two">✿</div>
        </div>
      </div>

      <a href="#goodies" className="hero-scroll">
        <span>Scroll to explore</span>
        <ArrowDown size={17} />
      </a>

      <div className="hero-scallop" />
    </section>
  );
}

export default Hero;