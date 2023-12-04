import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../common/components/Navbar";
import estebanImage from "../home/asset/img/esteban.png";

function Projects() {
    const { t } = useTranslation();

    return (
        <div className={"h-full min-h-screen w-full bg-black flex flex-col items-center text-white"}>
            <Navbar pageName={t('navbar_title_projects')}/>
            <div className={"w-11/12 flex flex-col justify-center"}>
                <div className={"flex justify-between mb-10"}>
                    <div className={"w-5/12"}>
                        <h3>Project Name</h3>
                        <p>project description</p>
                    </div>
                    <img src={estebanImage} className={"w-5/12"} alt={'Esteban in Time Square at New-York'}/>
                </div>
                <div className={"flex justify-between"}>
                    <img src={estebanImage} className={"w-5/12"} alt={'Esteban in Time Square at New-York'}/>
                    <div className={"w-5/12"}>
                        <h3>Project Name</h3>
                        <p>project description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;