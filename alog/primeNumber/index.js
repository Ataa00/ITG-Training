function findPrimeNumber(number){
    if(number == 0 || number == 1){
        return false;
    }

    for(let i = 2; i < number/2; i++){
        if(number % i == 0){
            return false;
        }
    }
    
    return true;
}

console.log(findPrimeNumber(51));