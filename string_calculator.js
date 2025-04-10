// add function to calculate String number
const add = (str) => {
    resultSum = 0;

    if(str === ""){
        return 0;
    }

    str = str.replace(/\n/g, ",");

    let numberArray = str.split(','); 
    if(numberArray.length > 0){
        for (num of numberArray) {
            resultSum = resultSum + parseInt(num);
        }
    }
    return resultSum;
}

console.log("Sum:",add(""));
console.log("Sum:",add("1,2"));
console.log("Sum:",add("1\n2,3"));