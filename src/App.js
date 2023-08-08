import './App.css'; 
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({ 
    supportedLngs:['en', 'pt'],
    fallbackLng: "en",
    detection:{
        order: ['cookie', 'htmlTag', 'localStorage','path', 'subdomain'],
        caches: ['cookies']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{ useSuspense: false}
  });

function App() {

  const { t } = useTranslation();

  const releaseDate = new Date ('2023-08-08')
  const timeDiff = new Date - releaseDate
  const nr_days = Math.floor(timeDiff / (1000 * 60 * 60 * 24 ))

  return ( 
    <div className="container">
      <div className='d-flex flex-column align-items-start'>
          <h1 className='font-weight-normal mb-3'>
            {t('welcome')}
          </h1>
          <p>{t('text03', {nr_days})}</p>
      </div>
    </div>
  );
}

export default App;
