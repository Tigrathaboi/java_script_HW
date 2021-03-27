function findLongestWord(string) {
    let result;
    let max = 0;
    let new_string = string.split(" ");
    for (let i = 0; i < new_string.length; i += 1)
    {
        if(new_string[i].length > max) {
            max = new_string[i].length;
            result = new_string[i];
        }
    }
    return result;
}
console.log(findLongestWord('Proin sociis natoque et magnis parturient montes mus'));