// Function to calculate the sum from a formatted string of numbers
const add = (str) => {
    let resultSum = 0;
    let delimiter = ",";
    const negativeNumbers = [];

    // Return 0 for an empty string
    if (str === "") {
        return 0;
    }

    // Check for custom delimiter syntax (e.g., "//;\n1;2")
    if (str.startsWith("//")) {
        const parts = str.split("\n");
        delimiter = parts[0].substring(2); // Extract custom delimiter after "//"
        str = parts[1]; // Remaining number string
    }

    // Replace newline characters with the delimiter
    str = str.replace(/\n/g, delimiter);

    // Split the string using the current delimiter
    const numberArray = str.split(delimiter);

    for (let num of numberArray) {
        const value = parseInt(num);

        // Skip non-numeric entries
        if (isNaN(value)) continue;

        // Collect negative numbers for error reporting
        if (value < 0) {
            negativeNumbers.push(value);
        } else {
            resultSum += value;
        }
    }

    // If negative numbers found, throw an error listing them
    if (negativeNumbers.length > 0) {
        throw new Error("negative numbers not allowed " + negativeNumbers.join(","));
    }

    return resultSum;
};

// Test cases wrapped in try-catch for error handling
try {
    console.log("Sum:", add(""));              // Output: 0
    console.log("Sum:", add("1,2"));           // Output: 3
    console.log("Sum:", add("1\n2,3"));        // Output: 6
    console.log("Sum:", add("//;\n1;2"));      // Output: 3
    console.log("Sum:", add("1,-2,3,-4"));     // Throws error for negative numbers
} catch (e) {
    console.log("Error:", e.message);
}
