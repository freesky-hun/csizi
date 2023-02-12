var i = 0;
var txt = "Ön megálmodja, én megvalósítom!";
            
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();
var k = 0;      

function myLoop() {
  setTimeout(function() {

    document.getElementById("text").innerHTML = "";
    i = 0;

    typeWriter();

    if (k < 1) {
      myLoop();
    }
    
  }, 5000)
}

myLoop();