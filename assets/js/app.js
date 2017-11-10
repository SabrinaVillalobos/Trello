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
    }


  document.getElementById("savebtn").addEventListener("click", stopDefAction);
    function stopDefAction(evt) {
      evt.preventDefault();
        document.getElementById("firstform").style.visibility="hidden";

}


/*
document.getElementById("savebtn").addEventListener("submit", disFF);
function disFF (){
  document.getElementById("firstform").style.visibility="hidden";
}*/






