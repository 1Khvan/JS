const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

function generateName() {
    const firstNames = ['Иван', 'Пётр', 'Анна', 'Мария', 'Александр', 'Елена'];
    const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Васильев', 'Смирнов', 'Кузнецов'];
  
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  }
  
  function generateAddress() {
    const street = ['Ул. Ленина', 'Ул. Пушкина', 'Ул. Кирова', 'Ул. Мира', 'Ул. Свободы', 'Ул. Победы'];
    const house = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const apartment = [101, 202, 303, 404, 505, 606, 707, 808, 909, 1010];
  
    return `${street[Math.floor(Math.random() * street.length)]} д. ${house[Math.floor(Math.random() * house.length)]}, кв. ${apartment[Math.floor(Math.random() * apartment.length)]}`;
  }
  
  function generateDate() {
    return moment().subtract(Math.floor(Math.random() * 365), 'days').format('YYYY-MM-DD');
  }
  
  function generateNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  module.exports = {generateName, generateAddress, generateDate, generateNumber}
 