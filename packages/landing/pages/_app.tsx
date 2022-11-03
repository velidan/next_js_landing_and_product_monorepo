import type { AppProps } from 'next/app';
// import { appWithI18Next } from 'ni18n';
// import { ni18nConfig } from '../ni18n.config';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

// TODO: remove any for the pageProps.messages that comes from the nextIntl
function MyApp({ Component, pageProps }: AppProps & any) {
  // const locale =
  //   typeof window !== 'undefined' && window.localStorage.getItem('user_locale');

  // localStorage could return null but the useSyncLanguage hook requires eiter string or undefined
  // useSyncLanguage(locale || 'en');

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

// export default appWithI18Next(MyApp, ni18nConfig);
export default appWithTranslation(MyApp);
