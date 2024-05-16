import { createApp } from 'vue';
import { Quasar } from 'quasar';
import i18n from './boot/i18n';
import quasarLang from 'quasar/lang/es';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Import App
import App from './App.vue';

createApp(App)
  .use(i18n)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
  })
  .mount('#app');
