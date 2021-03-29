function countTotalSalary(employees) {
    let values = Object.values(employees);
    let total = 0;
    for (let i = 0; i < values.length; i += 1) {
        total += Number(values[i]);
    }
    return total;
}

console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400