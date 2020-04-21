import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    const onChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <div>
                    <button onClick={() => onChangeLanguage('en')}>
                        English
                    </button>
                    <button onClick={() => onChangeLanguage('cn')}>中文</button>
                </div>
                <p>{t('Welcome to React')}</p>
            </header>
        </div>
    );
}

export default App;
