let wm = document.querySelector('body').clientWidth;
let Body = document.querySelectorAll("main");
let Break = document.querySelector('.Break-point h1');
let Fo = document.querySelector('.foto');
let HeadText = document.querySelectorAll('.head-text');
console.log(wm)
function Mb(){
    
if(360 < wm < 570){
    s = 570-wm

    for (var i = 0; i < HeadText.length; i++){
        HeadText[i].style.marginTop = 70 + 'px';
    }

    document.body.width = wm + 'px';
    Fo.style.height = 640 + wm - 580 + 'px';
    Break.style.fontSize = 60 + 'px';

    for (var i = 0; i < Body.length; i++){
    Body[i].style.marginLeft = 0;
    Body[i].style.marginRight = 0;
    Body[i].style.fontSize = 15 + 'px';
    console.log('w')
    Body[i].style.maxWidth = 'none';
}
}
if(wm <= 360){
    s = 570-wm
    
    for (var i = 0; i < HeadText.length; i++){
    HeadText[i].style.marginTop = 50 + 'px';
}
    document.body.width = 100 + '%';
    
    Break.style.fontSize = 54 + 'px';
    for (var i = 0; i < Body.length; i++){
        Body[i].style.marginLeft = 0;
        Body[i].style.marginRight = 0;
        Body[i].style.fontSize = 14 + 'px';
        console.log('w')
        Body[i].style.maxWidth = 'none';
}
}
}
Mb();

window.addEventListener(`resize`, event =>{
    wm = $('body').width();
    Body = document.querySelectorAll("main");
    Mb();

},false);
