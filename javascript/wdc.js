function ponerDescripcion(elemento) {
    if (elemento.querySelector("p")) return;

    let ocurrencia = document.createElement("p");
    let nota = "";

    
    switch(elemento.id) {
        case "1":     nota = "16-1-26";  break;
        case "2":    nota = "17-1-26"; break;
        case "3":   nota = "21-1-26";  break;
        case "4":    nota = "1-2-26";  break;
        case "5":    nota = "14-2-26";  break;
        default:         nota = "No spam";
    }

    ocurrencia.textContent = nota;
    elemento.appendChild(ocurrencia);

    
    setTimeout(function() {
        ocurrencia.style.transition = "opacity 0.5s";
        ocurrencia.style.opacity = '0';
        setTimeout(() => {
            ocurrencia.remove(); 
        }, 500); 
    }, 2000);
}

function irAlWDC(elemento){
    switch(elemento.id) {
        case "1":     window.location.href = "wdc/first.html";  break;
        case "2":    window.location.href = "wdc/second.html"; break;
        case "3":   window.location.href = "wdc/third.html";  break;
        case "4":    window.location.href = "wdc/fourth.html";  break;
        case "5":    window.location.href = "wdc/fifth.html";  break;
        default:         window.location.href = "index1.html";
    }
}