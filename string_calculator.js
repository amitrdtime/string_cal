// add function to calculate String number
const add = (str) => {
    let resultSum = 0;
    let delimiter = ",";
    let negativeNumber = [];

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

            if (isNaN(num)) continue;

            if (num < 0) {
                negativeNumber.push(num);
            } else {
                resultSum += parseInt(num);
            }
        }
    }

    if (negativeNumber.length > 0) {
        throw new Error("negative numbers not allowed " + negativeNumber.join(","));
    }

    
    return resultSum;
}

try {
    console.log("Sum:",add(""));
    console.log("Sum:",add("1,2"));
    console.log("Sum:",add("1\n2,3"));
    console.log("Sum:", add("//;\n1;2")); 
    console.log("Sum:", add("1,-2,3,-4"));
} catch (e) {
    console.log("Error:", e.message); 
}