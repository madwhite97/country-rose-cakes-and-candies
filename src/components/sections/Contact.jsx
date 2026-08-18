import { useState } from "react";
import {
    CakeSlice,
    Heart,
    Mail,
    MapPin,
    Phone,
    Sparkles,
} from "lucide-react";

function Contact() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setStatus("sending");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://formspree.io/f/mbgrprbz",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-paper">
                <div className="container contact-container">
                    <div className="contact-info">
                        <div className="contact-kicker">
                            <Sparkles size={15} />
                            <span>Let's make something sweet</span>
                            <Sparkles size={15} />
                        </div>

                        <h2>
                            Tell us what
                            <br />
                            you're{" "}
                            <span className="script">
                                dreaming up.
                            </span>
                        </h2>

                        <div className="contact-divider">
                            <Heart size={16} fill="currentColor" />
                            <div />
                            <Heart size={16} fill="currentColor" />
                        </div>

                        <p className="contact-intro">
                            Have a special celebration coming up?
                            Looking for the perfect sweet treat? Send us
                            a little information about what you have in
                            mind and we'll be in touch.
                        </p>

                        <div className="contact-details">
                            <a
                                href="tel:+17203128125"
                                className="contact-detail"
                            >
                                <span className="contact-icon">
                                    <Phone size={18} />
                                </span>

                                <span>
                                    <strong>Give us a call</strong>
                                    <small>(720) 312-8125</small>
                                </span>
                            </a>

                            <a
                                href="mailto:madwhite97@gmail.com"
                                className="contact-detail"
                            >
                                <span className="contact-icon mint">
                                    <Mail size={18} />
                                </span>

                                <span>
                                    <strong>Send us an email</strong>
                                    <small>
                                        hello@countryrosecakes.com
                                    </small>
                                </span>
                            </a>

                            <div className="contact-detail">
                                <span className="contact-icon pink">
                                    <MapPin size={18} />
                                </span>

                                <span>
                                    <strong>
                                        Serving our community
                                    </strong>
                                    <small>
                                        Local pickup &amp; delivery
                                        available
                                    </small>
                                </span>
                            </div>
                        </div>

                        <div className="contact-mini-note">
                            <CakeSlice size={18} />

                            <span className="script">
                                Big celebrations or little cravings -
                                <br />
                                we've got something sweet for you.
                            </span>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <div className="contact-tape contact-tape-one" />
                        <div className="contact-tape contact-tape-two" />

                        {status === "success" ? (
                            <div className="contact-success">
                                <div className="contact-success-icon">
                                    <Heart
                                        size={32}
                                        fill="currentColor"
                                    />
                                </div>

                                <span className="script">
                                    Sweet Success!
                                </span>

                                <h3>
                                    Your sweet request has been sent!
                                </h3>

                                <p>
                                    Thank you for reaching out to
                                    Country Rose Cakes &amp; Candy.
                                    We've received your request and
                                    will be in touch as soon as
                                    possible. 💕
                                </p>

                                <button
                                    type="button"
                                    className="contact-submit"
                                    onClick={() => setStatus("idle")}
                                >
                                    Send Another Request
                                    <Heart
                                        size={17}
                                        fill="currentColor"
                                    />
                                </button>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-header">
                                    <span className="script">
                                        Sweet Inquiry
                                    </span>

                                    <small>
                                        Tell us all about it!
                                    </small>
                                </div>

                                {status === "error" && (
                                    <div className="form-error">
                                        <strong>
                                            Something went wrong.
                                        </strong>

                                        <span>
                                            We couldn't send your
                                            request. Please try again
                                            or contact us directly.
                                        </span>
                                    </div>
                                )}

                                <div className="form-row">
                                    <label>
                                        Your Name
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="First & last name"
                                            required
                                        />
                                    </label>

                                    <label>
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Phone
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="(000) 000-0000"
                                        />
                                    </label>

                                    <label>
                                        Event Date
                                        <input
                                            type="date"
                                            name="eventDate"
                                        />
                                    </label>
                                </div>

                                <label>
                                    What are you ordering?

                                    <select
                                        name="treat"
                                        required
                                    >
                                        <option value="">
                                            Choose a sweet treat...
                                        </option>

                                        <option value="cake">
                                            Custom Cake
                                        </option>

                                        <option value="cupcakes">
                                            Cupcakes
                                        </option>

                                        <option value="cookies">
                                            Cookies
                                        </option>

                                        <option value="strawberries">
                                            Chocolate-Covered
                                            Strawberries
                                        </option>

                                        <option value="pies-cheesecakes">
                                            Pies &amp; Cheesecakes
                                        </option>

                                        <option value="other">
                                            Something Else
                                        </option>
                                    </select>
                                </label>

                                <label>
                                    Tell us about your order

                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Colors, flavors, theme, quantity, inspiration... tell us everything!"
                                        required
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="contact-submit"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending"
                                        ? "Sending Your Request..."
                                        : "Send My Sweet Request"}

                                    {status !== "sending" && (
                                        <Heart
                                            size={17}
                                            fill="currentColor"
                                        />
                                    )}
                                </button>

                                <p className="form-note">
                                    We'll get back to you as soon as
                                    possible. 💕
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div className="contact-bottom-decoration">
                <span>♥</span>
                <div />
                <span className="script">
                    Made with love
                </span>
                <div />
                <span>♥</span>
            </div>
        </section>
    );
}

export default Contact;