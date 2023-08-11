/**
 * Question 1
 */
function hoistingProblem() {
    console.log(varVariable);
    var varVariable = "I am a var variable";
    console.log(varVariable);
}
hoistingProblem() // Prints...




/**
 * Question 2
 */
function messagingScenario() {
    sendMessageRegular(); 
    sendMessageArrow(); 
    sendMessageArrowConst(); 
    
    function sendMessageRegular() {
        console.log("Message sent via regular function");
    }
    
    var sendMessageArrow = function ()  {
        console.log("Message sent via arrow function");
    };
    
    const sendMessageArrowConst = () => {
        console.log("Message sent via arrow const function");
    };
}

messagingScenario(); // Prints
