import React from "react";
import {useTranslation} from "react-i18next";

function Studies() {
    const { t } = useTranslation();


    return (
        <div className={"w-10/12 mt-3 md:w-3/12 md:mt-0"}>
            <h3 className={"font-montserrat mb-3"}>{t('homepage_title_education')}</h3>
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