import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../common/components/Navbar";
import Project from "./components/Project";

function Projects() {
    const { t } = useTranslation();

    return (
        <div className={"h-full min-h-screen w-full bg-black flex flex-col items-center text-white"}>
            <Navbar pageName={t('navbar_title_projects')}/>
            <div className={"w-11/12 flex flex-col justify-center items-center mb-10"}>
                <Project
                    projectName={t('project_taskmanager_title')}
                    technologies={[
                        "React",
                        "Typescript",
                        "TailwindCSS",
                        "Supabase",
                        "Vercel",
                        "Figma",
                    ]}
                    description={t('project_taskmanager_description')}
                    imageName={"taskManager.png"}
                    gitUrl={"https://github.com/EstebanzG/ServicesManager"}
                />
                <hr className={"bg-white w-6/12 mt-8 mb-4"}/>
                <Project
                    projectName={t('project_letsgetrich_title')}
                    technologies={[
                        "PHP",
                        "Symfony",
                        "Twig",
                        "MySQL",
                        "Figma",
                    ]}
                    description={t('project_taskmanager_description')}
                    imageName={"letsGetRich.png"}
                    gitUrl={"https://github.com/EstebanzG/LetsGetRich"}
                />
                <hr className={"bg-white w-6/12 mt-8 mb-4"}/>
                <Project
                    projectName={t('project_taskmanager_title')}
                    technologies={[
                        "React",
                        "Typescript",
                        "TailwindCSS",
                        "Supabase",
                        "Vercel",
                        "Figma",
                    ]}
                    description={t('project_taskmanager_description')}
                    imageName={"taskManager.png"}
                    gitUrl={"https://github.com/EstebanzG/ServicesManager"}
                />
            </div>
        </div>
    );
}

export default Projects;