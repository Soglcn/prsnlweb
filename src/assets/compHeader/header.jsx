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
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";




function Header() {
    const { language, changeLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const selectRef = useRef(null);

    const openDropdown = () => {
        selectRef.current?.focus();

        if (selectRef.current?.showPicker) {
            selectRef.current.showPicker();
        } else {
            selectRef.current?.click();
        }
    };

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

                <Link to="/" onClick={() => setMenuOpen(false)}>
                    {t(headerText, language, "home")}
                </Link>

                <Link to="/projects" onClick={() => setMenuOpen(false)}>
                    {t(headerText, language, "projects")}
                </Link>

                <Link to="/about" onClick={() => setMenuOpen(false)}>
                    {t(headerText, language, "about")}
                </Link>

                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    {t(headerText, language, "contact")}
                </Link>

                <a
                    href="/Sinan-Ogulcan-Yozgat-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                >
                    {t(headerText, language, "resume")}
                </a>


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
                <div className="tBar">

                    <Link className="nBtn" to="/" onClick={() => setMenuOpen(false)}>
                        {t(headerText, language, "home")}
                    </Link>

                    <Link className="nBtn" to="/projects" onClick={() => setMenuOpen(false)}>
                        {t(headerText, language, "projects")}
                    </Link>

                    <Link className="nBtn" to="/about" onClick={() => setMenuOpen(false)}>
                        {t(headerText, language, "about")}
                    </Link>

                    <Link className="nBtn" to="/contact" onClick={() => setMenuOpen(false)}>
                        {t(headerText, language, "contact")}
                    </Link>

                    <a
                        className="nBtn"
                        href="/Sinan-Ogulcan-Yozgat-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                    >
                        {t(headerText, language, "resume")}
                    </a>

                </div>
                <div className="langCont" onClick={openDropdown}>
                    <FontAwesomeIcon icon={faGlobe} />

                    <select
                        ref={selectRef}
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

                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="langArrow"
                    />
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