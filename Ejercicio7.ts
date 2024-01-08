function max(a, b, c){
    if (a > b){
        if (a > c){
            return a;
        }else{
            return c;
        }
    }

    if (b > c){
        if (b > a){
            return b;
        }else{
            return c;
        }
    }
}

let maxValue = max(5, 2, 6);
console.log(maxValue); 
