import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../common/components/Navbar";
import SectionWho from "./components/SectionWho";
import Timeline from "./components/Timeline";
import {item} from "../../common/database.type";

const ABOUT_ME = 1;

function AboutMe() {
    const { t } = useTranslation();

    const studies: item[] = [
        {
            name: t('about_me_studies_bac_title'),
            where: t('about_me_studies_bac_where'),
            firstYear: 2017,
            lastYear: 2020,
        },
        {
            name: t('about_me_studies_iut_title'),
            where: t('about_me_studies_iut_where'),
            firstYear: 2020,
            lastYear: 2022,
        },
        {
            name: t('about_me_studies_imt_title'),
            where: t('about_me_studies_imt_where'),
            firstYear: 2022,
            lastYear: 2025,
        },
    ];

    const jobs: item[] = [
        {
            name: '',
            where: '',
            firstYear: undefined,
            lastYear: undefined,
        },
        {
            name: t('about_me_job_pladis_title'),
            where: 'Pladis',
            firstYear: 2021,
            lastYear: 2022,
        },
        {
            name: t('about_me_job_kosmos_title'),
            where: 'Kosmos-Education',
            firstYear: 2022,
            lastYear: 2025,
        },
    ];

    return (
        <div className={"h-full w-full flex flex-col items-center"}>
            <Navbar currentPage={ABOUT_ME}/>
            <h1 className={'w-11/12 font-montserrat font-bold mb-5 md:mb-10 md:text-2xl'}>{t('navbar_title_about_me')}</h1>
            <div className={"w-11/12 flex flex-col justify-between"}>
                <div className={"flex flex-col w-full justify-start mb-5"}>
                    <div className={"text-justify md:flex md:justify-between"}>
                        <p>
                            {t('about_me_who_text')}
                        </p>
                    </div>
                    <hr className={"bg-gray-500 w-full mt-8 mb-4"}/>
                    <div className={"w-full font-montserrat"}>
                        <h3 className={"mb-2 font-semibold"}>{t('about_me_studies_title')}</h3>
                        <Timeline items={studies}/>
                    </div>
                    <hr className={"bg-gray-500 w-full mt-8 mb-4"}/>
                    <div className={"w-full font-montserrat"}>
                        <h3 className={"mb-2 font-semibold"}>{t('about_me_job_title')}</h3>
                        <Timeline items={jobs}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;