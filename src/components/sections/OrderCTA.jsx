import { ArrowRight, Heart, Sparkles } from "lucide-react";

function OrderCTA() {
    return (
        <section className="order-cta" id="order">
            <div className="order-cta-pattern" />

            <div className="container order-cta-container">
                <div className="order-cta-decoration order-cta-decoration-left">✿</div>

                <div className="order-cta-content">
                    <div className="order-cta-kicker">
                        <Sparkles size={15} />
                        <span>Something sweet is calling</span>
                        <Sparkles size={15} />
                    </div>

                    <h2>
                        Ready for
                        <br />
                        <span className="script">Something Sweet?</span>
                    </h2>

                    <p>
                        Whether you're dreaming up a custom cake, craving chocolate-covered strawberries, or just need a little sweetness in your day, we'd love to make something special for you.
                    </p>

                    <div className="order-cta-buttons">
                        <a href="#contact" className="order-cta-primary">
                            Start Your Order
                            <ArrowRight size={17} />
                        </a>
                    </div>
                </div>

                <div className="order-cta-badge">
                    <Heart size={17} fill="currentColor" />

                    <span>Made with</span>

                    <strong className="script">Love</strong>

                    <span>by Country Rose</span>
                </div>

                <div className="order-cta-decoration order-cta-decoration-right">
                    ✿
                </div>
            </div>

            <div className="order-cta-scallop" />
        </section>
    );
}

export default OrderCTA;