const $ = function () {
  const nodeList = document.querySelectorAll('.content');

  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  }
  
  const html = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }

  const on = 'guys';

  return {
    text: text,
    html: html,
    on: on
  };
}