export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-sm bg-transparent navbar-dark">
            <div className="container-fluid">
                <div className="ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Startseite</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Über</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/product">Produkt</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/faq">FaQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
