let menuVisible = false;
//fun oculta y muestra el menu 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //fun ocultar despues de seleccionar

    document.getElementById("nav").classList="";
    menuVisible=false;

}



