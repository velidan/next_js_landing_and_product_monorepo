import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { Button } from '@10x/foundation/src/components/buttons/Button';
import { ThemeSwitcher } from '../components/switch/ThemeSwitcher';

// TODO: Lang enum in case of bigger lang amount
// const changeLanguage = (i18n: any, locale: Locales) => {
//   window.localStorage.setItem('user_locale', locale);
//   i18n.changeLanguage(locale);
// };

export default function Home() {
  const { t } = useTranslation();
  return (
    <PrimaryLayout>
      <div className="bg-secondary dark:bg-primary">
        <section className="bg-sky-700 text-white hover:bg-sky-800 my-10 flex flex-1 px-4 py-2 sm:px-8 sm:py-3 ">
          <div>
            <h1>{t('home.label')}</h1>
            <h2>{t('home.welcome')}</h2>
          </div>
        </section>

        <div className="flex flex-1 justify-center">
          <Button />
        </div>
        <ThemeSwitcher />
      </div>
    </PrimaryLayout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
