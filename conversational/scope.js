/**
 *  Just var should work because of its scope
 */
function exampleProblem() {
  let abcVariable = 'abc'

  if (true) {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";
    console.log(abcVariable);
  }

  console.log(abcVariable);
  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}
