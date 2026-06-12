import "./header.css";
import headerText from "./header.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";

function Header() {
    const { language, changeLanguage } = useLanguage();
console.log(Object.keys(headerText));
    return (
        <header className="header">
            <div className="header__logo">SY</div>

            <nav className="header__nav">
                <a>{t(headerText, language, "home")}</a>
                <a>{t(headerText, language, "projects")}</a>
                <a>{t(headerText, language, "about")}</a>
                <a>{t(headerText, language, "contact")}</a>
            </nav>

            <select
                className="header__language"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                {Object.keys(headerText).map((lang) => (
                    <option key={lang} value={lang}>
                        {lang.toUpperCase()}
                    </option>
                ))}
            </select>
        </header>
    );
}

export default Header;