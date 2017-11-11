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

  
/*var textAreaListN = document.createElement("textarea");
textAreaListN.classList.add("ltxt");

document.body.appendChild(textAreaListN);*/


var addCard = document.createElement("p");
addCard.classList.add("txtadd");
var t = document.createTextNode("Añadir una tarjeta...")
addCard.appendChild(t);
document.getElementById("namell").appendChild(addCard)

/*
addCard.classList.add("addAcard");


var t = document.createTextNode("Añadir una tarjeta...");
 addCard.appendChild(t);*/


}


/*
document.getElementById("savebtn").addEventListener("click", lnText);
function lnText () {
    
var lText = document.getElementById("newl"); 
  
var textAreaListN = document.createElement("textarea");
textAreaListN.classList.add("ltxt");

document.body.appendChild(textAreaListN);
}*/