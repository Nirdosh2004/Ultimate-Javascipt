function add(a,b,cb){
          let result=  a+b;
          cb(result);
          return () => console.log(result);
};

let re = add(3,4,() => {})
re();