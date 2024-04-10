window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}
const handleSubmit = function (e) {
    // invoca la funzione che genera la lista con il nuovo
    // invoca la funzione che cambia la classe (aggiunge sbarrato)
    // invoca la funzione che elimina il task
}

document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById("tasto")
    let bottone = document.getElementById("mostraTesto");
    let testo = document.getElementById("testo");
    let lista = document.getElementById("inserireLista");
    lista.createElement("li");


    bottone.addEventListener("click", function () {
        testo.innerHTML =   input.value
    });

})

function ins () {
    
}



// una funzione che genera la lista con il nuovo task
//      agganciarsi nell'html
//      utilizzare template literals per stampare direttamente anche dell'html
//      inputField.value
//      font-awesome -> <i class="far fa-trash-alt"></i>

// una funzione che cambia la classe (aggiunge sbarrato)
//      agganciarsi nell'html
//      for 
//      classList.toggle -> text-decoration:line.through (css)

// una funzione che elimina il task
//      agganciarsi nell'html
//      for
//      remove

