import React from 'react';
import { useTranslation } from 'react-i18next';

const FR = 'fr';

const EN = 'en';

function Footer() {
    const {t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === FR ? EN : FR;
        localStorage.setItem('selected-language', newLanguage)
        i18n.changeLanguage(newLanguage).then();
    };

    return (
        <footer className="w-11/12 pb-8 pt-8 h-fit md:flex md:justify-end">
            <div className={`'text-black w-6/12 md:w-2/12 flex justify-between`}>
                <a className={"font-montserrat"} href={"/contact"} >{t('footer_button_contact')}</a>
                <button className={"font-montserrat"} onClick={changeLanguage}>{t('footer_language_select')}</button>
            </div>
        </footer>
    );
}

export default Footer;