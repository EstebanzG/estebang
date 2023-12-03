import React from 'react';
import { useTranslation } from 'react-i18next';

const FR = 'fr';

const EN = 'en';

interface props {
    isBlackPage: boolean;
    isHome: boolean;
}

function Footer({isBlackPage, isHome}: props) {
    const {t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === FR ? EN : FR;
        i18n.changeLanguage(newLanguage).then();
    };

    return (
        <footer className="w-11/12 pb-8 pt-8 md:flex md:justify-end ">
            <div className={`w-6/12 flex justify-between md:w-2/12 ${isBlackPage ? 'text-white' : 'text-black'}`}>
                {!isHome ?
                    <a className={"font-montserrat"} href={"/"} >{t('Home')}</a>
                    :
                    ''
                }
                <button className={"font-montserrat"}  >{t('footer_button_contact')}</button>
                <button className={"font-montserrat"} onClick={changeLanguage}>EN</button>
            </div>
        </footer>
    );
}

export default Footer;