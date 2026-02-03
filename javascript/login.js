function enseñarPista1(){
    const contenedor = document.querySelector("main");
    let pista1 = document.createElement("p");
    pista1.classList.add("Fallo");
    pista1.textContent = "Nombre el cual no te llamaria, y que te molesta";
    contenedor.appendChild(pista1);

    setTimeout(function() {
        pista1.style.opacity = '0';
        setTimeout(() => {
            pista1.remove(); 
        }, 500); 
    }, 5000);
}

function enseñarPista2(){
    const contenedor = document.querySelector("main");
    let pista2 = document.createElement("p");
    pista2.classList.add("Fallo");
    pista2.textContent = "El mote que te puse, abuela";
    contenedor.appendChild(pista2);

    setTimeout(function() {
        pista2.style.opacity = '0';
        setTimeout(() => {
            pista2.remove(); 
            }, 500); 
    }, 5000);
}

function comprobar(){
    const contenedor = document.querySelector("main");

    let user = document.getElementById("login").value;
    let pass = document.getElementById("password").value;
    if(user != "Yizé" || pass != "yaya"){
        let credIncorrectas = document.createElement("p");
        credIncorrectas.classList.add("Fallo");
        credIncorrectas.textContent = "Credenciales Incorrectas, haz memoria yaya";
        contenedor.appendChild(credIncorrectas);

        setTimeout(function() {
            credIncorrectas.style.opacity = '0';
            setTimeout(() => {
                credIncorrectas.remove(); 
            }, 500); 
        }, 5000);
    }
    else{
        window.location.href = "index1.html"
    }
}
