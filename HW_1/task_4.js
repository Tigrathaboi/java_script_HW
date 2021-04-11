function formatString(string) {
    if(string.length <= 40) {
        return string;
    } else {
        let arr = string.split(``);
        arr.splice(40, 3, ".", ".", ".");
        arr.splice(43);
        arr = arr.join(``);
        return arr;
    }
}
console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);