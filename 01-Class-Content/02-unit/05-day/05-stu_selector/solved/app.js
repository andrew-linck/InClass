$('.content').html('<p>text added!!!</p>');

$('.top').html('<p>Look at this!</p>');

$('.content').addClass('pretty');

$('.content').removeClass('ugly');

$('.top').toggleClass('brave');

$('.top').empty();

$('.content').append('I appended some content!');

$('.top').prepend('I prepended some content!');

$('.top').val(4);

const topVal = $('.top').val();

console.log('.top value is', topVal);

const sayHello = function() {
  console.log('Hello from the click listener!')
}

$('.content').on('click', sayHello);
