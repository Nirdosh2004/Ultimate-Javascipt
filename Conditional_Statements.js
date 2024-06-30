//if else 

const age = 918;
if (age >= 18 && age <=100){
          console.log("Yes you can vote");
}else if(age >= 100){
          console.log("you are alive? pls reply");
}else if(age < 0){
          console.log("First you have to born ... hahahaha");
}
else{
          console.log("Nope you are not allowed to vote");
}


// Ternary operator 

const agee = 77;

// if age is greater then 18 then print yes else print 'no'
let result = agee >= 18 ? "Yes" : "No";
console.log(result);



// Switch case statement

const option  = 7;
 

switch(option){
          case 1:
                    {
                              console.log("namaste");
                              break;
                    }
          case 2:{
                    console.log("hello ");
                    break;
          }
          case 3:{
                    console.log("Bonjour");
                    break;
          }
          default:{
                    console.log("Invalid option ");
          }
}


let a = 40;
let opt = '-';

let b = 49;

switch(opt){
          case '+': console.log(a + b);
          break;
          case '-': console.log(a-b);
          break;
          default: console.log("Invalid");
}