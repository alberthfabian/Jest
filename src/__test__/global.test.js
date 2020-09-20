const text = 'Hola Mundo';
const fruits = ['Manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
};

test('Probar un Callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH')
  })
});

const reverseString2 = str => {
  return new Promise((resovle, reject) => {
    if (!str) {
      reject(error('Error'))
    }
    resovle(str.split('').reverse().join(''))
  });
};

test('Probar una promesa', () => {
  return reverseString2('Hola')
  .then(string => {
    expect(string).toBe('aloH');
  });
});

test('Probar async/wait', async () => {
  const string = await reverseString2('hola');
  expect(string).toBe('aloh');
});

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las prueba'));