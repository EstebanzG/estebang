import React from 'react';
import {useTranslation} from 'react-i18next';

const FR = 'fr';

const EN = 'en';

const ABOUT_ME = 1;

const PROJECT = 2;

const CONTACT = 3;

interface props {
    currentPage: number;
}

function Navbar({currentPage}: props) {
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === FR ? EN : FR;
        localStorage.setItem('selected-language', newLanguage)
        i18n.changeLanguage(newLanguage).then();
    };

    return (
        <header className="w-11/12 pb-8 pt-8 h-fit md:flex md:justify-end">
            <div className={`w-full flex justify-end items-center`}>
                <div className={"w-full md:w-4/12 flex justify-between"}>
                    <div className={"w-full flex justify-between"}>
                        <a className={"font-montserrat"} href={"/"}>
                            <span
                                className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                                {t('Home')}
                            </span>
                        </a>
                        {currentPage !== PROJECT ?
                            <a className={"font-montserrat"} href={"/projects"}>
                            <span
                                className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                                {t('navbar_title_projects')}
                            </span>
                            </a> : ''
                        }
                        {currentPage !== ABOUT_ME ?
                            <a className={"font-montserrat"} href={"/about-me"}>
                                <span
                                    className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                                    {t('navbar_title_about_me')}
                                </span>
                            </a> : ''
                        }
                        {currentPage !== CONTACT ?
                            <a className={"font-montserrat"} href={"/contact"}>
                                <span
                                    className={"bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out"}>
                                    {t('footer_button_contact')}
                                </span>
                            </a> : ''
                        }
                        <button className={"font-montserrat"} onClick={changeLanguage}>
                            {t('navbar_language_select')}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;