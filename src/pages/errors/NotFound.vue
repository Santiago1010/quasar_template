<script setup>
import { useRouter } from 'vue-router';

const $router = useRouter();
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
              spinner-size="80px"
            />
          </div>
          <div class="col-12 col-md-6 q-px-md">
            <h2 class="text-h2 text-white">{{ $t('errors.notFound.title') }}</h2>
            <p class="text-body1 text-white">{{ $t('errors.notFound.message') }}</p>
            <q-btn
              color="primary"
              icon="arrow_back"
              class="btn_large_container"
              @click="$router.back()"
              :label="$t('errors.notFound.button')"
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
