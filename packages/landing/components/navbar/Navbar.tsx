import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const navigation = [
  { name: 'about.label', href: '/about' },
  { name: 'contact.label', href: '/contact' },
  { name: 'privacy.label', href: '/privacy' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <>
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt=""
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
              <select onChange={handleLocaleChange} value={router.locale}>
                <option value="en">🇺🇸 English</option>
                <option value="es">es Espanol</option>
              </select>
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
