// import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

// type GsspPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <PrimaryLayout>
      <div>
        <h1>{t('contact.label')}</h1>
      </div>
    </PrimaryLayout>
  );
}

// type Props = {
//   locale?: string;
//   locales?: string[];
// };

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}
