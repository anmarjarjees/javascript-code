// Only pure JS:

function findResult() {
    // Get the input string entered by the user from the input field
    let userInputStr = document.getElementById("numbers").value;

    // Remove extra spaces from both sides of the input string using the trim() method
    // This helps ensure that we don't have unnecessary spaces before or after the user input
    // Example: "  1 2 3 4 5  " =>  "1 2 3 4 5"
    userInputStr = userInputStr.trim(); // "1 2 3 4 5"

    // Split the string into an array of numbers based on spaces
    // Now userNumberArray will be an array like ["1", "2", "3", "4", "5"]
    let userNumberArray = userInputStr.split(" ");

    // Log the array of numbers for debugging purposes
    console.log(userNumberArray);

    // Declare a new variable to hold the result of the calculation
    let result;

    /* 
    Conditional checks based on the radio button selected by the user.
    - If the multiply button is selected (id="mul"), we will multiply the numbers.
    - If the divide button is selected (id="div"), we will divide the numbers.
    - If the count button is selected (id="ctn"), we will count how many numbers were entered.
    */

    if (document.getElementById("mul").checked) {
        // Multiplication Operation: We will multiply all numbers in the array.
        // Initialize result to 1 (multiplication identity)
        result = 1;

        // Loop through each number in the array and multiply it with the result
        for (let i = 0; i < userNumberArray.length; i++) {
            // Convert the string to a number and multiply it with the result.
            // JavaScript will automatically convert strings like "2" to a number when used in math operations
            // using parseFloat() with multiplying is not needed (optional), but it is good coding practice! 
            result *= parseFloat(userNumberArray[i]); // Multiplying the numbers
        }

    } else if (document.getElementById("div").checked) {
        // Division Operation: We will divide all numbers in the array.
        // Task: to find the division of all numbers
        result = "Dividing all numbers! You can try it :-)";
    } else {
        // Count Operation: If the user selected the "Count" operation, simply return the number of numbers entered.
        // The length of the array will give us the count of numbers:
        result = userNumberArray.length;
    }

    // Display the result in the HTML element with id "result"
    // The innerHTML property will set the content inside the <span id="result"> element
    document.getElementById("result").innerHTML = result;
}
