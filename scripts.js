const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")


function voceclicounobotao(){
    form.style.left="50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility= ("visible")
}

function clicoumascara(){

form.style.left="-300px"
mascara.style.visibility= ("hidden")

}