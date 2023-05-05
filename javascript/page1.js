let testscore = Math.floor(Math.random() * 100 )  +1;
let grade ;
if(testscore>=90)
{
 grade = 'A';
} else if(testscore>=80)
{
 grade = 'B';
} else if(testscore>=70)
{
 grade = 'C';
} else if(testscore>=60)
{
 grade = 'D';
} else if(60>testscore)
{
 grade = 'unsucces';
}
console.log(testscore);
console.log(grade);



