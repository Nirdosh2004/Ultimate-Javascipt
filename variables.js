var variable1 =  88;
let variable2 = 99;
const variable3 = 55;
let sum = variable1 + variable2;
console.log(sum);
variable1 = "namee";
console.log(variable1)

let Firstname = "mohan"  //valid using first letter 'capital'
console.log(Firstname);

if(true){
          var age = 88;  //it is accessible outside the bracket 
          console.log(age);
}



console.log(age);   //undefined 
var age =99;
console.log(age); //defined



{
          var a = 60;
          var b = false;  //globally accessible 
          let c = "nope"; //cannot accessible outside bracket 
}

console.log(typeof(a));
console.log(typeof(b));


const scope = 77;  //we cannot re-assigned the value of 'scope'
console.log(scope);
// scope = 44;   
console.log(scope);