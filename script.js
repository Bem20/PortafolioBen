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
        //conocimiento
        habilidades[0].classList.add("csharp");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("dotnet");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("java");
        //habilidades sociales
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("resiliencia");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("tiempo");
    }
}

//Funcion para descargar el cv con el titulo
function descargarPDF() {
    // Reemplaza 'ruta/al/archivo.pdf' con la ruta real de tu archivo PDF
    var pdfUrl = '../docs/Cv_y_Titulo.pdf';
    
    // Crea un elemento <a> temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Cv_y_Titulo.pdf'; // Puedes cambiar el nombre del archivo aquí
    
    // Agrega el elemento al DOM y simula un clic
    document.body.appendChild(link);
    link.click();
    
    // Elimina el elemento del DOM después de la simulación del clic
    document.body.removeChild(link);
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 