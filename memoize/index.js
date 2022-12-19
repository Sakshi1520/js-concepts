function fibo(n) {
    let memo = {};
    let result;

    if(n in memo) {
        return memo[n];
    }
    else {
        if(n == 0 || n==1) {
            result = n;
        }
        else {
            result = fibo(n-1) + fibo(n-2);
        }
        memo[n] = result;
        return result;
    }
}

n=10;
for(let i=0; i<=n; i++) {
    console.log(fibo(i))
}