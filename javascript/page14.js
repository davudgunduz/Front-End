const band = {
    vokals : " :robert plant",
    guitar : " :jimmy page",
    bass : " :john paul jones",
    drums : " :john bonham"
};
console.log(Object.keys(band));
console.log(Object.values(band));

  delete band.drums;

for(let job in band)
{
    console.log(job + band[job]);
}
band.keyboards = "ross galler" ;

