function receivesAFunction(callback) {
   callback();

}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Horrey")
    }
   
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("the anonymous")
    }
}