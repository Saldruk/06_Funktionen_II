
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

//module: subtraktion a-b | test
output(subtract(2,3));
output(subtract(2,-3));
output(subtract(2,0));
function subtract(a,b) {
    return a - b;    
}



// module : addition a+b | test
// output(add(2,3));
// output(add(2,-3));
// output(add(2,0));
function add(a,b) {
    return a +b;   
}


// module: console ouput | test: 
// output("hello");
// output(2);
function output(outputData) {
    console.log(outputData);
 }
