import axios from '../../configurations/axios';
import { setQueryStrings } from '../../helpers/http';

const readTypeDetailsApi = (type, { queries } = {}) => {
  let url = '/type/' + type;

  if (queries) url += setQueryStrings(queries);

  return axios.get(url);
};

export { readTypeDetailsApi };
