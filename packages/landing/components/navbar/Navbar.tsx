import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LangSelect from './LangSelect';

const navigation = [
  { name: 'about.label', href: '/about' },
  { name: 'contact.label', href: '/contact' },
  { name: 'privacy.label', href: '/privacy' },
];

const myLoader = ({ src }: any) => {
  return `https://tailwindui.com/img/logos/${src}?color=white`;
};

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <>
                <span className="sr-only">{t('home.label')}</span>
                <Image
                  className="h-10 w-auto"
                  loader={myLoader}
                  src="mark.svg"
                  alt="Company logo"
                  width={47}
                  height={40}
                />
              </>
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  locale={router.locale}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {t(link.name)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="ml-10 space-x-4">
              <LangSelect />
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
