import { useState } from 'react'
import { Link } from "react-router-dom";
import "./footer.css";

import footText from "./footer.json";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { t } from "../../utils/translate.js";

import {
    faLinkedin,
    faGithub,
    faArtstation,
    faYoutube,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    const { language } = useLanguage();
    return (
        <footer>
            <div className="footerArea">
                <div className="socials">
                    <h3 className="letsCont">
                        {t(footText, language, "letsCont")}
                    </h3>

                    <div className="socLinks">
                        <a href="https://www.linkedin.com/in/socy" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a href="https://github.com/Soglcn" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a href="https://www.artstation.com/aetosdios" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faArtstation} />
                        </a>

                        <a href="https://www.youtube.com/@scyozgat" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>

                        <a href="https://www.instagram.com/oglcn.snn/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <div className="catch">catch</div>
                <div className="contact">contact</div>
            </div>
        </footer>
    );
}

export default Footer;