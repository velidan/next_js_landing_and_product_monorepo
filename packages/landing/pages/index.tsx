import { Button } from '@10x/foundation/src/components';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from '../components/LocaleSwitcher';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { supportedLocalesData } from '../config/locales.config';

// TODO: Lang enum in case of bigger lang amount
// const changeLanguage = (i18n: any, locale: Locales) => {
//   window.localStorage.setItem('user_locale', locale);
//   i18n.changeLanguage(locale);
// };

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div>
      <nav>
        <Link href="/">{t('home.label')}</Link>
        <Link href="/about">{t('about.label')}</Link>
        <Link href="/contact">{t('contact.label')}</Link>
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
              // onClick={() => changeLanguage(i18n, lng as Locales)}
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
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  return (
    <PrimaryLayout>
      <div>
        <Button />
        <section className="flex flex-1 bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 ">
          <div>
            <h1>Landing</h1>
          </div>
        </section>
        <SidebarLayout />
        <div>
          <h1>Index page</h1>
          <p>Current locale: {locale}</p>
          <p>Default locale: {defaultLocale}</p>
          <p>Configured locales: {JSON.stringify(locales)}</p>

          <LocaleSwitcher />

          <Link href="/gsp">To getStaticProps page</Link>
          <br />

          <Link href="/gsp/first">To dynamic getStaticProps page</Link>
          <br />

          <Link href="/gssp">To getServerSideProps page</Link>
          <br />
        </div>
      </div>
    </PrimaryLayout>
  );
}
