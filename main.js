// 'use strict'
// var x;
// //console.log(x);

// document.write(typeof(x));

// function changeColor()
// {
//   document.getElementById("mahmoudBox").style.backgroundColor="red";
// }
// function alertMe()
// {
//   // alert("مرحباً بك يا حودة ");
//   document.body.style.backgroundColor="yellow";
// }
// function PrintMe() {
//   console.log("Welcome Mohamed Refaat");
// }
// function selectColor(selectedColor) {
//   // var color=selectColor.
//   console.log(selectedColor);

// }
// // function r()
// // {
// //   document.write(c);
// // }
// // r();
// function test()
// {
//   var b;
//   b+=10;
//   console.log(b);
// }
// e=10;
// console.log(e);
// var e;
// for(var i=0;i<5;i++)
// {
//   console.log(i);
// }
// console.log("-----------------------------");
// for(let j=0;j<5;j++)
// {
//   console.log(j);
// }

// console.log(i);


// const pi=3.14;

// function sum(n1,n2)
// {
//   let result=n1+n2;
//   console.log(`The sum of ${n1},${n2} is =${result} `);
// }
// sum(18,20);

// var v1=10;
// var v2="10";
// console.log(v1!=v2);

// var result=(v1===v2) ? "Equal":"Not Equal";
// console.log(result);
// if (condition) {
  
// } else {
  
// }


var ar=[
  [1,2,3,4],[5,7,8],[9,10,11]
];
// ar[0]=1;
console.log(ar[0][2]); 
var studentNames=['Mohamed','Ahmed','Amira','Mahmoud','Aya','Tarek'];
// debugger;
for (let index = 0; index < studentNames.length; index++) {
  console.log(`Student Name :${studentNames[index]} with No.${index+1}`);
  
}
for (let index = 0; index < 100; index+=2) {
  console.log(index);
  
}
// debugger;
// var sum=0;
// while (sum<100) {
//   var n=prompt("Enter a number,please");
//  if(n===NaN)
//  {
//   alert(ljljl);
//  }
  
//   sum+=parseInt(n);
// }
// console.log(sum.toString());
// for (let index = 0; index < studentNames.length; index++) {
//   console.log(`Student Name :${studentNames[index]} with No.${index+1}`);
  
// }
// studentNames.forEach(console.log());
// var userName;
// var e=[];
// do
// {
//   userName=prompt("Enter Your Name?");
//   e.push(userName);
// }while(userName===NaN);
// console.log("Thanks...");
// ar.forEach(console.log());
console.log("-------------------");
for (let index = 0;index<100; index++) {
  if(index%2==0)
  {
    continue;
  }
  console.log(index);
  
}
