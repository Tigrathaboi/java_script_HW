let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;

let totalAmmount = prompt('Введите кол-во дроидов:');
totalPrice = totalAmmount * pricePerDroid;

if(totalAmmount==null){
    alert('Отменено пользователем!');
} else if(totalPrice > credits){
    alert('Недостаточно средств на счету!');
} else if(totalPrice < credits){
    alert(`Вы купили ${totalAmmount} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}