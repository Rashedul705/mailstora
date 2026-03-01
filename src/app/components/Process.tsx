import './Process.css';

export default function Process() {
    const steps = [
        { num: "01", title: "Share Your Design", desc: "Send over your Figma, PSD, or Sketch files along with your requirements." },
        { num: "02", title: "I Code & Test", desc: "I hand-code the HTML and thoroughly test it across all major email clients." },
        { num: "03", title: "You Review", desc: "You review the test emails and provide any necessary feedback for revisions." },
        { num: "04", title: "Final Delivery", desc: "You receive the final, polished HTML files ready for immediate deployment." },
    ];

    return (
        <section className="process-section section">
            <div className="container">
                <div className="process-header text-center">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">A simple, transparent 4-step process to get your emails ready.</p>
                </div>

                <div className="process-steps">
                    {steps.map((step, idx) => (
                        <div key={idx} className="process-step">
                            <div className="step-number">{step.num}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                            {idx < steps.length - 1 && (
                                <div className="step-connector"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
