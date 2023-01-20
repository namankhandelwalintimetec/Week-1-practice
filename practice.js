// this si practice file for practice for javascript 
// variable type in js 


// let comes with limited scope 
// let variable scope is inside the block 
// And let variable is not be redeclare 
// let a=9;
// let b=9;


// // scope in the whole function 
// var a1=0;
// var a2=0;


// // here const variabel is not chage if they inilished once 
// const a3=0

{
    let a=10;
    var b=20
    console.log(a);
}

// console.log(a);
console.log(b);


// there are multiple type of query selector like 
// 1. by ID
// 2. by class 
// 3. by tagName

function display() {
    // here date is built in function that is used for take current time 
 document.getElementById("demo").innerHTML = Date();
 document.getElementById("demo1").innerHTML = "current time is ";
 console.log("you clicked the button");
}



// Random Number-------------------------------------------------------------------------------------------------------------------------------
function random_number(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}

// here call random function 
var num=random_number(10,100);
// this is for generate a random number between 0 to 99 
console.log(Math.floor(Math.random()*100));

console.log(num);

// boolean -------------------------------------------------------------------------------------------------------------------------------------

var x=0;
console.log(Boolean(x));
// if the value of x is 0,negative, null, undefine,NaN that mean its boolean value is false
// other wise it boolean value is true 


// Date concept---------------------------------------------------------------------------------------------------------------------------------

// this print current time and date 
console.log(Date());
const d = new Date(2018, 11);
console.log(d);


// types of conditional statements -------------------------------------------------------------------------------------------------------------

// 1. if statement 

if(2==2)
{
    console.log("you win");
}
else{
    console.log("you loss");
}


// 2. if ,else if
var a=2;

if(a==3)
{
    console.log("value is 2 ");
}
else if(a==2)
{
    console.log("value is 2");
}
else{
    console.log("default");
}


// 3. is switch statement 

switch (a) {
    case 1:
        console.log("value is 1")
        break;
    default:
        break;
}


// type of loops in js -------------------------------------------------------------------------------------------------------------------------
// 1. for loop
// 2. while
// 3. for In
// 4. for of 

const obejct={name:"naman",class:"A"}

for (let i in object)
{
    console.log(object[i]);
}