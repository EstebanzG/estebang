import React from "react";
import {useTranslation} from "react-i18next";

function AboutMe() {

    const { t } = useTranslation();

    return (
        <div className={"w-10/12 mt-3 md:w-3/12 md:mt-0"}>
            <a href={'/about-me'} className={"font-montserrat font-semibold mb-3 w-fit group flex items-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
                <span
                    className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                    {t('homepage_title_about_me')}
                </span>
            </a>
            <div>
                <div className={"flex justify-between mb-2"}>
                    <h4 className={"font-montserrat text-gray-500"}>{t('homepage_about_me_age')}</h4>
                </div>
                <div className={"flex justify-between mb-2"}>
                    <h4 className={"font-montserrat text-gray-500"}>{t('homepage_about_me_from')}</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4 className={"font-montserrat text-gray-500"}>{t('homepage_about_me_activity')}</h4>
                </div>
            </div>
        </div>
    );
}

export default AboutMe