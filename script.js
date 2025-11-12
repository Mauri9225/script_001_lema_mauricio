console.log("Hola Mundo soy Mauricio")
var a = 1
var b = 2
var c = 1 + 2
console.log("el resultado es: ", c)

function addClass(containerDiv, className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)

}

function createMatrix(dimension, container, divisorfizz, divisorBuzz){
    let counter = 1
    container.innerHTML = "";

    for(let i = 0;i < dimension; i++){
        const div = document.createElement("div")
        addClass(div, "demo")
        for(let j= 0;j< dimension; j++){
            const content = document.createElement("div")
            addClass(content, "content")
            
            fizz(divisorfizz, content, counter)
            buzz(divisorBuzz, content, counter)
            fizzbuzz(divisorfizz, divisorBuzz, content, counter)
            
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

function fizzbuzz(divisor, divisor2, square_cube, number){
    if (number%divisor == 0 && number%divisor2 == 0){
        addClass(square_cube, "fizzbuzz")
    }
}


function buttonClicked(){
    console.log("Me hicieron click")
    const dimensionInput = document.getElementById("dimension")
    const fizzInput = document.getElementById("fizz-divisor")
    const buzzInput = document.getElementById("buzz-divisor")

    const dimensionValue = parseInt(dimensionInput.value)
    const fizzValue = parseInt(fizzInput.value)
    const buzzValue = parseInt(buzzInput.value)

    console.log(`El valor de dimension es: ${dimensionValue}`)
    console.log(`El valor de fizz es: ${fizzValue}`)
    console.log(`El valor de buzz es: ${buzzValue}`)

    const matrixContainer= document.getElementById("matrixContainer");
    createMatrix(dimensionValue, matrixContainer, fizzValue, buzzValue);
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("Ya se cargo este DOM")
    

    const btnGenerate= document.getElementById("generate")
    btnGenerate.addEventListener("click", buttonClicked)
})

