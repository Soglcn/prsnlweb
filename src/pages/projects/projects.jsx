import "./projects.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import pbt from "./projects.json";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../utils/translate";
import Counter from "../../utils/Counter";
import { useReveal } from "../../hooks/useReveal";
import Footer from "../../assets/compFooter/footer.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import projects from "./list.json";

function Projects() {
    const { language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.type === activeFilter);

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

                <div className="projectFilters">
                    <button onClick={() => setActiveFilter("all")} className={`projectFilter ${activeFilter === "all" ? "active" : ""}`}>{t(pbt, language, "filterAll")}</button>
                    <button onClick={() => setActiveFilter("game")} className={`projectFilter ${activeFilter === "game" ? "active" : ""}`}>{t(pbt, language, "filterGames")}</button>
                    <button onClick={() => setActiveFilter("app")} className={`projectFilter ${activeFilter === "app" ? "active" : ""}`}>{t(pbt, language, "filterApps")}</button>
                    <button onClick={() => setActiveFilter("web")} className={`projectFilter ${activeFilter === "web" ? "active" : ""}`}>{t(pbt, language, "filterWeb")}</button>
                    <button onClick={() => setActiveFilter("simulation")} className={`projectFilter ${activeFilter === "simulation" ? "active" : ""}`}>{t(pbt, language, "filterSimulations")}</button>
                    <button onClick={() => setActiveFilter("tool")} className={`projectFilter ${activeFilter === "tool" ? "active" : ""}`}>{t(pbt, language, "filterTools")}</button>
                </div>

                <div className="projectGrid">
                    {filteredProjects.map((project) => (
                        <Link to={project.link} key={project.id} className="projectCard">
                            <img src={project.image} alt={project.title} className="projectImage" />
                            <div className="projectContent">
                                <h3>{project.title}</h3>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>


            <div className="footerMap"><Footer /></div>
        </main>
    );
}

export default Projects;