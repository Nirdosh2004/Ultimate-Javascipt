// function main(){
//           const name = "Nirdosh Kushwaha";
//           function child(){
//                     console.log(name);
//           }
//          return child;
// };

// let fn = main("Rishabh");
// // console.log(fn);

// fn();
// console.log(fn);


// function adder(num){
//           function add(b){
//                     console.log(num + b);
//           }
//           return add;
// }

// const addto5 = adder(5);

// const addTo10 = adder(10);
// addTo10(30);
// addto5(10);

const myName = document.getElementById("my-name");
const btn =document.getElementById("my-button");

function makeTextSizer(size){
          function changeSize(){
                    myName.style.fontSize = `${size}px`;
                    // myName.style.fontFamily = `${'Poppins'}`;
          }
          return changeSize;
}

const size1 = makeTextSizer(1);
const size12 = makeTextSizer(12);
const size22 = makeTextSizer(22);
const size23 = makeTextSizer(23);
const size33 = makeTextSizer(33);

btn.addEventListener("click" ,  size33)