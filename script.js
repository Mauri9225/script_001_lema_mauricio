console.log("Hola Mundo soy Mauricio")
var a = 1
var b = 2
var c = 1+2
console.log("el resultado es: ", c)

function addClass(containerDiv, className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)

}

function createMatrix(dimension, container, divisorfizz, divisorBuzz){
    let counter = 1

    for(let i = 0;i < dimension; i++){
        const div = document.createElement("div")
        addClass(div, "demo")
        for(let j= 0;j< dimension; j++){
            const content = document.createElement("div")
            addClass(content, "content")
            fizz(divisorfizz, content, counter)
            buzz(divisorBuzz, content, counter)
            content.textContent = counter
            div.appendChild(content)
            counter++
        }
        container.appendChild(div)
    }
}

function fizz(divisor, square, number){
    if (number%divisor == 0){
        addClass(square, "fizz")
    } 
}

function buzz(divisor2, cube,  number){
    if (number%divisor2 == 0){
        addClass(cube, "buzz")
    }
}


document.addEventListener("DOMContentLoaded", function(){
    console.log("Ya se cargo este DOM")
    const container = document.querySelector(".container")
    createMatrix(5, container, 2, 3 )
})