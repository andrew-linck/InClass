const itWorks = function() {
  alert('It works!');
}

$('.button').on('click', itWorks);

// $('#buttons').on('click', '.button', itWorks);

const createButton = function() {
  $('#buttons').append('<button class="button">Click me!</button>');
}

$('#create-button').on('click', createButton);