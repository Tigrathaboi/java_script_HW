function logItems(arr) {
    for(let i = 0; i < arr.length; i += 1) {
        console.log(`${i} - ${arr[i]}`);
    }
}

let test1_arr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
let test2_arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(test1_arr);
logItems(test2_arr);