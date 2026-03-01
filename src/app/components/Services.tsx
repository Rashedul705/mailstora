import './Services.css';

export default function Services() {
    return (
        <section className="services-section section">
            <div className="container">
                <div className="services-header text-center">
                    <h2 className="section-title">What I Offer</h2>
                    <p className="section-subtitle">Premium email development services tailored for modern businesses.</p>
                </div>

                <div className="services-grid">
                    {/* Card 1 */}
                    <div className="service-card">
                        <div className="service-icon primary-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                        </div>
                        <h3 className="service-title">Responsive HTML Email Templates</h3>
                        <ul className="service-features">
                            <li>
                                <span className="check-icon">✓</span> Hand-coded HTML
                            </li>
                            <li>
                                <span className="check-icon">✓</span> Pixel-perfect conversion
                            </li>
                            <li>
                                <span className="check-icon">✓</span> Tested in major email clients
                            </li>
                            <li>
                                <span className="check-icon">✓</span> Platform-ready for Klaviyo, HubSpot, Mailchimp
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="service-card">
                        <div className="service-icon secondary-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"></path>
                                <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"></path>
                            </svg>
                        </div>
                        <h3 className="service-title">Professional HTML Email Signatures</h3>
                        <ul className="service-features">
                            <li>
                                <span className="check-icon">✓</span> Fully clickable
                            </li>
                            <li>
                                <span className="check-icon">✓</span> Outlook & Gmail compatible
                            </li>
                            <li>
                                <span className="check-icon">✓</span> Company-wide deployment ready
                            </li>
                            <li>
                                <span className="check-icon">✓</span> Image hosting optimized
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
