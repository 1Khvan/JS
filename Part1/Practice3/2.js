"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

let usersZp = Number(prompt("Введите сумму ЗП:"));
const deductTax = () => usersZp * 0.87;
if (usersZp < 0) {
  console.log("Значение задано неверно");
} else
  console.log(
    `Размер заработной платы за вычетом налогов равен ${deductTax()}`
  );