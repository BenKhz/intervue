# Intellective Technical Interview

## Overall Objectives
    * Evaluate a candidates technical profeciency and soft skills.
    * Remember interviewing can be stressful. Please keep it light hearted and offer reasonable support.
    * This structure is just a jumping off point. Feel free to deviate if you notice anything you'd like to pursue.
    * Throw some curveballs if you'd like.

## Junior

* Important 
    * Vanilla JS, TS, Vue, HTML/CSS. DOM Manipulation.
    * Promises and async operations
    * Git!!!! What is a PR? 
    * Search skills? Research/self learning.
    * Interest in Learning
    * How much time before seeking outside help with blocker?
    * Soft Skills / Culture fit.

* Nice to have: 
    * Solid comprehension of `this` context, Scoping, let var const, hoisting? 
    * Backend knowledge (at least comprehension)
    * Devops (package configuration/setup)
    * Sass, preprocessors, css libraries, bootstrap..etc..

## Mid Level

* Important : 
    * Comfortable debugging new code.
    * Clean code structure, good error handling.
    * Architectural comprehension / able to discuss big picture or offer opinions / multiple approaches
    * Comfortable with industry standard vocabulary and can carry a technical conversation.

* Nice to have: 
    * Testing frameworks (Cypress, Jest)

## Senior

* Important: 
    * Deep SaaS platform knowledge (Salesforce, Atlassian, SN) and how they work.
    * Platform Testing knowledge(?)
    * Communication, task management, Experience with SCRUM, agile workflow. 
    * Confident independently making large architecture decisions, planning new features.
    * Interest in pairing / explaining concepts to mid/jr developers

* Nice to have:
    * I don't even know... lol

Methodology:


### Simple Vanilla JS and Dom Maniupulation

## All Applicants:

* Clone the interview repo locally.
* Checkout the correct branch and create a new branch from it locally under their name
* Install dependencies `pnpm i`
* Create an initial commit.
* Spin up interview environment.

## Vanilla JS:

* Live Coding: (Feel free to offer reasonable assistance)
  
    * Starting from a file, make an api call and render a card list of the response. (Only vanilla javascript)
        * Look for clean execution. Good encapsulation, clarity of code, good separation, and graceful error handling.
        * Assess candidates ability to quickly search for answers and gauge research. (Tight google searches, doc referencing, etc...)
         * Stretch goals... ask them to refactor from Promises to async/await or vice versa. Ask them to use Es5 vs es6 syntax (etc...)
* Conversational: 
    * Simple JS Brain teaser involving Scope or a less common js feature.
        * Ask candidate to answer quickly, and explain it is designed to be answered incorrectly
        * If incorrect, ask the candidate to think about why they might be wrong, and ask them to explain their thoughts out loud.
        * Assess their understanding of code execution at runtime, and ability to form a hypothesis / identify possible incorrect assumptions
    * (optional) Discuss what benefits typescript brings to a codebase. What drawbacks?
    * (optional) Discuss CSS Frameworks with the same Pros and Cons type of talk.

## Vue/Vuetify:

* Live Coding: (Feel free to offer reasonable assistance)
    * Explain the local backend will provide all the data they need. Endpoints shouild be documented / partially provided in the client side
    * Open the simple Vue / vuetify app
    * Ask them to build a simple form input with a submit button. The backend will respond randomly with a success or fail. Form should gracefully handle it.
    * Ask them to load a different endpoint and render the contents. This can be on page load or a button.
        * Assess how they tackle a bad HTTP response. How do they debug? Assess comfort with DevTools to explore the code.
    * A piece of provided code should have small intentional bugs. Check if they are able to debug code that they did not write.
    * Stretch goal, ask them to render a cute 404 message when the backend responds with a 404. (Conditional rendering)
    * Stretch goal, refactor monolithic component into multiple smaller components.
    * Ask them to use sass or scss. Maybe ask to use a psuedo selector to change the focus state of a button?
    * Ask them tro reverse the order of the cards using only css
* Conversational: 
    * Simple brain teaser from JR portion if you feel there is time.
    * Ask about position attribute. What do they do? How does position relate to z-index and stacking contexts?


## Vue/Vuetify w/ TS, pinia, vue router

   * Live coding:
     Intent is to have a vue ts app that consumes the Vue/Vuetify app from above. Test should include base code for a page, and use vu-router to navigate to another page displaying the vue.

      * We're looking for comprehension around Vue's setup. Ideas are to change the theme, change build commands, link packages in monorepo,, etc..etc...


