/**
 * Capitalizes the first letter of each word in the input string.
 *
 * @param {string} str - the input string to be formatted
 * @return {string} the formatted string with each word capitalized
 */
const formatCapitalize = (str) => {
  const string = str.trim()
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Splits a string into an array using the specified separator.
 *
 * @param {string} str - The string to be split.
 * @param {string} separator - The separator used to split the string.
 * @return {Array} An array of substrings.
 */
const stringToArray = (str, separator, numberElements = false) => {
  const array = str.split(separator)

  if (numberElements) {
    let numbers = []

    for (let element of array) {
      numbers.push(parseInt(element))
    }

    return numbers
  }

  return array
}

/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {string} str - The input string
 * @param {string} subStr - The substring to search for
 * @return {number} The number of occurrences of the substring in the string
 */
const countOccurrences = (str, subStr) => {
  return str.split(subStr).length - 1
}

/**
 * Converts a string to camel case.
 *
 * @param {string} string - The string to be converted.
 * @return {string} The converted string in camel case.
 */
const toCamelCase = (string) => {
  string = string.replace(/[^\w\sáéíóúüñÁÉÍÓÚÜÑ_-]/g, '')
  string = string.replace(/[-_]/g, ' ')
  string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  let formattedString = ''
  const stringsArray = string.split(' ')

  for (var i = 0; i < stringsArray.length; i++) {
    formattedString += i === 0 ? stringsArray[0].toLowerCase() : formatCapitalize(stringsArray[i])
  }

  return formattedString
}

/**
 * Converts a string to PascalCase.
 *
 * @param {string} string - The string to be converted.
 * @return {string} The converted string in PascalCase.
 */
const toPascalCase = (string) => {
  string = toCamelCase(string)

  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Converts a string to snake case.
 *
 * @param {string} string - The string to be converted.
 * @return {string} The converted string in snake case.
 */
const toSnakeCase = (string) => {
  string = string.replace(/[^\w\sáéíóúüñÁÉÍÓÚÜÑ_-]/g, '')
  string = string.replace(/[-_]/g, '_')
  string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  string = string.replace(/\s/g, '_')

  return string.toLowerCase()
}

/**
 * Converts a string to SCREAMING_SNAKE_CASE.
 *
 * @param {string} string - The string to be converted.
 * @return {string} The converted string in SCREAMING_SNAKE_CASE.
 */
const toScreamingSnakeCase = (string) => {
  return toSnakeCase(string).toUpperCase()
}

/**
 * Converts a string to kebab case.
 *
 * @param {string} string - The string to be converted.
 * @return {string} The converted string in kebab case.
 */
const toKebabCase = (string) => {
  string = toSnakeCase(string)

  return string.replace(/_/g, '-')
}

export {
  formatCapitalize,
  stringToArray,
  countOccurrences,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toScreamingSnakeCase,
  toKebabCase,
}
