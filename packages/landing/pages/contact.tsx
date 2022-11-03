import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { useRouter } from 'next/router';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

type GsspPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Contact(props: GsspPageProps) {
  const router = useRouter();
  const { defaultLocale } = router;

  return (
    <PrimaryLayout>
      <div>
        <h1>Contact</h1>
      </div>
    </PrimaryLayout>
  );
}

type Props = {
  locale?: string;
  locales?: string[];
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
  locales,
}) => {
  return {
    props: {
      locale,
      locales,
    },
  };
};
