<script setup>
  import { useRouter, useRoute } from 'vue-router';
  import { usePokemonStore } from '../../stores/pokemon/pokemon.store';
  import { onMounted } from 'vue';

  const props = defineProps(['id', 'image', 'name', 'pokedex', 'types']);
  const $router = useRouter();
  const pokemonStore = usePokemonStore();

  const filterByType = (type) => {
    $router.push({ path: '/', query: { type } });
    pokemonStore.readTypeDetails(type);
  };
</script>

<template>
  <q-card :class="'q-ma-md q-pa-md bg-' + props.types[0].type.name">
    <span class="poke_number" v-if="props.id > 0 && props.id < 10"># 00{{ props.id }}</span>
    <span class="poke_number" v-if="props.id >= 10 && props.id < 100"># 0{{ props.id }}</span>
    <span class="poke_number" v-if="props.id >= 100"># {{ props.id }}</span>

    <q-img :src="props.image" />

    <q-card-section class="text-uppercase poke_name">{{ props.name }}</q-card-section>

    <q-card-section class="flex flex-center">
      <q-chip
        v-for="pokeType in props.types"
        :key="pokeType.slot"
        @click="filterByType(pokeType.type.name)"
        :class="'cursor-pointer text-capitalize text-bold ' + pokeType.type.name"
        clickable
      >
        <q-avatar><q-img :src="'/images/types/' + pokeType.type.name + '.svg'" /></q-avatar>
        {{ $t('types.' + pokeType.type.name) }}
      </q-chip>
    </q-card-section>
  </q-card>
</template>

<style scoped>
  .poke_number {
    position: absolute;
    top: 3%;
    left: 5%;
    color: grey;
    font-weight: 800;
    font-size: 5rem;
    z-index: 2;
  }

  .poke_name {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }
</style>
