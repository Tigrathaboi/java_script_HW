let country = prompt('Введите страну доставки:').toUpperCase();
let price = 0;

switch(country) {
    case 'КИТАЙ':
        price = 150;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'ЧИЛИ':
        price = 250;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'АВСТРАЛИЯ':
        price = 165;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'ИНДИЯ':
        price = 90;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'ЯМАЙКА':
        price = 130;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    default:
        alert("Доставка в вашу страну недоступна")
}