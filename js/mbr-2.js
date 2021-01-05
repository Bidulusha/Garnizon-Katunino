//////////////////////////////////////script
let show2 = document.querySelector('.mbr-2 .show-div');
let imgDiv2 = document.querySelector('.mbr-2 .show-div img');
let amr2 = document.querySelector('.mbr-2 a');
show2.style.display = 'block';
var heightDiv2 = show.clientHeight;
var leftDiv2 = show.scrollWidth;
show2.style.display = 'none';
yAmr2 = amr2.style.top;
y2 = imgDiv2.getBoundingClientRect();
show2.style.left = -leftDiv/3 + 'px';
if (yAmr2.top - 20 < heightDiv) {
    show2.style.top = 40 + 'px';
    console.log('почему он это делает if? ' + 'Хорошо, вот height =' + heightDiv);
}
else {
    show2.style.top = -heightDiv - 20 + 'px';
    console.log('почему он это делает else');    

}


window.addEventListener(`scroll`,event =>{
    yAmr2 = amr2.getBoundingClientRect();
    if (yAmr2.top - 20 < heightDiv) {
        show2.style.top = 40 + 'px';

    }
    else {
        show2.style.top = -heightDiv - 20 + 'px';


    }
},false)


amr2.onmouseover = function(){
    //show.style.visibility = 'visible';
        show2.style.display = 'block';
        setTimeout (() => {
        show2.style.opacity = 1
        show2.style.transition = 'opacity 0.5s ease'    
        }
        ,0.0001);

};
amr2.onmouseout = function(){
show2.style.opacity = 0;
show2.style.transition = '0.5s ease';


setTimeout(() => show2.style.display = 'none', 500)
};
