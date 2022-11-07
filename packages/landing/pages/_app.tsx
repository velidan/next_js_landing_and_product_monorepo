import type { AppProps } from 'next/app';
// import { appWithI18Next } from 'ni18n';
// import { ni18nConfig } from '../ni18n.config';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import '../styles/globals.css';

// TODO: very quick implementation. Must be reworked
function initTheme() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      global.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme');
}

// TODO: remove any for the pageProps.messages that comes from the nextIntl
function MyApp({ Component, pageProps }: AppProps & any) {
  useEffect(() => {
    initTheme();
  }, []);
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
