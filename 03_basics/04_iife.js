// Immediately Invoked Function Expressions (IIFE)

// to prevent with global scope pollution that's why we are using iife

(function chai() {
    // named iife
    console.log(`DB CONNected`);
})(); // we have to use this semicolon otherwise we can't use iife in bottom

// chai(); // after invoked we cant call function

( (name) => {
    console.log(`hello ${name}`);
})("krishna");