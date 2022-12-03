//1 - creare array lista della spesa
const listaSpesa = ['Pane', 'Latte','Uova','Panettone','Pandoro','Torrone','Vino','Prosecco']
// mi collego all'elemto html 
const contSpesa = document.getElementById('lista');
// creo variabile con contenuto della lista (li )  
let element = "";
// ciclo for 
for (i=0; i<listaSpesa.length; i++){
    // creo variabile contatore dei vari item della spesa 
    let item = listaSpesa[i];
    console.log(item);
    // creo nella variabile degli li gli li stessi con struttura html e inserisco al loro interno la variabile item 
    element += `<li class="list-item">${item}</li>`;
    // inserisco l'elemento nell'html 
    contSpesa.innerHTML =element;
}