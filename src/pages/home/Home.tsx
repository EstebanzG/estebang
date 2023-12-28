import React from 'react';
import estebanImage from './asset/img/esteban.png';
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { useTranslation } from 'react-i18next';
import Footer from "../../common/components/Footer";

function Home() {
    const { t } = useTranslation();

    return (
        <div className={"h-screen flex flex-col items-end justify-between md:items-center"}>
            <header className={"w-11/12 mt-8 mb-1"}>
                <img src={estebanImage} className={'object-cover w-full h-96 md:h-auto'} alt={'Esteban in Time Square at New-York'}/>
            </header>
            <div className={"h-full w-11/12"}>
                <div className={"h-full flex flex-col justify-around md:flex-row md:justify-between md:items-center"}>
                    <div className={"flex flex-col mb-5"}>
                        <h1 className={"font-montserrat text-2xl text-black font-bold"}>Esteban GOMEZ</h1>
                        <h2 className={"font-montserrat text-2xl text-gray-500 font-semibold"}>{t('homepage_title_job_name')}</h2>
                    </div>
                    <Projects/>
                    <AboutMe/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;