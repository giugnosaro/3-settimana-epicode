
const generaTabellone = function () {
    // funzione che crea il tabellone
    const tabella = document.getElementById('tabellone');
    for (let i = 1; i < 91; i++) {
        const cella = document.createElement('div');
        cella.classList.add('cella'); 
         cella.innerHTML = i; 
         tabella.appendChild(cella);
         document.getElementById("bottone").addEventListener("click", function(){
             const numeroCasuale= Math.floor(Math.random() * 90);
             document.getElementById('numeroTombola').textContent = numeroCasuale;
        
            });
    }  
}



generaTabellone();



