// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a =2
var b =1
var result = --a - --b + ++b + b--
document.write("a: "+a+"<br>")
document.write("b: "+b+"<br>")
document.write("Result: "+result+"<br>")

// --a => 1
// --b => 0
// --a - --b => 1
// ++b => 1
// --a - --b + ++b => 2
// b-- => 1
// ++b + b-- = 3
