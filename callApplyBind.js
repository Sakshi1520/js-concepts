function printName(place, age) {
    console.log("Hello " + this.name + ' From '+ place + ' aged ' + age);
}

const user = {
    name: "Sakshi"
}

Function.prototype.myBind = function(obj, ...args) {
    context = this;
    return function(...args2) {
        context.apply(obj, [...args, ...args2]);
    }
}

Function.prototype.myCall = function(obj, ...args) {
    obj.fn = this;
    return obj.fn(...args);
}

Function.prototype.myApply = function(obj, args) {
    obj.fn = this;
    return obj.fn(...args);
}

Function.prototype.mycall = function(context, ...args) {
    const symbol = Symbol();
    context = Object(context || window);
    context[symbol] = this;
    const result = context[symbol](...args);
    delete context[symbol];
    return result;
}

printName.myBind(user)("Mumbai", 500);
printName.myCall(user, "Mumbai", 500);
printName.myApply(user, ["Mumbai", 500]);
