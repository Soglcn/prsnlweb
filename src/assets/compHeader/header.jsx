import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import headerText from "./header.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/images/sy_dark_logo.png";



function Header() {
    const { language, changeLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="headerLeftCont">
                <div className="headerLogo">
                    <Link to="/" className="linktoMain">
                        <img src={logo} alt="SY Logo" />
                    </Link>
                </div>
            </div>

            <nav className={`headerNav ${menuOpen ? "active" : ""}`}>
                <img src={logo} className="menuLogo" alt="SY Logo" />

                <Link to="/">{t(headerText, language, "home")}</Link>
                <Link to="/projects">{t(headerText, language, "projects")}</Link>
                <Link to="/about">{t(headerText, language, "about")}</Link>
                <Link to="/contact">{t(headerText, language, "contact")}</Link>
                <Link to="/contact">{t(headerText, language, "resume")}</Link>
                <button
                    className="btnCloseMenu"
                    onClick={() => setMenuOpen(false)}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                    {" "}
                    {t(headerText, language, "close")}
                </button>
            </nav>


            <div className="headerRightCont">
                <div className="langCont">
                    <FontAwesomeIcon icon={faGlobe} />
                    <select
                        className="headerLang"
                        value={language}
                        onChange={(e) => changeLanguage(e.target.value)}
                    >
                        {Object.keys(headerText).map((lang) => (
                            <option key={lang} value={lang}>
                                {lang.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    className="btnBurger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

        </header>
    );
}

export default Header;