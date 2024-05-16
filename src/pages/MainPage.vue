<script setup>
  import { onMounted } from 'vue';
  import { usePokemonStore } from '../stores/pokemon/pokemon.store';
  import PokeCard from '../components/pokemon/PokeCard.vue';

  const pokemonStore = usePokemonStore();

  const columns = [
    {
      name: 'id',
      required: true,
      label: '#',
      align: 'left',
      field: (row) => row.id,
      sortable: true,
    },
    {
      name: 'name',
      required: true,
      label: 'Pokémon',
      align: 'left',
      field: (row) => row.name,
      style: 'text-transform: capitalize',
      sortable: true,
    },
  ];

  onMounted(() => {
    pokemonStore.readAllPokemon();
  });
</script>

<template>
  <q-table :rows="pokemonStore.pokemons" :columns="columns" row-key="name"></q-table>
</template>
