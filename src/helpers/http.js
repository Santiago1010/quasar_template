/**
 * Generates a query string from an object.
 *
 * @param {Object} object - The object containing key-value pairs.
 * @return {string} The generated query string.
 */
const setQueryStrings = (object) => {
  const queryString = new Set();

  for (const [key, value] of Object.entries(object)) {
    queryString.add(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  }

  const arrayQueryString = Array.from(queryString);

  if (arrayQueryString.length > 0) return '?' + arrayQueryString.join('&');

  return '';
};

/**
 * Creates a FormData object from the given object.
 *
 * @param {Object} object - The object containing key-value pairs.
 * @return {FormData} The FormData object created from the object.
 */
const setFormData = (object) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(object)) {
    formData.append(key, value);
  }

  return formData;
};

export { setQueryStrings, setFormData };
