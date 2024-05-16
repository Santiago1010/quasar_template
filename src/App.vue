<script setup></script>

<template>
  <router-view />
</template>

<style>
  .error_page_background {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    max-width: 75%;
    max-height: 90%;
  }

  .error_page_image_container {
    position: relative;
  }

  .error_page_image_container .error_page_image_container_image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn_large_container {
    width: 90%;
    left: 5%;
  }
</style>
