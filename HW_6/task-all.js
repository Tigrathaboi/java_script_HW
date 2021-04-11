import users from "./users.js";

//task-1
const getUserNames = users => users.map(({name}) => name)

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 
// 'Ross Vazquez', 'Elma Head', 'Carey Barr', 
// 'Blackburn Dotson', 'Sheree Anthony' ]

///////////////////////////////////////////////////

//task-2
const getUsersWithEyeColor = (users, color) => users.filter(({eyeColor}) => (eyeColor === color));

console.log(getUsersWithEyeColor(users, 'blue'));
//   [объект Moore Hensley, объект Sharlene Bush, 
//     объект Carey Barr]

///////////////////////////////////////////////////

//task-3

const getUsersWithGender = (users, Gender) => users.filter(({gender}) => (gender === Gender)).map(({name}) => name);
  
console.log(getUsersWithGender(users, 'male'));
//   [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 
//   'Blackburn Dotson' ]

///////////////////////////////////////////////////

//task-4

const getInactiveUsers = users => users.filter(({isActive}) => !isActive);

console.log(getInactiveUsers(users));
//   [объект Moore Hensley, объект Ross Vazquez, 
//     объект Blackburn Dotson]

///////////////////////////////////////////////////

//task-5

const getUserWithEmail = (users, Email) => users.filter(({email}) => (email === Email));

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
// {объект пользователя Elma Head}

///////////////////////////////////////////////////

//task-6

const getUsersWithAge = (users, min, max) => users.filter(({age}) => (age >= min && age <= max));

console.log(getUsersWithAge(users, 20, 30)); 
  // [объект Ross Vazquez, объект Elma Head, 
//   объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush,
//    объект Blackburn Dotson, объект Sheree Anthony]

///////////////////////////////////////////////////

//task-7

const calculateTotalBalance = users => users.reduce((total, {balance}) => total + balance, 0)

console.log(calculateTotalBalance(users)); // 20916

///////////////////////////////////////////////////

//task-8

const getUsersWithFriend = (users, friendName) => users.filter(({friends}) => friends.includes(friendName)).map(({name})=> name);

console.log(getUsersWithFriend(users, 'Briana Decker')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]     
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 
// [ 'Elma Head', 'Sheree Anthony' ]

///////////////////////////////////////////////////

//task-9

const getNamesSortedByFriendsCount = users => users.sort((min,max)=> min.friends.length - max.friends.length).map(({name})=> name);

console.log(getNamesSortedByFriendsCount(users));
//   [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
//   'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 
//   'Ross Vazquez' ]

///////////////////////////////////////////////////

//task-10

const getSortedUniqueSkills = users => users.reduce((skills_bowl,{skills}) => [...skills_bowl,...skills],[]).filter((skill, index,total) => total.indexOf(skill) === index).sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 
//   'commodo', 'culpa', 'elit', 'ex', 'ipsum', 
//   'irure', 'laborum', 'lorem', 'mollit', 'non', 
//   'nostrud', 'nulla', 'proident', 'tempor', 
//   'velit', 'veniam' ]