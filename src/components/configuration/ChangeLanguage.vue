<script setup>
import { useQuasar } from 'quasar';
import { onMounted } from 'vue';

const $q = useQuasar();
const modules = import.meta.glob('../../../node_modules/quasar/lang/(en-US|es).js');
const defaultLanguage = import.meta.env.VITE_LANG_DEFAULT;
const actualLang = localStorage.getItem('language');

const changeLanguage = (newLocale) => {
  let locale = newLocale;

  localStorage.setItem('language', locale);

  if (newLocale === 'en') locale = 'en-US';

  modules['../../../node_modules/quasar/lang/' + locale + '.js']().then((lang) => {
    $q.lang.set(lang.default);
  });
};

onMounted(() => {
  let newLang = defaultLanguage;

  if (actualLang) newLang = actualLang;

  changeLanguage(newLang);
});
</script>

<template>
  <div class="locale-changer">
    <q-select
      v-model="$i18n.locale"
      :label="$t('global.changeLanguage')"
      :options="$i18n.availableLocales"
      style="width: 300px"
      @update:model-value="changeLanguage($i18n.locale)"
      outlined
    />
  </div>
</template>
