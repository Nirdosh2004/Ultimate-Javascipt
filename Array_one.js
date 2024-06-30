const students = ['Nirdosh' , 'Hitesh' , 'Mayank' , 'mark'];

students[4] = 'rishabh';

console.log(students.length);

students.push("mirron");

students.push({name : 'nirdosh kushwaha' ,
          age : 21,
})

for(let i=0;i<students.length;i++){
          console.log(students[i]);
};

console.log(students.indexOf('nirdosh kushwaha'));
students.pop();
for(let i=0;i<students.length;i++){
          console.log(students[i]);
};