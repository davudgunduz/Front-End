// const myarray = [];
// myarray[0] = "davud gunduz";
// myarray[1] = 21321;
// myarray[2] = false;

// for(let i=0 ; i<myarray.length;i++)
// {
//     console.log(myarray[i]);
// }
// console.log(myarray);
// console.log(myarray[myarray.length -1]);
// myarray.push("merhaba");

// for(let i=0 ; i<myarray.length;i++)
//{
// console.log(myarray[i]);
//  }
// myarray.pop();
// for(let i=0 ; i<myarray.length;i++)
// {
//     console.log(myarray[i]);
 // }

//  myarray.unshift(4526) ;
//  console.log(myarray);
//  myarray.shift();
//  console.log(myarray);

// delete myarray[1];
// console.log(myarray);

const  myarray = ['a','b','c'];
const  myarray2 = ['v','n','m'];
console.log(myarray);

const newarray = myarray.slice(3,5);
console.log(newarray);

const newarray2 = myarray.reverse();
console.log(newarray2);

const newstring = newarray2.join() ;
console.log(newstring);

const newarray3 = myarray.concat(myarray2);
console.log(newarray3);