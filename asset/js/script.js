var container = document.getElementById("c1");

container.innerText = "¡Hola mundo!";
container.style.backgroundColor = "#000000";
container.style.color = "#1cb723";
container.style.width = "200px";
container.style.height = "200px";
container.innerHTML = "<input type=text placeholder = 'escriba su texto'>";

var containers = document.querySelectorAll("div.c2");

containers.forEach(element =>{
    element.style.backgroundColor = "#009999"
});
containers.innerHTML= "<input type='text' placeholder='Escriba su texto'>"

let boton = document.getElementById("btn-click");
boton.onclick = function(evt)
{
    alert("Hola mundo");
}

let btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt)
{
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}