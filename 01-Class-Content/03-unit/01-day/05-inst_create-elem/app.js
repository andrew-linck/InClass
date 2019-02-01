
$('#empty-div').html('<h1>Hello friends!</h1>');
// jQuery alternative to: var newDiv = document.createElement('div');
const newDiv = $('<div>');
// jQuery alternative to: newDiv.textContent = 'A pleasure to meet you!';
newDiv.text('A pleasure to meet you!');
// jQuery alternative to: document.querySelector('#empty-div').appendChild(newDiv);
$('#empty-div').append(newDiv);
// If we need to apply some CSS, we can quickly do so, using the jQuery '.attr' method.
newDiv.attr('class', 'fancy');