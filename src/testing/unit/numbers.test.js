import {
  calculatePercentage,
  formatNumberToCurrency,
  getRandomNumber,
  roundToDecimal,
  sumNumbers,
} from '../../helpers/numbers';

describe('Numbers Helper', () => {
  test('To add multiple numbers. (`sumNumbers`)', () => {
    expect(sumNumbers(1, 2, 3, 4, 5)).toBe(15);
  });

  test('To round a number. (`roundToDecimal`)', () => {
    expect(roundToDecimal(1.2345, 2)).toBe(1.23);
  });

  test('To get a random number. (`getRandomNumber`)', () => {
    expect(getRandomNumber(1, 15)).toBeLessThanOrEqual(15);
  });

  test('To calculate a percentage. (`calculatePercentage`)', () => {
    expect(calculatePercentage(10, 100)).toBe(10);
  });

  test('To format a number to currency. (`formatNumberToCurrency`)', () => {
    expect(formatNumberToCurrency(5000000, 'COP')).toBe('5.000.000,00');
  });
});
