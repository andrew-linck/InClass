const friendList = [
  {
    name: 'Sally',
    status: 'online'
  },
  {
    name: 'Jim',
    status: 'online'
  },
  {
    name: 'Mina',
    status: 'offline'
  },
  {
    name: 'Matt',
    status: 'online'
  },
  {
    name: 'Netreia',
    status: 'offline'
  }
]

const render = function(htmlStr){
  $('#content').html(htmlStr);
}

const getNames = function(){
  //write code to get the names off the friendList and add them as a paragraph to a string
}

setTimeout(getNames, 3000);
