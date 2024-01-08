 function heroesThatStartsWith( nameList, letter ) {
   
    letter = letter.toUpperCase();
    let newNameList = [];


    for( let name of nameList ) {
        if ( name.startsWith(letter) ) {
            newNameList.push( name );
        }
    }

    return newNameList;
}





let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'D' );
console.log( herosWithLetterS ); // She Hulk, Spiderman