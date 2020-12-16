import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LangChange = () => {
    const [t, i18n] = useTranslation('common');
    return (
        <div className="p-2">
            <h1 className="font-bold text-blue-700 text-2xl">
                {t('messages.hello')}
            </h1>
            <h4 className="text-red-400">
                {t('welcomeText', { framework: 'React' })}
            </h4>
            <button
                className="bg-purple-500 mr-2 mt-2 text-white p-2"
                onClick={() => i18n.changeLanguage('en')}
            >
                Change Lang to EN
            </button>
            <button
                className="bg-purple-500 mr-2 mt-2 text-white p-2"
                onClick={() => i18n.changeLanguage('fr')}
            >
                Change Lang to FR
            </button>
            <Link to={{ pathname: '/form' }}>
                {' '}
                <span className="text-yellow-600 font-bold hover:text-blue-800">
                    GO to Form
                </span>
            </Link>
        </div>
    );
};

export default LangChange;
