let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("react");
        habilidades[1].classList.add("sql");
        habilidades[2].classList.add("men");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("htmlcss");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("customer");
        habilidades[11].classList.add("soporte");
    }
    }



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});