import "./projects.css";
import pbt from "./projects.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import Counter from "../../utils/Counter";
import { useReveal } from "../../hooks/useReveal";
import Footer from "../../assets/compFooter/footer.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";


function Projects() {
    const { language } = useLanguage();

    useReveal();
    return (
        <main className="projectsPage">

            <div className="projectsBody">
                <div className="prHead">
                    <h2 className="prTopTitle">{t(pbt, language, "title")}</h2>

                    <div className="prContext">
                        <img src="/images/column.png" alt="" />
                        <p className="prCatch">{t(pbt, language, "projectsCatch")}</p>
                    </div>
                </div>

                <div className="prAb">
                    <div className="selectedProjects">
                        <div className="selTitle">
                            <div className="compassLine">
                                <span></span>
                                <img src="/images/compass.png" alt="Compass" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prNotice">
                    <span></span>
                    <div className="pnIcon"><FontAwesomeIcon icon={faBuildingColumns} /></div>
                    <div className="pnText">
                        <div className="pnHeader">{t(pbt, language, "pnNot")}</div>
                        <div className="pnExpText">{t(pbt, language, "pnExp")}</div>
                    </div>
                </div>

                <div className="projectGrid">

                </div>
            </div>


            <div className="footerMap"><Footer /></div>
        </main>
    );
}

export default Projects;