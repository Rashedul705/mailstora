import Image from "next/image";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Custom HTML Email Templates & Signatures That Work Everywhere
                    </h1>
                    <p className="hero-subtitle">
                        Responsive, tested, and compatible with Outlook, Gmail, and major email platforms.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Get a Free Quote</button>
                        <button className="btn btn-secondary">View Portfolio</button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-inner">
                        <Image
                            src="/mockup.png"
                            alt="Professional Email Template Mockup"
                            width={600}
                            height={500}
                            className="hero-image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
