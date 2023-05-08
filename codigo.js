window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").classList.toggle("loader2");
    }, 1500);
});

function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
    } 
