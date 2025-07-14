// Immediately Invoked Function Expressions (IIFE)


(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('lovely')