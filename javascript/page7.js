// let myboolean = confirm("ok === true\n cancel === false");
// console.log(myboolean);

// let name = prompt("please enter your name.") ;
// console.log(name);

// let name = prompt("please enter your name.") ;
//     console.log(name ?? "you didnt enter name");

let name = prompt("please enter your name.") ;
    if(name)
    {
        console.log(name.length);
        console.log(name.trim().length);
        console.log(name.trim());
    }
    else
    {
        console.log("you didnt enter your name ");
        prompt("please enter your name.") ;
    }