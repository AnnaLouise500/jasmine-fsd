// This is where I write my tests
/* english example:
            I want to test a calculator
                I am going to test the addition function
                    I want to get the result of 42
                    I expect the result of 20 + 22 to be 42
*/
// compared with Jasmine:
            describe("Calculator", function() {
                describe("Addition tests", function() {
                    it("should return 42", function() {
                        expect(addition(20, 22)) .toBe(42); //make sure addition is defined in calc.js
                    });
                    //adding a second test to the calculator > addition suite
                    it("should return 26", function() {
                        expect(addition(7,19)) .toBe(26);
                    });
                    //adding defensive programming test
                    it("should return an error if we don't supply two numbers", function() {
                        //spy to check if alert function has been called containing "error"
                        spyOn(window, "alert"); //alert belongs to window object hence window
                        addition("Hitchikers", "Guide");
                        expect(window.alert).toHaveBeenCalledWith("Error!");
                    });
                });
            });


