import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import emailJS from "@emailjs/browser"

function FormMessage() {
    const {t} = useTranslation();

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [sendingSucess, setSendingSucess] = useState<boolean>(false);
    const [sendingFailed, setSendingFailed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        if (validateForm()) {
            event.preventDefault();
            setIsLoading(true)
            setSendingFailed(false)
            setSendingSucess(false)
            emailJS.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '',
                process.env.REACT_APP_EMAILJS_MESSAGE_TEMPLATE ?? '',
                event.currentTarget,
                process.env.REACT_APP_EMAILJS_T0KEN
            )
                .then(r => setSendingSucess(true))
                .catch(() => setSendingFailed(true))
                .finally(() => setIsLoading(false))
            ;
        }
    }

    function validateForm(): boolean {
        return true;
    }

    return (
                <form className={"w-full md:w-5/12"} onSubmit={sendEmail}>
                    <h1 className={'w-11/12 font-montserrat font-semibold mb-5 md:mb-10 md:text-2xl'}>
                        {t('contact_form_title')}
                    </h1>
                    {sendingSucess ? <h4 className={'mb-4 text-green-800'}>{t('contact_form_message_success')}</h4> : ''}
                    {sendingFailed ? <h4 className={'mb-4 text-red-800'}>{t('contact_form_message_failed')}</h4> : ''}
                    <div className={'flex justify-between mb-5'}>
                        <div className={'w-5/12 flex flex-col'}>
                            <label htmlFor={"firstname"}>{t('contact_form_firstname_label')}</label>
                            <input
                                required={true}
                                name={"firstname"}
                                type={"text"}
                                className={"border border-b-2 p-2 rounded"}
                                id={"firstname"}
                                placeholder={"Pierre"}
                                value={firstname}
                                onChange={e => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className={'w-5/12 flex flex-col'}>
                            <label htmlFor={"lastname"}>{t('contact_form_lastname_label')}</label>
                            <input
                                required={true}
                                name={"lastname"}
                                type={"text"}
                                className={"border border-b-2 p-2 rounded"}
                                id={"lastname"}
                                placeholder={"MARTIN"}
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={'flex flex-col mb-5'}>
                        <label htmlFor={"email"}>{t('contact_form_email_label')}</label>
                        <input
                            required={true}
                            name={"email"}
                            type={"email"}
                            className={"border border-b-2 p-2 rounded"}
                            id={"email"}
                            placeholder={"email@gmail.com"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={'flex flex-col mb-5'}>
                        <label htmlFor={"email"}>{t('contact_form_message_label')}</label>
                        <textarea
                            required={true}
                            name={"content"}
                            className={"border border-b-2 p-2 rounded"}
                            id={"content"}
                            placeholder={t('contact_form_message_placeholder')}
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                    </div>
                    <div className={"w-full flex justify-end"}>
                        <button type={"submit"}
                                className={"bg-gray-400 text-white p-2 rounded w-5/12 flex justify-center"}>
                            {isLoading ?
                                <>
                                    <svg aria-hidden="true"
                                         className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span></>
                                : t('contact_form_submit_label')}
                        </button>
                    </div>
                </form>
    );
}

export default FormMessage;