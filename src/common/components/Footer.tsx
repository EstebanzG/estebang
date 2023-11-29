import React from 'react';
import { useTranslation } from 'react-i18next';

const FR = 'fr';

const EN = 'en';

function Footer() {
    const {t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === FR ? EN : FR;
        i18n.changeLanguage(newLanguage).then();
    };

    return (
        <footer className="w-11/12 pb-8 pt-8 md:flex md:justify-end ">
            <div className={"w-6/12 flex justify-between md:w-2/12"}>
                <button className={"font-montserrat text-black"}>{t('footer_button_contact')}</button>
                <button className={"font-montserrat text-black"} onClick={changeLanguage}>EN</button>
            </div>
        </footer>
    );
}

export default Footer;