// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const listaNomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let min = parseInt(prompt('Inserisci un numero compreso fra 0 e 5'));
let max = parseInt(prompt('Inserisci un numero compreso fra 0 e 5'));

function filtroArray(array, minIndex, maxIndex) {
    /*const listaFiltrata = array.filter((element, index) => {
        return minIndex <= index && maxIndex >= index;
    });*/

    const listaFiltrata = [];

    array.forEach((element, index) => {
        if(minIndex <= index && maxIndex >= index) {
            listaFiltrata.push(element);
        }
    });

    return listaFiltrata;
}

const nuovaListaNomi = filtroArray(listaNomi, min, max);

console.log("Lista originale", listaNomi);
console.log("Lista filtrata", nuovaListaNomi);