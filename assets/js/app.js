document.getElementById("firstform").style.visibility='hidden'; 

document.getElementById("container").onclick= function() {disappear()};
document.getElementById("container").onclick= function() {appearAddList()};


function disappear (){
  document.getElementById("container").style.visibility='hidden';
}
function appearAddList(){
  document.getElementById("firstform").style.visibility='visible';
  document.getElementById("container").style.visibility="hidden";
}

document.getElementById("addlist").addEventListener("click", hideAddList);
function hideAddList () {
  document.getElementById("firstform").style.visibility="hidden";
}



document.getElementById("savebtn").addEventListener("click", newDiv);
function newDiv () {
      var contenedorLista = document.createElement("div");
      contenedorLista.classList.add("newd");
      contenedorLista.setAttribute("id", "newdid");
      var currentDiv = document.getElementById("newl"); 
  document.body.insertBefore(contenedorLista,currentDiv);
  var listname = document.getElementById("realaddlist").value;

}


  document.getElementById("savebtn").addEventListener("click", stopDefAction);
    function stopDefAction(evt) {
      evt.preventDefault();

}


 document.getElementById("savebtn").addEventListener("click", disFF);
      function disFF (){
      document.getElementById("firstform").style.display = "none";

}
document.getElementById("savebtn").addEventListener("click", namel);
function namel (){
  var textcont = document.createElement("div");
     textcont.classList.add("listname");
 

}


document.getElementById("savebtn").addEventListener("click", linen);
function linen () {
    
var cdiv = document.getElementById("newl"); 
  
var containerNameList = document.createElement("div");
containerNameList.classList.add("namel");
containerNameList.setAttribute("id", "namell");
containerNameList.innerHTML = document.getElementById("realaddlist").value;

document.body.appendChild(containerNameList);


var addCard = document.createElement("p");
addCard.setAttribute("id", "txtadd");
var t = document.createTextNode("Añadir una tarjeta...");
addCard.appendChild(t);
document.getElementById("namell").appendChild(addCard);

document.getElementById("txtadd").addEventListener("click", tarea);

}

function tarea () {

 var contenedorLista2 = document.createElement("div");
      contenedorLista2.classList.add("newd2");
      contenedorLista2.setAttribute("id", "newdid2");
      var currentDiv = document.getElementById("newl"); 
  document.body.insertBefore(contenedorLista2,currentDiv);

 document.getElementById("newdid").style.visibility="hidden";
  document.getElementById("txtadd").style.visibility="hidden";


var textAreaListN = document.createElement("textarea");
textAreaListN.classList.add("ltxt");
 document.body.insertBefore(contenedorLista2,currentDiv);


   var buttonAdd = document.createElement("button");
      buttonAdd.classList.add("btnAdd");
      buttonAdd.setAttribute("id", "btnAdd")
      var btntxt= document.createTextNode("Añadir");
 buttonAdd.appendChild(btntxt);
       var currentDv = document.getElementById("newl"); 
   document.getElementById("namell").appendChild(buttonAdd);

   document.getElementById("namell").appendChild(textAreaListN);
}


