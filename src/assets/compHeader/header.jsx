import { Link } from "react-router-dom";
import "./header.css";
import headerText from "./header.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/images/sy_dark_logo.png";


function Header() {
    const { language, changeLanguage } = useLanguage();
    console.log(Object.keys(headerText));
    return (
        <header className="header">
            <div className="headerLeftCont">
                <div className="headerLogo">
                    <Link to="/">
                        <img src={logo} alt="SY Logo" />
                    </Link>
                </div>
            </div>

            <nav className="headerNav">
                <a>{t(headerText, language, "home")}</a>
                <a>{t(headerText, language, "projects")}</a>
                <a>{t(headerText, language, "about")}</a>
                <a>{t(headerText, language, "contact")}</a>
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
                <div className="burgerCont">
                    <button className="btnBurger">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Header;