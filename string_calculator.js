// add function to calculate String number
const add = (str) => {
    resultSum = 0;
    delimiter = ","

    if(str === ""){
        return 0;
    }

    if (str.startsWith("//")) {
        const parts = str.split("\n");
        delimiter = parts[0].substring(2); 
        str = parts[1]; 
    }

    str = str.replace(/\n/g, delimiter);

    let numberArray = str.split(delimiter); 
    
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
console.log("Sum:", add("//;\n1;2")); 