import { defineStore } from 'pinia';
import {
	readAllPokemonApi,
	readPokemonsDetailsApi,
} from '../../api/pokemon/pokemon.api';
import { readTypeDetailsApi } from '../../api/pokemon/type.api';

export const usePokemonStore = defineStore('pokemon', {
	state: () => ({
		pokemons: [],
		type: null,
	}),
	actions: {
		readAllPokemon() {
			readAllPokemonApi()
				.then((response) => {
					console.log(response.data);
					const { results } = response.data;

					for (const result of results) {
						readPokemonsDetailsApi(result.url)
							.then((response) => {
								this.pokemons.push(response.data);
							})
							.catch((error) => {
								console.error(error);
							});
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
		readTypeDetails(type) {
			readTypeDetailsApi(type)
				.then((response) => {
					this.type = response.data;
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
});
