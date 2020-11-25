import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LangChange = () => {
    const [t, i18n] = useTranslation('common');
    return (
        <>
            <h1>{t('messages.hello')}</h1>
            <h4>{t('welcomeText', { framework: 'React' })}</h4>
            <button onClick={() => i18n.changeLanguage('en')}>
                Change Lang to EN
            </button>
            <button onClick={() => i18n.changeLanguage('fr')}>
                Change Lang to FR
            </button>
            <Link to={{ pathname: '/form' }}> GO to Form </Link>
        </>
    );
};

export default LangChange;
