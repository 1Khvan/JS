"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

let firstNumber = Number(prompt("Введите первое число:"));
console.log (`Первое число ${firstNumber}`)
let secondNumber = Number(prompt("Введите второе число:"));
console.log (`Второе число ${secondNumber}`)

function getMax() {
  return Math.max(firstNumber, secondNumber);
}
function getMin() {
  return Math.min(firstNumber, secondNumber);
}

const sum = () => firstNumber + secondNumber;
console.log(`Сумма чисел равна ${sum()}`);

const dif = () => getMax() - getMin();

console.log(`Разница чисел равна ${dif()}`);

const mul = () => firstNumber * secondNumber;
console.log(`Умножение чисел равна ${mul()}`);

const div = () => getMax() % getMin();
console.log(`Деление чисел равна ${div()}`);
