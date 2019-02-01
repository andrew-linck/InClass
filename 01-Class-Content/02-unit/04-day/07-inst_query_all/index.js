document.querySelector('#content').textContent = 'hey';

const exampleList = document.querySelectorAll('.example');
console.dir(exampleList);

for (let i = 0; i < exampleList.length; i++){
    exampleList[i].innerText = 'All';
}