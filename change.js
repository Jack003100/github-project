/*var A = document.getElementById('buy')
var B = document.getElementById('self')
var C = document.getElementById('costTotal')
var D = document.getElementById('costProfot')
var X = document.getElementById('costBuy')
var Y = document.getElementById('costSelf')
var Btn =document.getElementById('btn')

function add(){
    var A = parseInt(document.getElementById('buy').value);
    var B = parseInt(document.getElementById('self').value);
    document.getElementById('costTotal').value =  (A*1000*0.001425)+(B*1000*0.004425) ;
}

    Btn.onclick=function(){
        add();
    }
    document.getElementById('btn').addEventListener(click, (add))

document.getElementById('btn').onclick=btn.onclick add(){
    var A = parseInt(document.getElementById('buy').value);
    var B = parseInt(document.getElementById('self').value);
    document.getElementById('costTotal').textContent =  (A*1000*0.001425)+(B*1000*0.004425) ;
     
}*/


 /*https://www.twcode01.com/codedemo/2815.html*/
  /* 參考下面回傳值範例*/


    

   
  /* function add(){
    var A = parseInt(document.getElementById('buy').value);
    var B = parseInt(document.getElementById('self').value);
    document.getElementById('costTotal').value =  (A*1000*0.001425)+(A*1000)+(B*1000*0.004425);
}/*函式設定*/
/*Btn.onclick=function(){
    add();*/
/*btn動作*/
/*document.getElementById('btn1').onclick=btn1.onclick=function(){
    add();
}
/*設定btn關聯*/
/*總花費*/

/*function one(){
    var A = parseInt(document.getElementById('buy').value);
    document.getElementById('costBuy').value = (A*1000*0.001425)+(A*1000);
}

document.getElementById('btn2').onclick=btn2.onclick=function(){
    one();
}
/*買進總花費*/



/*function sale(){
    var B = parseInt(document.getElementById('self').value);
    document.getElementById('costSelf').value = B*1000*0.004425;
}
document.getElementById('btn3').onclick=btn3.onclick=function(){
    sale();
}
/*賣出手續費*/

/*function pro(){
    var A = parseInt(document.getElementById('buy').value);
    var B = parseInt(document.getElementById('self').value);
    document.getElementById('costProfit').value = (B*1000)-((A*1000*0.001425)+(A*1000))-(B*1000*0.004425);
}

document.getElementById("btn4").onclick=btn4.onclick=function(){
    pro();
}/*總獲利*/







function one(){
    var A = parseFloat(document.getElementById('buy').value);
    var B = parseFloat(document.getElementById('self').value);
    document.getElementById('costBuy').value = (A*1000*0.001425)+(A*1000);
}
document.getElementById('btn2').onclick=btn2.onclick=function(){
    one();
}


function sale(){
    var A = parseFloat(document.getElementById('buy').value);
    var B = parseFloat(document.getElementById('self').value);
    document.getElementById('costSelf').value = B*1000*0.004425;
}
document.getElementById('btn3').onclick=btn3.onclick=function(){
    sale();
}


function add(){
    var A = parseFloat(document.getElementById('buy').value);
    var B = parseFloat(document.getElementById('self').value);
    document.getElementById('costTotal').value =  (A*1000*0.001425)+(A*1000)+(B*1000*0.004425);
}
document.getElementById('btn1').onclick=btn1.onclick=function(){
    add();
}



function pro(){
    var A = parseFloat(document.getElementById('buy').value);
    var B = parseFloat(document.getElementById('self').value);
    /*先宣告AB的值從哪個ID獲得*/
    document.getElementById('costProfit').value = (B*1000)-((A*1000*0.001425)+(A*1000))-(B*1000*0.004425);
    /*將AB的值做計算後，放回哪個ID做輸出*/
}
document.getElementById("btn4").onclick=btn4.onclick=function(){
    pro();
}/*網頁內的哪個東西被按了後，JS裡面的btn4被按=執行函式{欲執行的函式}*/
function reset(){
    document.getElementById('buy').value='';
    document.getElementById('self').value='';
    document.getElementById('costBuy').value='';
    document.getElementById('costSelf').value='';
    document.getElementById('costTotal').value='';
    document.getElementById('costProfit').value='';
}
document.getElementById("btn5").onclick=btn5.onclick=function(){
    reset();
}