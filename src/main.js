import { createPinia } from 'pinia';
import { Notify, Quasar } from 'quasar';
import quasarLang from 'quasar/lang/en-US';
import { createApp } from 'vue';

import i18n from './configurations/i18n';
import router from './configurations/router';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Import App
import App from './App.vue';

const pinia = createPinia();

createApp(App)
  .use(i18n)
  .use(router)
  .use(pinia)
  .use(Quasar, {
    plugins: { Notify }, // import Quasar plugins and add here
    lang: quasarLang,
  })
  .mount('#app');
