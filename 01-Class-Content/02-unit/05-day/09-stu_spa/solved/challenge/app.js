(function() {
  $('#about').hide();
  $('#contact').hide();
})();

const showHome = function (){
  $('section').hide();
  $('#homepage').show();
}

const showAbout = function (){
	$('section').hide();
	$('#about').show();
};

const showContact = function(){
  $('section').hide();
  $('#contact').show();
}

$('#home').on('click', showHome);
$('#about-us').on('click', showAbout);
$('#contact-us').on('click', showContact);
