document.getElementById("firstform").style.visibility = 'hidden'; //escondo el primer contenedor

document.getElementById("container").onclick = function() {
    disappear()//llama la función que esconde el primer contenedor
};
document.getElementById("container").onclick = function() {
    appearAddList()//llama la función que muestra el primer contenedor
};


function disappear() {//función que esconde el primer contenedor
    document.getElementById("container").style.visibility = 'hidden';
}

function appearAddList() {//función que muestra el formulario "Añadir una lista"
    document.getElementById("firstform").style.visibility = 'visible';
    document.getElementById("container").style.visibility = "hidden";//esconde el primer contenedor
}

document.getElementById("addlist").addEventListener("click", hideAddList);

function hideAddList() {
    document.getElementById("firstform").style.visibility = "hidden";//esconde el formulario
}



document.getElementById("savebtn").addEventListener("click", newDiv);

function newDiv() {
    var contenedorLista = document.createElement("div");//nuevo div contenedor
    contenedorLista.classList.add("newd");//agregando clase a contenedor
    contenedorLista.setAttribute("id", "newdid");//añadiendo atributo a contenedor
    var currentDiv = document.getElementById("newl");
    document.body.insertBefore(contenedorLista, currentDiv);
    var listname = document.getElementById("realaddlist").value;//tomando valor del textarea

}


document.getElementById("savebtn").addEventListener("click", stopDefAction);

function stopDefAction(evt) {
    evt.preventDefault();//que no se resetee la pagina al enviar el input

}


document.getElementById("savebtn").addEventListener("click", disFF);

function disFF() {
    document.getElementById("firstform").style.display = "none";//desaparece el primer textarea

}
document.getElementById("savebtn").addEventListener("click", namel);

function namel() {
    var textcont = document.createElement("div");
    textcont.classList.add("listname");


}


document.getElementById("savebtn").addEventListener("click", linen);

function linen() { //función que guarda el texto del input y lo muestra en una tarjeta

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

function tarea() {//crea un nuevo contenedor, esconde el anterior

    var contenedorLista2 = document.createElement("div");
    contenedorLista2.classList.add("newd2");
    contenedorLista2.setAttribute("id", "newdid2");
    var currentDiv = document.getElementById("newl");
    document.body.insertBefore(contenedorLista2, currentDiv);

    document.getElementById("newdid").style.visibility = "hidden";
    document.getElementById("txtadd").style.visibility = "hidden";


    var textAreaListN = document.createElement("textarea");
    textAreaListN.classList.add("ltxt");
    textAreaListN.setAttribute("id", "focid");
    document.body.insertBefore(contenedorLista2, currentDiv);


    var buttonAdd = document.createElement("button");
    buttonAdd.classList.add("btnAdd");
    buttonAdd.setAttribute("id", "btnAdd")
    var btntxt = document.createTextNode("Añadir");
    buttonAdd.appendChild(btntxt);
    var currentDv = document.getElementById("newl");
    document.getElementById("namell").appendChild(buttonAdd);

    document.getElementById("namell").appendChild(textAreaListN);

    document.getElementById("focid").addEventListener("focus", focF);


    document.getElementById("btnAdd").addEventListener("click", newCard);
}

function focF() {
    document.getElementById("focid").style.backgroundColor = "#BFBFBF"
}

function newCard() {//función que crea un nuevo contenedor con txt area, botón y esconde el contenedor anterior
    var newTxt = document.createElement("div");
    newTxt.setAttribute("id", "newTxt");
    var newTxtCont = document.getElementById("newl");
    document.body.insertBefore(newTxt, newTxtCont);
    newTxt.innerHTML = document.getElementById("focid").value;
    document.getElementById("newdid2").style.display = "none";
    document.getElementById("focid").style.display = "none";
    document.getElementById("btnAdd").style.display = "none";


    var contN = document.createElement("div");
    contN.setAttribute("id", "contN");
    document.getElementById("newTxt").appendChild(contN);

    var textAreaListN2 = document.createElement("textarea");
    textAreaListN2.classList.add("ltxt2");
    textAreaListN2.setAttribute("id", "focid2");
    document.getElementById("contN").appendChild(textAreaListN2);

    var buttonAdd2 = document.createElement("button");
    buttonAdd2.classList.add("btnAdd2");
    buttonAdd2.setAttribute("id", "btnAdd2")
    var btntxt2 = document.createTextNode("Añadir");
    buttonAdd2.appendChild(btntxt2);
    document.getElementById("contN").appendChild(buttonAdd2);


    document.getElementById("btnAdd2").addEventListener("click", ListA);
      document.getElementById("focid2").addEventListener("focus", focF2);


}

function ListA (){ //función que crea otro contenedor con txt area y botón
 var newTxt2 = document.createElement("div");
    newTxt2.setAttribute("id", "newTxt2");
    var newTxtCont2 = document.getElementById("newl");
    document.body.insertBefore(newTxt2, newTxtCont2);
    newTxt2.innerHTML = document.getElementById("focid2").value;
        document.getElementById("contN").appendChild(newTxt2);
        document.getElementById("focid2").value = "";
        
}

function focF2() {
    document.getElementById("focid2").style.backgroundColor = "#BFBFBF"
}