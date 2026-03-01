import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* Logo/Brand */}
                <div className="navbar-brand">
                    <Link href="/">
                        MailStora
                    </Link>
                </div>

                {/* Center Links (Hidden on small mobile) */}
                <div className="navbar-links">
                    <Link href="#templates" className="nav-link">Templates</Link>
                    <Link href="#signatures" className="nav-link">Signatures</Link>
                    <Link href="#process" className="nav-link">Process</Link>
                    <Link href="#portfolio" className="nav-link">Portfolio</Link>
                </div>

                {/* Right Actions */}
                <div className="navbar-actions">
                    <Link href="#login" className="nav-link nav-login">Login</Link>
                    <Link href="#quote" className="btn btn-secondary nav-btn">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}
