function ponerPuntuacion(elemento) {
    // 1. Evitamos duplicados: si ya hay una puntuación, no añadimos otra
    if (elemento.querySelector("p")) return;

    let puntuacion = document.createElement("p");
    let nota = "";

    // 2. Usamos el ID del elemento que recibimos por parámetro
    switch(elemento.id) {
        case "Javi":     nota = "6/10";  break;
        case "Sofia":    nota = "10/10"; break;
        case "Miguel":   nota = "8/10";  break;
        case "Jorge":    nota = "4/10";  break;
        case "Pablo":    nota = "8/10";  break;
        case "Martinez": nota = "2/10";  break;
        default:         nota = "0/10";
    }

    puntuacion.textContent = nota;
    elemento.appendChild(puntuacion);

    // 3. Animación y borrado
    setTimeout(function() {
        puntuacion.style.transition = "opacity 0.5s"; // Asegúrate de que tenga transición
        puntuacion.style.opacity = '0';
        setTimeout(() => {
            puntuacion.remove(); 
        }, 500); 
    }, 2000); // 5 segundos es mucho tiempo, lo bajé a 2s para probar
}

function irAlMVP(elemento){
    switch(elemento.id) {
        case "Javi":     window.location.href = "mvps/Javier.html";  break;
        case "Sofia":    window.location.href = "mvps/Sofia.html"; break;
        case "Miguel":   window.location.href = "mvps/Miguel.html";  break;
        case "Jorge":    window.location.href = "mvps/Jorge.html";  break;
        case "Pablo":    window.location.href = "mvps/Pablo.html";  break;
        case "Martinez": window.location.href = "mvps/Martinez.html";  break;
        default:         window.location.href = "index1.html";
    }
}