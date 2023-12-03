import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from "../../common/components/Footer";

function Projects() {
    const { t } = useTranslation();

    return (
        <div className={"h-full min-h-screen w-full bg-black"}>
            <Footer isBlackPage={true} isHome={false}/>
        </div>
    );
}

export default Projects;