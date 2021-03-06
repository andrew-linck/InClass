const render = function(articleList){
  $('#articles').empty();
  
  for (let i = 0; i < articleList.length; i++){
    $('#articles').append(`<div><h3>${articleList[i].title}</h3><p>${articleList[i].body}</p></div>`);
  }
}

const getArticles = function(){
  $.get('/api/articles')
  .then(function (data){
    console.log(data);
    render(data);
  })
}

getArticles();


const postArticle = function(event){
  event.preventDefault();
  const article = {
    title: $('#article-title').val(),
    body: $('#article-body').val()
  };
  console.log(article);
  $.post('/api/articles', article).then(function(dbArticles){
    console.log(dbArticles);
    getArticles();
  });
  // add your post request here 
  // don't forget to call getArticles after to re-render your articles to the page
}

$('#article-btn').on('click', postArticle);



