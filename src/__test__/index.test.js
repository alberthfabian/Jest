const randomStrings = require('../index');

describe('Probar funcionalidades de randomStrings', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof (randomStrings())).toBe('string');
  });
  test('Comprobar qu eno existe una ciudad', () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});