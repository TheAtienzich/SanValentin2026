const msg1 = "QUE LE PONGO?";
const msg2 = "CONFIA TU PONLE 'CON NIÑO O SIN NIÑO'";

const el1 = document.getElementById('text1');
const el2 = document.getElementById('text2');
const cur1 = document.getElementById('cursor1');
const cur2 = document.getElementById('cursor2');

function typeEffect(element, cursor, text, callback) {
    let i = 0;
    cursor.style.display = "inline-block";
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            cursor.style.display = "none";
            if (callback) callback();
        }
    }, 50);
}

window.onload = () => {
    setTimeout(() => {
        typeEffect(el1, cur1, msg1, () => {
            setTimeout(() => {
                cur2.style.backgroundColor = "#e10600"; // Color del cursor de respuesta
                typeEffect(el2, cur2, msg2);
            }, 800);
        });
    }, 500);
};