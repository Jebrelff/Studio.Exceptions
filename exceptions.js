// Dropping a keyword when initializing a variable
try {
    let value = 10;
    let result = val * 5; // val is not defined
    console.log(result);
} catch (error) {
    console.log("Error occurred:\n", error);
}

console.log('') // for newline

// Misusing a method
try {
    let obj = {
        myMethod: function () {
            return "number is 10";
        }
    }
    let result = obj.myMethod() * 5;

    if (isNaN(result)) {
        throw new Error('Result is NaN');
    }

    console.log(result);
} catch (error) {
    console.log("Error occurred:\n", error);
}