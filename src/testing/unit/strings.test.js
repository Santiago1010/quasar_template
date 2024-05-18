import {
	countOccurrences,
	formatCapitalize,
	stringToArray,
	toCamelCase,
	toKebabCase,
	toPascalCase,
	toScreamingSnakeCase,
	toSnakeCase,
} from '../../helpers/strings';

const caseConventionsTest = 'My "TEsti!ng" v4ríable_WITH Ñ and ñ*';

describe('Strings Helper', () => {
	test('To capitalize the first letter. (`formatCapitalize`)', () => {
		expect(formatCapitalize('jhOn ñÁñez Doe ávila')).toBe(
			'Jhon Ñáñez Doe Ávila',
		);
	});

	test('To split a string into an array with strings. (`stringToArray`)', () => {
		expect(stringToArray('1,2,3,4,5', ',')).toEqual(['1', '2', '3', '4', '5']);
	});

	test('To split a string into an array with numbers. (`stringToArray`)', () => {
		expect(stringToArray('1,2,3,4,5', ',', true)).toEqual([1, 2, 3, 4, 5]);
	});

	test('To count the number of occurrences. (`countOccurrences`)', () => {
		expect(countOccurrences('alaska', 'a')).toBe(3);
	});

	test('To convert a string to camelCase. (`toCamelCase`)', () => {
		expect(toCamelCase(caseConventionsTest)).toBe('myTestingV4riableWithNAndN');
	});

	test('To convert a string to PascalCase. (`toPascalCase`)', () => {
		expect(toPascalCase(caseConventionsTest)).toBe(
			'MyTestingV4riableWithNAndN',
		);
	});

	test('To convert a string to snake_case. (`toSnakeCase`)', () => {
		expect(toSnakeCase(caseConventionsTest)).toBe(
			'my_testing_v4riable_with_n_and_n',
		);
	});

	test('To convert a string to SCREAMING_SNAKE_CASE. (`toScreamingSnakeCase`)', () => {
		expect(toScreamingSnakeCase(caseConventionsTest)).toBe(
			'MY_TESTING_V4RIABLE_WITH_N_AND_N',
		);
	});

	test('To convert a string to kebab-case. (`toKebabCase`)', () => {
		expect(toKebabCase(caseConventionsTest)).toBe(
			'my-testing-v4riable-with-n-and-n',
		);
	});
});
