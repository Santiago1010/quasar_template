import axios from '../../configurations/axios';
import { setQueryStrings } from '../../helpers/http';

const readAllPokemonApi = (queries) => {
	let url = '/pokemon';

	if (queries) url += setQueryStrings(queries);

	return axios.get(url);
};

const readPokemonsDetailsApi = (url) => {
	return axios.get(url);
};

export { readAllPokemonApi, readPokemonsDetailsApi };
