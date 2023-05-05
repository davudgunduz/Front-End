let testscore = Math.floor(Math.random() * 100 +1);
let mygrade = testscore >= 90 ? console.log("A") :
 testscore>=80 ? console.log("B") : testscore >=70 ?console.log("C") :
 testscore>=60 ? console.log("D") : console.log("F");
 console.log(testscore);