import './Contact.css';

export default function Contact() {
    return (
        <section className="contact-section section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info text-center">
                        <h2 className="section-title">Contact Us</h2>
                        <p className="section-subtitle">
                            Ready to start your project or have questions? We're here to help.
                        </p>
                        <div className="contact-details">
                            <a href="mailto:hello@mailstora.com" className="contact-email">
                                hello@mailstora.com
                            </a>
                            <p className="contact-response">We typically respond within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
