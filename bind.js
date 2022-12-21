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

printName.myBind(user)("Mumbai", 500);