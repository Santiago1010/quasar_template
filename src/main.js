import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/es';
import { createPinia } from 'pinia';

import i18n from './boot/i18n';
import router from './routes/router';

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
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
  })
  .mount('#app');
