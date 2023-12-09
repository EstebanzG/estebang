import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../common/components/Navbar";

function Contact() {
    const { t } = useTranslation();

    return (
        <div className={"h-full w-full flex flex-col items-center"}>
            <Navbar pageName={t('navbar_title_contact')}/>
            <div className={"w-11/12 flex flex-col justify-center items-center mb-10"}>
                <div className={"w-full"}>
                    <ul>
                        <li>gomez.esteban@outlook.fr</li>
                        <li>+33 6 18 00 42 53</li>
                        <li>Nantes, France</li>
                    </ul>
                </div>
                <hr className={"bg-gray-500 w-6/12 mt-8 mb-4"}/>
                <div className={"w-full"}>
                </div>
            </div>
        </div>
    );
}

export default Contact;