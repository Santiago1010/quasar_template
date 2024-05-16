<script setup>
  import { defineProps } from 'vue';

  const props = defineProps(['image', 'name', 'pokedex']);
</script>

<template>
  <q-card dark class="q-ma-md q-pa-md">
    <q-card-section class="text-capitalize">{{ props.name }}</q-card-section>
  </q-card>
</template>

<style scoped></style>
