<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>SelfIntroduction</title>
</head>

<body>
    <div class="selfIntroducution-content wrapper">

        <h1 class="page-title">-Hello,I`m YUSUKE SHINGU-</h1>
    <img src="C:\Users\yusuk\OneDrive\画像\shingu.JPG"alt="新宮祐介の写真" width="250" height="250">
    <img src="C:\Users\yusuk\OneDrive\画像\OIP.jpg " alt="白黒写真"　width="250" height="250">
    <img src="C:\Users\yusuk\OneDrive\画像\GBHE8683.JPG"alt="新宮祐介の写真"　width="250" height="250">
    <img src="C:\Users\yusuk\OneDrive\画像\OIP.jpg" alt="白黒写真"　width="250" height="250">
    <img src="C:\Users\yusuk\OneDrive\画像\IMG_3758 (2).JPG" alt="新宮祐介の写真"　width="250" height="250">
    
    <h2>-PROfILE-</h2>
 <ul>
   <div class="box" id="target1"></div>
   <P1> YUSUKE SHINGU//tokyo//2001.0316<br>
    <div class="box1" id="target2"></div>My hobby//Shopping,Skateboard,Sports<br>
    <div class="box2" id="target3"></div>Dream for the future//Becoming a Designer
        </ul></p1>
        <h2>-Qualifications-</h2>
<ul>
    <P>JATI-ATI//健康実践運動指導者//JCCAベーシックセブン　etc..</P>
</ul>

    <script>
        'use strict';
        const target1 = document.getElementById('target1');
        const target2 = document.getElementById('target2');
        const target3 = document.getElementById('target3');
        const target4 = document.getElementById('target4');
        target1.addEventListener('click',() =>{
            target1.classList.toggle('circle');
        });
            target2.addEventListener('click',() =>{
                target2.classList.toggle('circle1');
            });
            target3.addEventListener('click',() =>{
                target3.classList.toggle('circle2');
            });
        </script>



    </ul>
    </body>
    </html>
    
    <style type="text/css">

    .P1{
        text-align: left;
        margin-right: 100px;
    }
    
    .circle{
        width: 50px;
        height: 50px;
    background-color: rgb(0, 4, 255);
    margin: 0 8px 8px 0;
    cursor: pointer;
    border-radius: 50%;
    transform: rotate(720deg);
    transition: 8s;
    }

    .circle1{
        width: 50px;
        height: 50px;
    background-color: rgb(212, 194, 28);
    margin: 0 8px 8px 0;
    cursor: pointer;
    border-radius: 50%;
    transform: rotate(720deg);
    transition: 8s;
    }

    .circle2{
        width: 50px;
        height: 50px;
    background-color: rgb(255, 0, 98);
    margin: 0 8px 8px 0;
    cursor: pointer;
    border-radius: 50%;
    transform: rotate(720deg);
    transition: 8s;
    }

    .box{
        width: 50px;
        height: 50px;
        background-color: rgb(255, 0, 0);
        margin: 0 8px 8px 0;
        cursor: pointer;
        transition: 8s;
        transform: rotate3d(540deg);
    }

    .box1{
        width: 50px;
        height: 50px;
        background-color: rgb(212, 250, 0);
        flex-direction: row-reverse;
        display: flex;
        flex-wrap: wrap;
        margin: 0 8px 8px 0;
        cursor: pointer;
        transition: 8s;
        transform: rotate3d(720deg);
    }

    .box2{
        width: 50px;
        height: 50px;
        background-color: rgb(60, 86, 236);
        flex-direction: row-reverse;
        display: flex;
        flex-wrap: wrap;
        margin: 0 8px 8px 0;
        cursor: pointer;
        transition: 8s;
        transform: rotate3d(900deg);
    }

    body{
        text-align: center;
        color: black;
        font-size: medium;
        font-weight: bold;
        transform: rotate(180);
        cursor: pointer;
    }

    h1 {
        text-align:left ;
       color: rgb(0, 0, 0);
       font-weight: bold;
      font-size: large;
        }

        h2{
            text-align: center;
            color: rgb(0, 0, 0);
            font-weight: bold;
            font-size: large;
         }

         P{
             text-align: center;
             font-weight: bold;
             font-size: medium;
             color: rgb(0, 0, 0);
         }