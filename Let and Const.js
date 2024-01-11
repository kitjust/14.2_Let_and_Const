const PI = 3.14;
PI = 42; // Nope

What is the difference between var and let?
    Vars can be redeclaired.
    The scope of vars is function-level or global if declaired outside of a function where-as the scope of a let is confined to its block.
    Lets and vars are hoisted to the top of their scope, but vars are initiallized as undefined where-as lets are in a temporal dead zone until they are declared.

What is the difference between var and const?
    Vars are mutable. Consts are immutable.
    Consts' scope is limited to the block-level.
    Consts hoisting doesn't initiallize until the actual declaration is reached.

What is the difference between let and const?
    Lets are mutable
    Consts are immutable

What is hoisting?
    Variables are put to the top of the scope they are declared in


var APPLE=1; 
var APPLE=2;
let BANANA=1;
let BANANA=2; // Error
BANANA=3; // Bueno
BANANA=4; // Bueno

function asdf(a, b) {
    console.log(pair)
    if (condition) {
        const orange = 3;
        let apple = 1;
        var pair = 2;
    }
    console.log(orange)
}

// Reassignability var+ let+ const-
// Scope            var is function-level or global      let is block-level or global     const is block-level or global
// Redeclaration    var+    let-    const-
// Hoisting         vars are initiallized as undefined