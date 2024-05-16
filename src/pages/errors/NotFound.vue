<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const $router = useRouter();

  const title = ref(t('errors.notFound.title'));
  const message = ref(t('errors.notFound.message'));
  const button = ref(t('errors.notFound.button'));
</script>

<template>
  <div class="container_body">
    <q-card class="error_page_background">
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-6 q-px-md error_page_image_container">
            <q-img
              src="images/undraw/undraw_page_not_found_re_e9o6.svg"
              spinner-color="primary"
              class="vertical-middle error_page_image_container_image"
              spinner-size="82px"
            />
          </div>
          <div class="col-12 col-md-6 q-px-md">
            <h2 class="text-h2 text-white">{{ title }}</h2>
            <p class="text-body1 text-white">{{ message }}</p>
            <q-btn
              color="primary"
              icon="arrow_back"
              class="btn_large_container"
              @click="$router.back()"
              :label="button"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
  div.container_body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #71b7e6, #9b59b6 50%, #333 50%, #333);
  }
</style>
