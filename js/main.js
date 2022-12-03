//1 - creare array lista della spesa
const listaSpesa = ['Pane', 'Latte','Uova','Panettone','Pandoro','Torrone','Vino','Prosecco']
// mi collego all'elemto html 
const contSpesa = document.getElementById('lista');

let i = 0;
while ( i<listaSpesa.length){
    // creo variabile contatore dei vari item della spesa 
    let item = listaSpesa[i];
    // creo gli li 
    let listItem = document.createElement('li')
    // inserisco all'interno degli li gli item 
    listItem.innerHTML = `${item}`
    // inserisco gli li nell'html 
    contSpesa.append(listItem)
    // aumento valore di i di 1 e faccio ripartire una nuova iterzazione 
    i++
}