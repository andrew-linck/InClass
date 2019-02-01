(function() {
	$('#about').hide();
})();

const showAbout = function (){
	$('#homepage').hide();
	$('#about').show();
};

$('#about-us').on('click', showAbout);