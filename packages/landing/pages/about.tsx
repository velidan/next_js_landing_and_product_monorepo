// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

// type GsspPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function About(props: any) {
  const router = useRouter();
  const { defaultLocale } = router;

  return (
    <PrimaryLayout>
      <div>
        <h1>About</h1>
      </div>
    </PrimaryLayout>
  );
}

type Props = {
  locale?: string;
  locales?: string[];
};

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'home'])),
//       // Will be passed to the page component as props
//     },
//   };
// }
