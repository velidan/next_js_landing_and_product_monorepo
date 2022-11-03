import { Button } from '@10x/foundation/src/components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

// TODO: Lang enum in case of bigger lang amount
// const changeLanguage = (i18n: any, locale: Locales) => {
//   window.localStorage.setItem('user_locale', locale);
//   i18n.changeLanguage(locale);
// };

export default function Home() {
  const { t } = useTranslation();
  return (
    <PrimaryLayout>
      <div>
        <Button />
        <section className="flex flex-1 bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 ">
          <div>
            <h1>{t('home.label')}</h1>
            <h2>{t('home.welcome')}</h2>
          </div>
        </section>

        {/* <div>
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
        </div> */}
      </div>
    </PrimaryLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}
