import rules from '../../helpers/rules';

describe('Rules', () => {
  test('A value is required. (`required`)', () => {
    expect(rules.required('value required')).toBe(true);
  });

  test('A valid email account. (`email`)', () => {
    expect(rules.email('jhon.doe.example@email.com')).toBe(true);
  });

  test('A valid password. (`password`)', () => {
    expect(rules.password('password')).toBe(true);
  });

  test("To validate that it's only a number, either integer or with decimals. (`integer`)", () => {
    expect(rules.integer(10)).toBe(true);
  });

  test('To validate that es a float number. (`float`)', () => {
    expect(rules.float(10.02, 2)).toBe(true);
  });

  test('To validate that es a string. (`stringsOnly`)', () => {
    expect(
      rules.stringsOnly(
        '¡Hola, señor Águila! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ),
    ).toBe(true);
  });

  test('To validate that a value is greater than or equal to another. (`min`)', () => {
    expect(rules.min(12, 10)).toBe(true);
  });

  test('To validate that a value is less than or equal to another. (`max`)', () => {
    expect(rules.max(10, 10)).toBe(true);
  });

  test('To validate if the size of the value is less than or equal to another. (`minLength`)', () => {
    expect(rules.minLength(12345, 5)).toBe(true);
  });

  test('To validate if the size of the value is greater than or equal to another. (`maxLength`)', () => {
    expect(rules.maxLength(12345, 5)).toBe(true);
  });

  test('To validate if the value is a valid URL. (`isUrl`)', () => {
    expect(rules.isUrl('https://quasar.dev')).toBe(true);
  });
});
