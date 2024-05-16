import axios from '../../configurations/axios';

const readAllPokemon = () => {
  return axios.get('/pokemon');
};

export default { readAllPokemon };
