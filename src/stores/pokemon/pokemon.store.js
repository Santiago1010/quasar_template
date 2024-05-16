import { defineStore } from 'pinia';
import { readAllPokemonApi, readPokemonsDetailsApi } from '../../api/pokemon/pokemon.api';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
  }),
  actions: {
    readAllPokemon() {
      readAllPokemonApi()
        .then((response) => {
          console.log(response.data);
          const { results } = response.data;

          for (let result of results) {
            readPokemonsDetailsApi(result.url)
              .then((response) => {
                this.pokemons.push(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          }

          console.log(this.pokemons);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
