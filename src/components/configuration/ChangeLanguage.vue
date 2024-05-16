<script setup>
  import { useQuasar } from 'quasar';

  const $q = useQuasar();
  const modules = import.meta.glob('../../../node_modules/quasar/lang/(en-US|es).js');

  const changeLanguage = (newLocale) => {
    let locale = newLocale;

    if (newLocale === 'en') locale = 'en-US';

    modules['../../../node_modules/quasar/lang/' + locale + '.js']().then((lang) => {
      $q.lang.set(lang.default);
    });
  };
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
