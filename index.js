///Author  : khaleel
//Date     : 16/09/2024
// # js

const left=document.getElementById("left");
const right=document.getElementById("right");
const imgcontainer=document.getElementById("imgcontainer");

images = ["meta","apple","amazon","netflix","google"];

let cursor=0;
let intervalid;
imgcontainer.innerHTML=`<img src="./images/${images[cursor]}.png">`;   //added this line after fist commit
// function initializer(){
//     if(cursor>4){
//         cursor=0;
//     }
//     imgcontainer.innerHTML=`<img src="/images/${images[cursor]}.png">`;
//     cursor++;
//     intervalid=setInterval(initializer,5000);
// }

// initializer();   //option code for initialzing the slider with an automatic sliging option 

left.onclick=function(){
    clearInterval(intervalid);
    if(cursor==0)
    {
        cursor=4;
        imgcontainer.innerHTML=`<img src="./images/${images[cursor]}.png">`;
        // left.disabled="true";
    }
    else{
        cursor--;
        imgcontainer.innerHTML=`<img src="./images/${images[cursor]}.png">`;
    }
}
right.onclick=function(){
    if(cursor==4)
        {
            cursor=0;
            imgcontainer.innerHTML=`<img src="./images/${images[cursor]}.png">`;
        }
        else{
            cursor++;
            imgcontainer.innerHTML=`<img src="./images/${images[cursor]}.png">`;
        }

}
