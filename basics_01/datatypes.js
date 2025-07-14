let obj={
    uid:28,
    name:"Lovely",
    age:20,
    email:"lovely@gmail.com"
};
let u1 =Symbol("uid");
obj[u1]="01";
console.log(obj);

let a=Number.MAX_SAFE_INTEGER;
console.log(a)
let b=9007199254740991n;//b became bigint
console.log(b+2n)

let c={
    name:"Lovely"
};
let d=c; //reference of c is passed to d
d.name="Ganesh" //changes made in d will also be seen in c
console.log(c)
console.log(d)


