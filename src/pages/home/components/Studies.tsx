import React from "react";
import {useTranslation} from "react-i18next";

function Studies() {
    const { t } = useTranslation();


    return (
        <div className={"w-10/12 mt-3 md:w-3/12 md:mt-0"}>
            <h3 className={"font-montserrat mb-3 w-fit group flex items-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <span className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                    {t('homepage_title_education')}
                </span>
            </h3>
            <div>
                <div className={"flex justify-between mb-2"}>
                    <h4 className={"font-montserrat text-gray-500"}>IMT Atlantique</h4>
                    <h4 className={"font-montserrat text-gray-500"}>2022 - 2025</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4 className={"font-montserrat text-gray-500"}>IUT Informatique</h4>
                    <h4 className={"font-montserrat text-gray-500"}>2020 - 2022</h4>
                </div>
            </div>
        </div>
)
}

export default Studies