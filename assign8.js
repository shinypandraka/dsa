//1.
//ans:
// let a=1;
// while(a<=10){
//     console.log(a);
//     a++
// }


//2
//ans:
// let a=1;
// let sum=0;
// while(a<=10){
//     sum=sum+a;
//     a++
// }
// console.log(sum)


//3.
//ans:
// let table=3;
// let i=1;
// while(i<=10){
//     console.log(`${table} X ${i} = ${table * i}`);
//     i++
// }



//4.
//ans"
// let a="narendra";
// let b=a.length-1;
// while(b>=0){
//     console.log(a[b]);
//     b--
// }



//5.
//ans:
// let a="chowdaiah";
// let vowels=0;
// let i=0;
// while(i<=a.length-1){
//     i++
//     if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u"){
//         vowels=vowels+1
//     }

// }
// console.log(vowels)



//6.
//ans:
// let i=0;
// while(i<4){
//     i++
//     let count="";
//     let j=1;
//     while(j<=i){
//         j++
//         count=count+"*"
//     }
//     console.log(count)
// }

//7.
//ans:
// let a=4;
// let i=1;
// while(i<=a){
//     i++;
//     let str="";
//     let j=1;
//     while(j<=i){
//         if(i===1 || i===4 ||j===1 || j===4){
//             str=str+"*"
//         }
//         else{
//             console.log("")
//         }
//     }
//     console.log(str)
// }


//8.
//ans:
// let a="1235342455abcse";
// let i=0;
// let str=0;
// while(i<=a.length-1){
   
//     if(a[i].charCodeAt()>=49 && a[i].charCodeAt()<57){
//         str=str+1
//     }
//      i++
// }
// console.log(str)


//9.
//ans:
// let palindrome="aba";
// let i=0;
// let j=palindrome.length-1
// while(i<j){
//     if(palindrome[i]!==palindrome[j]) return console.log("Not a palindrome");
//     i++;
//     j--;
// }
// console.log("palindrome")

//10.
//ans:
// let a="c h o w d a i a h";
// let count=0;
// let i=0
// while(i<=a.length-1){
//     count=count+1
//     i++
// }
// console.log(count)

