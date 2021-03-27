let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
    if (login.length < 4 || login.length > 16) {
        return false;
    }
    return true;
}

function isLoginUnique(allLogins, login) {
    for (let i = 0; i <= allLogins.length; i += 1) {
        if (allLogins[i] == login) {
            return false;
        }
    }
    return true;
}

function addLogin(allLogins, login) {
    if (isLoginValid(login) == true) {
        if (isLoginUnique(allLogins, login) == true) {
            allLogins.push(login);
            return `Логин успешно добавлен!`;
        } else {
            return `Такой логин уже используется!`;
        }
    } else {
        return `Ошибка! Логин должен быть от 4 до 16 символов`;
    }
}

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'