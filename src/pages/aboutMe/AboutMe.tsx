import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../common/components/Navbar";

const ABOUT_ME = 1;

function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className={"h-full w-full flex flex-col items-center"}>
            <Navbar currentPage={ABOUT_ME}/>
            <h1 className={'w-11/12 font-montserrat font-bold mb-5 md:mb-10 md:text-2xl'}>{t('navbar_title_about_me')}</h1>
        </div>
    );
}

export default AboutMe;