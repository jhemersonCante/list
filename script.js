const shoppingList = ['Arroz', 'Feijão','Carne', 'Massa', 'Biscoito', 'Pão', 'Leite', 'Açucar'] (1)

const listEl = document.getElementById('list'); (2)
const searchField = document.getElementById('searchFieldd'); (3)

searchField.addEventListener('input', inputHandler); (4)

this.FileList(); (1)

function FileList(list =  shoppingList){
listEl.innerHTML="";
for(let i=0; i<list.length;; i++) {
let listItems= document.createElement("li");
listItems.innerHTML = list[i];
listEl.appendChild(listItems);
  }
}

