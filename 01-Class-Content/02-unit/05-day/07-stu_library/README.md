# Using the Library Activity

## Instructions

For this activity you are building a class roster application. Like any class roster, you will need to be able to add, delete, and view all of the students. 

Using the new DOM Manipulation library, do all of the following: 

1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.

2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 

3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.

4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.

### Hint

You'll want to use the `splice()` method to remove an element from an array.

## Challenge:

5. Add a sort button that sorts the list and re-renders it. 

6. Add a clear button that clears the page when pressed.

7. Add a second input field and an update button. On button click, find the user with the name in the `studentList` that matches the value in the first input field and update it to the name in the second input field. **Hint:** `splice()` can be used to replace a value in an array as well as remove one.
