<script setup>
import ChangeLanguage from '../components/configuration/ChangeLanguage.vue';
import LigthDark from '../components/configuration/LigthDark.vue';
</script>

<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          {{ $t("global.appName") }}
        </q-toolbar-title>

        <q-space />

        <LigthDark />

        <q-space />

        <ChangeLanguage />
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white"></q-footer>
  </q-layout>
</template>
