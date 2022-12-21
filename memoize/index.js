const fibo = (function () {
    let memo = {};

    function f(n) {
        let result;

        if(n in memo) {
            return memo[n];
        }
        else {
            if(n == 0 || n==1) {
                result = n;
            }
            else {
                result = f(n-1) + f(n-2);
                memo[n] = result;
            }
            console.log(memo);
            return result;
        }
    }
    return f;
})();

n=10;
for(let i=0; i<=n; i++) {
    console.log(fibo(i))
}