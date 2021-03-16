const admins_password = `12345`;
let message;

let user_password = prompt('Введите пароль:');

if(admins_password == user_password){
    message = 'Добро пожаловать!';
} else if(user_password==null){
    message = 'Отменено пользователем!';
} else if(user_password != admins_password){
    message = 'Доступ запрещен неверный пароль!';
}

alert(message);