function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true; 
}
function primNums(n, m) {
    let pNums=[];
    for (let i = n+1; i <= m; i++) {
        if (isPrime(i)) {
           pNums.push(i);
        }
    }
    return pNums;
}
const r=primNums(7,20);
console.log(r);
