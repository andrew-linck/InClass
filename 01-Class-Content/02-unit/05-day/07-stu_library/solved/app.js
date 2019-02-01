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
  studentList.splice(studentList.indexOf(nameVal), 1);

  // After performing our actions, clear the name input and re-render the list
  $('#name').val('');
  render();
}

$('#delete').on('click', removeName);
