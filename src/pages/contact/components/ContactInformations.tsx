import React from 'react';
import {useTranslation} from 'react-i18next';
import OpenMap from "./OpenMap";

function Contact() {
    const {t} = useTranslation();

    return (
        <div className={"w-full md:w-5/12"}>
            <h1 className={'w-11/12 font-montserrat font-semibold mb-5 md:mb-10 md:text-2xl'}>
                {t('contact_information_title')}
            </h1>
            <ul className={"mb-5"}>
                <li>{t('contact_information_linkedin_title')} <a
                    href={'https://www.linkedin.com/in/gomez-esteban'}>www.linkedin.com/in/gomez-esteban</a>
                </li>
                <li>{t('contact_information_email_title')} <a
                    href={'mailto:gomez.esteban@outlook.fr'}>gomez.esteban@outlook.fr</a></li>
                <li>{t('contact_information_phone_title')} <a href={'tel:+33618004253'}>+33 6 18 00 42 53</a></li>
                <li>{t('contact_information_address_title')} Nantes, France</li>
            </ul>
            <OpenMap/>
        </div>
    );
}

export default Contact;