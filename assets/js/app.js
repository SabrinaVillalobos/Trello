  /*var addlist = document.getElementById("addlist");
  var form =document.getElementById("form");

window.addEventListener("load", func);

  

   /* addlist.addEventListener("click", pageload);

    var addList = document.getElementById("container");
    if (addList.style.display === "none"){
      addList.style.display = "block";
    }else{
      addList.style.display="none";
    }
  }*/


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




