//1 - creare array lista della spesa
const listaSpesa = ['Pane', 'Latte','Uova','Panettone','Pandoro','Torrone','Vino','Prosecco']
// mi collego all'elemto html 
const contSpesa = document.getElementById('lista');

for (i=0; i<listaSpesa.length; i++){
    // creo variabile contatore dei vari item della spesa 
    let item = listaSpesa[i];
    // creo gli li 
    let listItem = document.createElement('li')
    // inserisco all'interno degli li gli item 
    listItem.innerHTML = `${item}`
    // inserisco gli li nell'html 
    contSpesa.append(listItem)
}