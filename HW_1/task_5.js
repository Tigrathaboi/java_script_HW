function checkForSpam(message) {
    let arr = message.split(" ");
    let result = false;
    for(let i = 0; i <= arr.length; i += 1) {
        if(arr[i] == "spam" || arr[i] == "sale") {
            result = true;
        }
    }
    return result;
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true