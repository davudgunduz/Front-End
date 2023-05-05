const  myobject =  {
    name : "davud",
    sourname : "gunduz",
    number : 5061750951,
    hello : function hello_world ()
    {
        return "hello world";
    }
}

console.log(myobject);
myobject.hello();

const jsonobject = JSON.stringify(myobject);
console.log(jsonobject);
console.log(typeof jsonobject);
 console.log(jsonobject.name);

const resivejson = JSON.parse(jsonobject);
console.log( resivejson);
console.log(typeof resivejson);