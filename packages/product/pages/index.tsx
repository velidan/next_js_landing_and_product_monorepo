import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Locales, supportedLocalesData } from '../config/locales.config';

// TODO: Lang enum in case of bigger lang amount
const changeLanguage = (i18n: any, locale: Locales) => {
  window.localStorage.setItem('user_locale', locale);
  i18n.changeLanguage(locale);
};

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div>
      <nav style={{ display: 'flex', margin: '20px 0' }}>
        <Link
          style={{ border: '1px solid yellow', marginRight: 20, padding: 5 }}
          href="/"
        >
          {t('home.label')}
        </Link>
        <Link
          style={{ border: '1px solid yellow', marginRight: 20, padding: 5 }}
          href="/about"
        >
          {t('about.label')}
        </Link>
        <Link
          style={{ border: '1px solid yellow', marginRight: 20, padding: 5 }}
          href="/contact"
        >
          {t('contact.label')}
        </Link>
      </nav>

      <div>
        <span className="isolate inline-flex rounded-md shadow-sm">
          {Object.keys(supportedLocalesData).map((lng) => (
            <button
              key={lng}
              className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => changeLanguage(i18n, lng as Locales)}
            >
              {(supportedLocalesData as any)[lng].nativeName}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <section className="mb-10 flex flex-1 flex-col bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 ">
        <div>
          <h1>Product</h1>
        </div>
        <SidebarLayout />
      </section>
      <div className="flex flex-1 justify-center">
        {/* Button must be here */}
      </div>
    </div>
  );
}
