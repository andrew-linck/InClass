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

const postArticle = function(event){
  event.preventDefault();

  // Save the input in an object called 'article'
  const article = {
    title: $('#article-title').val().trim(),
    body: $('#article-body').val().trim(),
    AuthorId: $('#article-author').val()
  }

  // POST the article object to /api/articles
  $.post('/api/articles', article)
    .then(function(data) {
      
      // After receiving a response, call getArticles
      getArticles();

      // Blank our inputs after POST
      $('#article-title').val('');
      $('#article-body').val('');
    });

}

const getAuthors = function() {

  // Make a GET request to /api/authors
  $.get('/api/authors')
    .then(function(data) {

      // Append an option with the author id as the value and the name as the text
      for( let i = 0; i < data.length; i++ ) {
        $('.authors').append(`<option value='${data[i].id}'>${data[i].name}</option>`)
      }
    })
}

const getArticlesByAuthor = function(event) {
  event.preventDefault();

  // Get authorId from the filter-author dropdown
  const authorId = $('#filter-author').val();

  // Make a GET request to /api/authors/:id with authorId
  $.get(`/api/authors/${authorId}`)
    .then(function (data){
      console.log(data);
      
      // Pass data.Articles to the render function. This is all the articles by the selected Author
      render(data.Articles);
    })
}

getArticles();

getAuthors();

$('#article-btn').on('click', postArticle);
$('#filter-btn').on('click', getArticlesByAuthor);