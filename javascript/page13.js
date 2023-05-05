const myobj = {
    ad : "davud ",
    soyad : "gunduz" , yas : 22, 
    no : 5061750951 , alive : true ,
    hobbies : ["football" , "basketball" , "coding" , "reading"] ,
    drink : 
    {
        morning : "coffe" ,
        afternoon : "tea" ,
        nigt : "beer"
    } ,
    action : function()
    {
        return 'time for ' + this.drink.nigt;
    }
}
console.log(myobj.ad);
console.log(myobj.soyad);
console.log(myobj.yas);
console.log(myobj.no);
console.log(myobj.alive);
for(let i = 0 ; i< myobj.hobbies.length ; i++)
{
    console.log(myobj.hobbies[i]);
}
console.log(myobj.drink.nigt);
console.log(myobj.action());
