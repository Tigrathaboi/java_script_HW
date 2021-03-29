function findBestEmployee(employees) {
  let keys = Object.keys(employees);
  let values = Object.values(employees);
  let index = 0;
  let max = 0;

  for (let i = 0; i <= values.length; i += 1) {
    if (values[i] >= max)
    {
      max = values[i];
      index = i;
    }
  }

  return keys[index];
}

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux