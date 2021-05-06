//document.write("Hello World!");
//alert("Hello World");

//console.log(1+1)
//console.log(1+1)
//console.log(1+1)
//console.log(1+1)
//console.log(1+1)
//console.log(1+1)


//
//
//'use strict';　//必ず頭に書く　


//let age = 30;
//const name = "新宮祐介";

//age = age + 2;
//console.log(`${name}さんの年齢は${20}です`)
//変数とは値を代入するための箱
//定数とは値を別名で定義したもの
//Varは使わない
//varのところはietやconstに置き換えて取り組んでいく
//letよりもconstを出来るだけ使うようにしよう
//

//const nameList = ["田中","山田","林"];

//for (let i = 0; i < nameList.length;i++){
      //  console.log(`${i+1}.${nameList[i] }`);
//}

/* for (let i=0; i <10;i++){
    if (i % 2=== 0) continue;
    console.log(i); */
}
//break文
/* for (iet i = 1; i < 1000; i++ ) {
    if(i >10)break;
    console.log(i); */
}

/* function scorecheck(){
let testscore = document.getElementById('score').value
 if (testscore >= 80){
    document.write("合格です！おめでとうございます！");
 }else if(testscore >= 70){
        document.write("惜しい！あと少し！");
    }else{
        document.write("不合格です！もう少し頑張りましょう"); */
    }
/* }
const calcA = new cluculator(3,4);
const calcB = new cluculator(1,1);
console.log(calcA.addTwoNum());
console.log(calcB.addTwoNum());
 */
class SuperNaming {
    constructor(){
        this.name ="田中";
    }
outputName (){
     return this.name;
  }
}
class SubGreeting extends SuperNaming{
    outputName(){
        return super.outputName() +"太郎";
    }
 
    outputHello(){
     return "Hello";
    }
}
