import React from 'react';
import estebanImage from './asset/esteban.png';
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Studies from "./components/Studies";
import { useTranslation } from 'react-i18next';
import Footer from "../../common/components/Footer";

function Home() {
    const { t } = useTranslation();

    return (
        <div className={"h-screen flex flex-col items-end justify-between md:items-center"}>
            <header className={"w-11/12 mt-8 mb-6"}>
                <img src={estebanImage} className={'object-cover w-full h-96 mb-4 md:h-auto'} alt={'Esteban in Time Square at New-York'}/>
                <div className={"flex flex-col md:flex-row md:justify-between"}>
                    <h1 className={"font-montserrat text-2xl text-black"}>Esteban GOMEZ</h1>
                    <h2 className={"font-montserrat text-2xl text-gray-500"}>{t('homepage_title_job_name')}</h2>
                </div>
            </header>
            <div className={"flex flex-col w-11/12 md:flex-row md:justify-between"}>
                <Projects/>
                <Stack/>
                <Studies/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;