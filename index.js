const str = document.querySelector("p").innerHTML;
const input = document.querySelector("input");
const list = document.getElementById('list');
let arr = str.split("\n");

const root = new makeNode('\0');

for(const item of arr ){
  //add item into dictionary
    add(item, 0, root);
}

function handler(e){
  const stri = e.target.value;
  if(stri !== ""){
  const predictions = search(stri, 0, root);
  list.innerHTML = "";
  for(const prediction of predictions){
    list.innerHTML += `<li class="list-group-item" onclick="handeClick(this)"><b>${stri}</b>${prediction.substring(stri.length)}</li>`
  }
  }else{
    list.innerHTML = "";
  }
}

function handeClick(e){
    const text = e.innerHTML.split("<b>").join("").split("</b>").join("");
    input.value = text;
}

input.addEventListener("keyup", handler);


