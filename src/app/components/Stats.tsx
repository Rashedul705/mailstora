import './Stats.css';

export default function Stats() {
    const stats = [
        { value: "3+", label: "Years Experience" },
        { value: "400+", label: "Templates Developed" },
        { value: "100%", label: "Cross-client Compatibility" },
        { value: "24h", label: "Fast Turnaround" },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-item">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
