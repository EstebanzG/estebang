import React from "react";
import {useTranslation} from "react-i18next";

function Projects() {
    const { t } = useTranslation();

    return (
    <div className={"w-10/12 md:w-3/12"}>
        <h3 className={"font-montserrat mb-3"}>{t('homepage_title_projects')}</h3>
        <div>
            <div className={"flex justify-between mb-2"}>
                <h4 className={"font-montserrat text-gray-500"}>LetsGetRich</h4>
                <h4 className={"font-montserrat text-gray-500"}>PlusDeThunes</h4>
            </div>
            <div className={"flex justify-between mb-2"}>
                <h4 className={"font-montserrat text-gray-500"}>TaskManager</h4>
                <h4 className={"font-montserrat text-gray-500"}>LetsGetTipsy</h4>
            </div>
            <div className={"flex justify-between"}>
                <h4 className={"font-montserrat text-gray-500"}>Count</h4>
                <h4 className={"font-montserrat text-gray-500"}>...</h4>
            </div>
        </div>
    </div>
    );
}

export default Projects