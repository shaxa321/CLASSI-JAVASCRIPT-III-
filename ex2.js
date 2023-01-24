const items = [];
let pageSize = 3;

const elements = [];
myButtons = document.getElementsByTagName("button");
myButton = myButtons[0];
myUl = document.querySelector("ul");
myInput = document.querySelector("input");
myDiv = document.querySelector("#ListeDiv");
mySecondButton = document.querySelector("#secondButton");

class Item {
  constructor(name) {
    this.name = name;
  }
}

class Lista {
  constructor(_pageSize, _items) {
    this.items = _items;
    this.pageSize = _pageSize;
  }
  createList() {
    let k = 0;
    const numeroListe = this.items.length / this.pageSize;
    console.log(this.pageSize);
    console.log(this.items.length);
    console.log(numeroListe);
    for (let i = 0; i < numeroListe; i++) {
      let myUl = document.createElement("ul");
      myDiv.appendChild(myUl);

      for (let j = 0; j < this.pageSize; j++) {
        let myLi = document.createElement("li");
        myLi.innerText = this.items[k].name;
        k = k + 1;
        myUl.appendChild(myLi);
      }
    }
  }
}

const addToUl = function (_item) {
  li = document.createElement("li");
  li.innerText = _item.name;
  myUl.appendChild(li);
};

myButton.onclick = function () {
  console.log("CLicked");
  const oggetto = new Item();
  oggetto.name = myInput.value;
  items.push(oggetto);
  myInput.value = "";
  addToUl(oggetto);
};

lista1 = new Lista(pageSize, items);

mySecondButton.onclick = function () {
  lista1.createList();
};
