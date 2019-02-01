# DOM Manipulation Library

## Instructions

DOM Manipulation is incredibly common, so we'll spend the next couple exercises building a DOM manipulation library with lots of easy to remember functions. We'll start by refactoring the last activity we saw to have a `text` function.

In `dom.js` note that we've added some code to get the NodeList of every element with the class `content`. 

Refactor the `text` variable in `dom.js` to be a function that sets the text on every element in the nodeList.

1. The function should take in 1 parameter - a string that represents the text you want on the page. 

3. The `text` function should loop through every item in the nodeList and reset the `innerText` property to the new text.

4. When the text is appearing properly on the page, look at `app.js` to see how it's being called. Note that we have to call the `$()` first to get the return object and then call the `text` function on the returned object to run the `text` function. 
