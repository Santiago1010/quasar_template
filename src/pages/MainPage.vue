<script setup>
  import { onMounted } from 'vue';
  import { usePokemonStore } from '../stores/pokemon/pokemon.store';
  import PokeCard from '../components/pokemon/PokeCard.vue';

  const pokemonStore = usePokemonStore();

  onMounted(() => {
    pokemonStore.readAllPokemon();
  });
</script>

<template>
  <div class="row">
    <div
      v-for="pokemon in pokemonStore.pokemons"
      :key="pokemon.id"
      class="col-12 col-sm-6 col-md-3"
    >
      <PokeCard
        :id="pokemon.id"
        :image="pokemon.sprites.front_default"
        :name="pokemon.name"
        :types="pokemon.types"
      />
    </div>
  </div>
</template>
