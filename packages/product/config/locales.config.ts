// for Sidebar language select
export const supportedLocalesData = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Espanol' },
};

// for ni18n.config.js
export const supportedLocales = Object.keys(supportedLocalesData);

export type Locales = 'es' | 'en';

// for Storybook to render the lang select on the tool panel
export const storybookGlobalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: 'en', title: 'English' },
        { value: 'es', right: 'es', title: 'Espanol' },
      ],
      showTitle: 'Locale',
    },
  },
};
