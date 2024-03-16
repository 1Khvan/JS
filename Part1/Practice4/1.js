"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

function elevenLines(a) {
    return a % 2 === 0;
}

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } 
    else if (elevenLines(i)) {
        console.log(`${i} - четное число`);
    } 
    else {
        console.log(`${i} - нечетное число`);
    }
}
