const cities = ['Cudad de México', 'Bogotá', 'Lima', 'Buenos aires', 'Guadalajara'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = str => {
  return new Promise((resovle, reject) => {
    if (!str) {
      reject(error('Error'))
    }
    resovle(str.split('').reverse().join(''))
  });
};

module.exports = randomString;