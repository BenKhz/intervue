/**
 * Hoisting
 * It will return undefined and "I am a var variable"
 * Because of hoisting, the variable is declared before the console.log
 * But it is not initialized, so it is undefined
 */
function hoistingProblem() {
    console.log(varVariable);
    var varVariable = "I am a var variable";
    console.log(varVariable);
}


/**
 * Simulates a user interacting with a messaging app.
 */
function messagingScenario() {
    sendMessageRegular(); 
    sendMessageArrow(); 
    sendMessageArrowConst(); 
    
    function sendMessageRegular() {
        console.log("Message sent via regular function");
    }
    
    var sendMessageArrow = () => {
        console.log("Message sent via arrow function");
    };
    
    const sendMessageArrowConst = () => {
        console.log("Message sent via arrow const function");
    };
}

messagingScenario();
