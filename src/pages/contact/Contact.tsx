import React from 'react';
import {useTranslation} from 'react-i18next';
import Navbar from "../../common/components/Navbar";
import FormMessage from "./components/FormMessage";
import ContactInformations from "./components/ContactInformations";

const CONTACT = 3;

function Contact() {
    const {t} = useTranslation();

    return (
        <div className={"h-full w-full flex flex-col items-center"}>
            <Navbar currentPage={CONTACT} />
            <h1 className={'w-11/12 font-montserrat font-bold mb-5 md:mb-10 md:text-2xl'}>{t('navbar_title_contact')}</h1>
            <div className={"w-11/12 flex flex-col justify-center items-center mb-10 font-montserrat md:flex-row md:justify-between md:items-start"}>
                <FormMessage />
                <hr className={"bg-gray-500 w-6/12 mt-8 mb-8 md:w-0"}/>
                <ContactInformations />
            </div>
        </div>
    );
}

export default Contact;