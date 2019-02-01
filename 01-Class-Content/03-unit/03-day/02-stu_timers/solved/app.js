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
  let htmlString = '';

  for( let i = 0; i < friendList.length; i++ ) {
    htmlString += `<p>${friendList[i].name}</p>`
  }

  render(htmlString);
}

setTimeout(getNames, 3000);
