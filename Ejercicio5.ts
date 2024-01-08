let numbers2 = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
for ( let i = 0; i < numbers2.length; i++){
    let number2 = numbers2[i];

    if((number2 % 2 ) === 0){
        console.log(number2 + ' es par');
    }else{
        console.log(number2 + ' es impar');
    }
}