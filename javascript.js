function isPrime(n) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
function display(n) {
    let result="";
    let count=0;
    let i=2;
    while (count<n){
        if (isPrime(i)){
            result=result+i+".";
            count++;
        }
        i++;
    }
    return result;
}
document.write(display(10000));



