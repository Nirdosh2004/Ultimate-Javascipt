function sayHello(){
          console.log("Hello");
}

sayHello();  //calling function
sayHello();


function sum(a,b){
          let result = a + b;
          return console.log(result);
}

sum(4,5);
sum(2,4);
sum(4,0);


function multi(num1 , num2){
          console.log(num1 * num2);
}

multi(3,4);
multi(4,6);



function factorial(num){
          if(num <= 0) return 1;
          else {
                    return num * factorial(num-1);   //recursion 
          }
}

console.log(factorial(4));



function sumOf(){
          let ans = 0;
          for(let i=0 ;i < arguments.length ;i++){
                    ans += arguments[i];
          }
          return ans;
}

console.log(sumOf(3,4,2,3,2,4,5,5));