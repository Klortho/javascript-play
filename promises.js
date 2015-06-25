var myResolver;
var myRejector;
var executor = function(resolve, reject) {
    myResolver = resolve;
    myRejector = reject;
};

var p = new Promise(executor);
p.then(function(value){
    console.info("Got " + value);
});