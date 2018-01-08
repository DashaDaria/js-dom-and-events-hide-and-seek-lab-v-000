function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML)+ n;
  }
}
