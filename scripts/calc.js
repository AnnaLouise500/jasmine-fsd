function addition(numOne, numTwo) {
    //if a number type isn't returned then produce an error
    if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    }
    else {
        return "Error!";
    }
}