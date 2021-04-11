let numbers = [];
let total = 0;
let i = 0;
while (true) {
    let input = prompt("Введите число");
    if (input === null)  {
        break;
    } else {
        if (isNaN(input)) {
            alert("Было введено не число, попробуйте еще раз");
        } else {
            numbers[i] = Number(input)
        }
    }
    i += 1;
}

for (i = 0; i <= numbers.length - 1; i += 1) {
    console.log(numbers[i]);
    total += numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);