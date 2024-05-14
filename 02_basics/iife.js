// Immediate Invoked Function Expressions (IIFE)

// named iife
(function temp(){
    console.log(`DB CONNECTED`);
})();  // semi colons are necessary


( (dbName) => {
    console.log(`DB ${dbName} CONNECTED`);
})(2)