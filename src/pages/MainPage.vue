<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PokeCard from '../components/pokemon/PokeCard.vue';
import { usePokemonStore } from '../stores/pokemon/pokemon.store';

const $route = useRoute();

const pokemonStore = usePokemonStore();

onMounted(async () => {
  pokemonStore.readAllPokemon();

  if ($route.query.type !== undefined) {
    pokemonStore.readTypeDetails($route.query.type);
  }
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
