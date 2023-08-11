# Conversational Questions:

### These questions are not intended to be run in the console.

Inform the candidate that these questions are designed to be somewhat tricky,
and are intended to gauge comprehension of js runtime operations.

If the candidate answers incorrectly, or it is obviously a correct guess...
Use the opportunity to ask them to explain their thoughts or form a hypothesis.

The important factor is gaining insight into how the candidate troubleshoots,
and how the candidate can identify possibly flawed assumptions in there understanding.


Conversational Question Notes

* ### 01.js -- Mutations
    1. logs true, then false. Equality vs strict equality.
    2. false, false. Arrays are objects. Objects references are created on initialization.
    3. brown, brown. A changing a reference to a reference results in a mutation of the original object
    4. red, red. Setting person 4 to a new object creates a new reference.

* ### 02.js -- const error
    1. ERROR. Cannot reset const value, only mutate.


* ### 03.js -- Hoisting
    1. Prints I am a variable
    2. ERROR - only function declaration is hoisted here.


* ### 04.js -- incrementing references (Difficult)
    1. prints 12.
    2. Explaination: This is a very difficuly question for some. The ++ increments the reference before preceeding in the operator chain. b === 3 && c === 9.

    Compare this to changing ++a to a++

    3. Ask the candidate why they might be wrong and how they might get to the correct answer.

* ### 05.js -- Async resolution
    1. Prints "Sorry" message. There is now await in from of the async function call, so it only returns an unresolved promise.

* ### 06.js -- reverse
    1. Will initially error because const isn't hoisted.
    2. After corrected: will then error because seperator isn't defined.
    3. Maybe suggest writing quick error handling or setting a default value for separator.

* ### 07.js -- setTimout and scope (Difficult)
    1. The debounce wraps a function that will only fire the last invocation within the specified time
    2. It does this by referencing the enclosing scope of `timerId`
    3. If `timerId` exists, then clear its previous reference and create a new one.
    4. This results in the console only logging the last hello.

* ### 08.js -- Arrow scopes
    1. Author is undefined becuase the arrow changes the `this` context

* ### 09.js -- Async priorities
    1. Order is ... 1,3,6,5,4,2