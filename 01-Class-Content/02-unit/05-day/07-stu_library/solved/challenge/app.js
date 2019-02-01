const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.
const render = function() {

  // Before adding content, make sure our div is empty
  // We do this to make the render function re-usable.
  $('.content').empty();

  for( let i = 0; i < studentList.length; i++ ) {
    $('.content').append(`<p>${studentList[i]}</p>`);
  }
}

render();

// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
const getInputVal = function() {
  const nameVal = $('#name').val();
  studentList.push(nameVal);

  // After performing our actions, clear the name input and re-render the list
  $('#name').val('');
  render();
}

$('#add').on('click', getInputVal);


//3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.
const blueBody = function() {
  const nameVal = $('#name').val();

  // If our studentList includes the input value, add blue class to the body
  if(studentList.includes(nameVal)) {
    $('body').addClass('blue');
  }

  // After performing our actions, clear the name input
  $('#name').val('');
}

$('#search').on('click', blueBody);

//4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.
const removeName = function() {
  const nameVal = $('#name').val();

  // We use the indexOf method to find the index of the input name
  // Then we use splice to remove 1 element, starting with that index
  studentList.splice( studentList.indexOf(nameVal), 1);

  // After performing our actions, clear the name input and re-render the list
  $('#name').val('');
  render();
}

$('#delete').on('click', removeName);


// CHALLENGE

// 5. Add a sort button that sorts the list and re-renders it. 
const sortList = function() {

  // Use the built-in sort method to sort our studentList
  studentList.sort();

  // After performing our actions, clear the name input and re-render the list
  $('#name').val('');
  render();
}

$('#sort').on('click', sortList);

// 6. Add a clear button that clears the page when pressed.
const clearContent = function() {
  $('.content').empty();
}

$('#clear').on('click', clearContent);

// 7. Add a second input field and an update button. 
// On button click, find the user with the name in the `studentList` that matches the value in the first input field 
// Update it to the name in the second input field.
const replaceName = function() {

  // Get values of the input name and new name to replace it with
  const nameVal = $('#name').val();
  const newName = $('#newName').val();

  // Get the index of the name being replaced
  const nameIndex = studentList.indexOf(nameVal);

  // If that name is in our array, replace it with the new name
  if(nameIndex > -1) {
    studentList.splice(nameIndex, 1, newName);
  }

  // After performing our actions, clear the name input and re-render the list
  $('#name').val('');
  $('#newName').val('');
  render();
}

$('#replace').on('click', replaceName);