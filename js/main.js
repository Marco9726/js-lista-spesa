//1 - creare array lista della spesa
const listaSpesa = ['Pane', 'Latte','Uova','Panettone','Pandoro','Torrone','Vino','Prosecco']
// mi collego all'elemto html 
const contSpesa = document.getElementById('lista');
// creo contatore 
let i = 0;
let check = `<input type="checkbox" name="check">`;
while ( i<listaSpesa.length){
    // creo variabile contatore dei vari item della spesa 
    let item = listaSpesa[i];
    // creo gli li 
    let listItem = document.createElement('li')
    // inserisco all'interno degli li gli item  
    listItem.innerHTML = `${item}` + check
    // inserisco gli li nell'html 
    contSpesa.append(listItem)
    // aumento valore di i di 1 e faccio ripartire una nuova iterzazione 
    i++
}


// PERCHè GLI INPUT NON SONO INTERAGIBILI?? 