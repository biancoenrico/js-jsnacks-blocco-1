// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
//peso e lunghezza. Calcola la somma del peso di tutte le zucchine.
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.


var arrayZucchine =[
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    },
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
    {
        'peso': 0,
        'grandezza': 0
    }, 
]

var zucchinePiccole = [];
var zucchineGrandi = [];

for(i = 0; i < arrayZucchine.length; i++){

    var thisZucchina = arrayZucchine[i];

    thisZucchina.peso = random(1,15);
    thisZucchina.grandezza = random(5,25);

    if(thisZucchina.grandezza < 15){
        zucchinePiccole.push(thisZucchina);
    }else{
        zucchineGrandi.push(thisZucchina);
    }
}

var somma1 = 0;
for(i = 0; i < zucchinePiccole.length; i++){
    var thisZucchinaPiccola = zucchinePiccole[i];
    somma1 += thisZucchinaPiccola.peso;
}

var somma2 = 0;
for(i = 0; i < zucchineGrandi.length; i++){
    var thisZucchinaGrande = zucchineGrandi[i];
    somma2 += thisZucchinaGrande.peso;
}

$('.result.piccole').text('peso totale zucchine piccole = ' + somma1)
$('.result.grandi').text('peso totale zucchine grandi = ' + somma2)
$('.result.tot').text('peso totale zucchine = ' + (somma1 + somma2))


// // ---------------------------------------------
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
