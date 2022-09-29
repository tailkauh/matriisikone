/**
 * Tulostaa konsoliin kaksi satunnaista
 * matriisia A ja B, joiden tyyppi on sellainen
 * että, niistä voidaan muodostaa
 * tulomatriisi AB.
 */
function tulostaSatunnaisetMatriisit() {
    
    const m = jokuKokonaisluku(3)+1;
    const n = jokuKokonaisluku(3)+1;
    const p = jokuKokonaisluku(3)+1;
    
    let str = "";

    for (let i = 0; i < m; i++) {
	str += "| "
        for (let j = 0; j < n; j++) {
		str += jokuKokonaisluku(10) + " ";
	}
	str += "|\n";
    }
    str += "\n";
   
    for (let i = 0; i < n; i++) {
        str += "| ";
	for (let j = 0; j < p; j++) {
            str += jokuKokonaisluku(10) + " ";
	}
	str += "|\n";
    }
    console.log(str);
}


/**
 * Palauttaa satunnaisen kokonaisluvun 0 ja max väliltä.
 * Nolla sisältyy välille, max ei.
 */ 
function jokuKokonaisluku(max) {
    return Math.floor(Math.random() * max);
}
