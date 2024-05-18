/**
 * Calculates the sum of the numbers provided.
 *
 * @param {number[]} numbers - The numbers to sum up.
 * @return {number} The total sum of the numbers.
 */
const sumNumbers = (...numbers) => {
	return numbers.reduce((total, number) => total + number, 0);
};

/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param {number} num - The number to be rounded.
 * @param {number} decimals - The number of decimal places to round to.
 * @return {number} The rounded number.
 */
const roundToDecimal = (num, decimals) => {
	return Number(num.toFixed(decimals));
};

/**
 * Generate a random number between the given minimum and maximum values.
 *
 * @param {number} min - The minimum value for the range
 * @param {number} max - The maximum value for the range
 * @return {number} A random number within the specified range
 */
const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Calculates the percentage of a smaller number relative to a larger number.
 *
 * @param {number} smallerNumber - The smaller number to calculate the percentage of.
 * @param {number} largerNumber - The larger number to calculate the percentage relative to.
 * @throws {Error} If the second number is not greater than the first.
 * @return {number} The calculated percentage as a floating-point number with two decimal places.
 */
const calculatePercentage = (smallerNumber, largerNumber) => {
	if (smallerNumber >= largerNumber) {
		throw new Error('The second number must be greater than the first');
	}

	const percentage = (smallerNumber / largerNumber) * 100;

	return Number.parseFloat(percentage.toFixed(2));
};

/**
 * Formats a given number to a currency based on the provided country code.
 *
 * @param {number} number - The number to be formatted to currency
 * @param {string} countryCode - The country code used for formatting the currency
 * @return {string | null} The formatted number as a string with currency symbol or null if an error occurs.
 */
const formatNumberToCurrency = (number, countryCode) => {
	try {
		const formatter = new Intl.NumberFormat(countryCode, {
			style: 'currency',
			currency: countryCode,
		});

		return formatter.format(number).split(' ')[1];
	} catch (error) {
		console.error(`Error formatting number to currency: ${error}`);
		return null;
	}
};

export {
	sumNumbers,
	roundToDecimal,
	getRandomNumber,
	calculatePercentage,
	formatNumberToCurrency,
};
