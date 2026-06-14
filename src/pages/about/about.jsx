import "./about.css";
import abt from "./about.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import { useReveal } from "../../hooks/useReveal";

function About() {
    const { language } = useLanguage();
    return (
        <main className="aboutPage">
            boout
        </main>
    );
}

export default About;