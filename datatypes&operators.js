// numbers

let num = 3.14;
let num2 = 4.55;
let sum  = num + num2;
console.log(sum);
console.log(typeof(sum));



// strings 

let firstName = "Nirdosh ";
let lastName = "Kushwaha";
let fullName = firstName + lastName;
console.log(fullName);
console.log(typeof(fullName));
console.log(typeof(firstName));



// Booleans 

let isLoggedin = true;
let isLoggedoff = false;
console.log(typeof(isLoggedin));
console.log(isLoggedin + isLoggedin); //we can add them noice!


// Null 

let lastnum = null  ;
console.log(lastnum);




// Objects

const person1 = {
          firstName : 'Nirdosh' ,
          isLoggedin : false ,
}

console.log(person1);
console.log(typeof(person1));
console.log(person1.isLoggedin);


// operators  
// + - * / % ! == >=  <= ===  !=

let a = 4 , b = 5;

console.log(a+b);
console.log(a%b);

if(a != b){
          console.log("not same");
}else{
          console.log("same")
}

if(a >= b){
          console.log("a is greater");
}else if(a == b){
          console.log("both are equal");
}
else{
          console.log("b is greater");
}



console.log('1' + '8');   // its output is string 
console.log('1' * '8');   // its output is number 
console.log('a' * 2);   //NaN -> not a number 


// typeof operator 

let waht = typeof('aa');
console.log(waht);
