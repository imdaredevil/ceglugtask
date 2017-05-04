
var list = document.createElement('ol');
var info = document.createElement('p');
var html = document.querySelector('html');
info.textContent = 'click beneath to add food . click on existing dish to modify';
document.body.appendChild(info);
document.body.appendChild(list);
html.onclick = function() 
{
  var listItem = document.createElement('li');
  var listContent = prompt('What food from the menu do you would you like to have?1.chappathi2.dosa3.poori4.meals');
  var qty  = document.createElement('form');
  var quantity=prompt('how much?');
  listItem.textContent = listContent;
  qty.textContent='Quantity:'+quantity;
  listItem.appendChild(qty);
  list.appendChild(listItem);
  listItem.onclick = function(e)
 {
    e.stopPropagation();
    var listContent = prompt('Enter new dish ');
    var qty  = document.createElement('form');
    var quantity=prompt('how much?');
    listItem.textContent = listContent;
  qty.textContent='Quantity:'+quantity;
  listItem.appendChild(qty);
  this.appendChild(listItem);
   
   
  }
}
