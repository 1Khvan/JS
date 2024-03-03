"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

let firstNumber = Number(prompt("Введите первое число:"));
let secondNumber = Number(prompt("Введите второе число:"));
let thirdNumber = Number(prompt("Введите третье число:"));

function getMax() {
    return Math.max(firstNumber, secondNumber, thirdNumber)
}

// let arr = [firstNumber, secondNumber, thirdNumber];
// let max = -Infinity;
// for (let num of arr) {
//   if (num > max) {
//     max = num;
//   }
// }
alert(`Максимальное значение среди чисел ${firstNumber}, ${secondNumber}, ${thirdNumber} равно ${getMax()}`);
