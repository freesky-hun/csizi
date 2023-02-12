var i = 0;
var txt = "Ön megálmodja, én megvalósítom!";
var speed = 100;
            
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();