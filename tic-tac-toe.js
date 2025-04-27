let term=new Audio("src/turn.mp3");
let gameOver=new Audio("src/gameOver.mp3");
let turn="X";
let isgameover=false;
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('term');
    let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===
        boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
            document.querySelector('.last').innerText=boxtext[e[0]].innerText+" won";
           isgameover=true;
           document.querySelector('.image').getElementsByTagName('img')[0].style.width="50%";
           gameOver.play();
           document.querySelector(".line").style.width=`20vw`;
           document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
        
    })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
   let boxtext=Element.querySelector('.term');
    Element.addEventListener('click',()=>{
        if(boxtext.innerText===''&& !isgameover){
            boxtext.innerText=turn;
           turn= changeTurn();
            term.play();
           checkWin();
           if(!isgameover){
           document.getElementsByClassName("info")[0].innerText="turn for "+turn;
           
        }
        else
          document.getElementsByClassName("info")[0].innerText='';
        }
    })
})
reset.addEventListener('click',()=>{
let boxtext=document.querySelectorAll('.term');
Array.from(boxtext).forEach(element=>{
    element.innerText='';
})
turn="X";
isgameover=false;
    document.getElementsByClassName("info")[0].innerText="turn for "+turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0%";
    document.querySelector('.last').innerText="";
    document.querySelector(".line").style.width=`0vw`;

})
