const sayHello = () => {
          console.log("Hello brother " );
}

sayHello();

const add = (a,b) => { 
          return a + b; 
};


console.log(add(4,5));



sayHello();
function sayHello(){
          console.log("HEllo");
}



// This keyword

const obj = {
          key : 30,
          myFunction : function (){
                    console.log(this.key);
          },
};

obj.myFunction()