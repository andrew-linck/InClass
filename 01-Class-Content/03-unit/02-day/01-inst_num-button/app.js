let num;

const setNum = function(e){
  e.preventDefault();
  num = $(this).val();
  render();
}

const render = function(){
  $('.num').text(num);
}

$('.btn').on('click', setNum);