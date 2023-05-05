// function sum (number1,number2)
// {
//     console.log("number1 = " + number1);
//     console.log("number2 = " + number2);
//     return number1 + number2;
// }
// console.log("result = " + sum(3,4));

// function sum (number1,number2)
// {
//     if(number2 === undefined)
//     {
//         console.log("number1 = " + number1);
//     console.log("number2 = " + number2);
//     return number1 + number1;
//     }
//     else
//     {
//         console.log("number1 = " + number1);
//     console.log("number2 = " + number2);
//     return number1 + number2;
//     }
// }
// console.log("result = " + sum(3));

// let email = prompt("bir email tuslayiniz");
// function getusernamefromEmail(email)
// {
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getusernamefromEmail(email));

let name = prompt("please enter your name .");
function toProppercase(name)
{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()  ;
}

console.log(toProppercase(name));

