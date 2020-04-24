function addition(numOne, numTwo) {
    //if a number type isn't returned then produce an error
    if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    }
    else {
        alert("Error!"); //alert function to link to calc spec test
        //doesnt make the alert box appear as you'd have to click ok to progress to next test
    }
} 