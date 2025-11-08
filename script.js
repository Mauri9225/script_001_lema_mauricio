console.log("Hola Mundo soy Mauricio")
var a = 1
var b = 2
var c = 1+2
console.log("el resultado es: ", c)

function addClass(containerDiv, className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)

}

document.addEventListener("DOMContentLoaded", function(){
    console.log("Ya se cargo este DOM")
    const containerDiv = document.querySelectorAll(".content") 
    console.log(containerDiv)
    for(i=0; i <containerDiv.length; i++){
        addClass(containerDiv[i],"mauri")
    }
    
})