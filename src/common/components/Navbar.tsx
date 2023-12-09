import React from 'react';
import { useTranslation } from 'react-i18next';

const FR = 'fr';

const EN = 'en';

interface props {
    pageName: string;
}

function Footer({pageName}: props) {
    const {t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === FR ? EN : FR;
        i18n.changeLanguage(newLanguage).then();
    };

    return (
        <header className="w-11/12 pb-8 pt-8 h-fit md:flex md:justify-end">
            <div className={`w-full flex justify-between items-center`}>
                <h1 className={'font-montserrat font-bold md:text-2xl'}>{pageName.toUpperCase()}</h1>
                <div className={"w-8/12 md:w-4/12 flex justify-between"}>
                    <a className={"font-montserrat"} href={"/"} >
                        <span className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                            {t('Home')}
                        </span>
                    </a>
                    <a className={"font-montserrat"} href={"/contact"}>
                        <span className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                            {t('footer_button_contact')}
                        </span>
                    </a>
                    <button className={"font-montserrat"} onClick={changeLanguage}>{t('navbar_language_select')}</button>
                </div>
            </div>
        </header>
    );
}

export default Footer;