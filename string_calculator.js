// add function to calculate String number
const add = (str) => {
    resultSum = 0;
    
    if(str === ""){
        return 0;
    }

    let numberArray = str.split(','); 
    if(numberArray.length > 0){
        for (num of numberArray) {
            resultSum = resultSum + parseInt(num);
        }
    }
    return resultSum;
}

console.log(add(""));
console.log(add("1,2"));