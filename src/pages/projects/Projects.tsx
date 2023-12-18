import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../common/components/Navbar";
import Project from "./components/Project";

const PROJECT = 2;

function Projects() {
    const { t } = useTranslation();

    return (
        <div className={"h-full min-h-screen w-full flex flex-col items-center"}>
            <Navbar currentPage={PROJECT}/>
            <h1 className={'w-11/12 font-montserrat font-bold mb-5 md:mb-10 md:text-2xl'}>{t('navbar_title_projects')}</h1>
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
                <hr className={"bg-gray-500 w-6/12 mt-8 mb-4"}/>
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
                <hr className={"bg-gray-500 w-6/12 mt-8 mb-4"}/>
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