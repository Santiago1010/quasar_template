import { setFormData, setQueryStrings } from '../../helpers/http';

describe('HTTP(S) Helper', () => {
  test('Set query strings from an object. (`setQueryStrings`)', () => {
    expect(setQueryStrings({ name: 'John Doe', age: 15 })).toBe(
      '?name=John%20Doe&age=15',
    );
  });
});
