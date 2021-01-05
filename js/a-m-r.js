////////////////////////////////////// A_M_R script
let show = document.querySelector('.a-m-r .show-div');
let imgDiv = document.querySelector('.a-m-r .show-div img');
let amr = document.querySelector('.a-m-r a');
show.style.display = 'block';
var heightDiv = show.clientHeight;
var leftDiv = show.scrollWidth;
show.style.display = 'none';
yAmr = amr.getBoundingClientRect('.a-m-r a');
console.log(yAmr)
y = imgDiv.getBoundingClientRect();
show.style.left = -leftDiv/3 + 'px';

window.addEventListener(`scroll`,event =>{
    yAmr = amr.getBoundingClientRect('.a-m-r a');

    
    if (yAmr.top - 20 < heightDiv) {
        show.style.top = 40 + 'px';

    }
    else {
        show.style.top = -heightDiv - 20 + 'px';


    }
},false)

if (yAmr.top - 20 < heightDiv) {
    show.style.top = 40 + 'px';
    console.log('почему он это делает if? ' + 'Хорошо, вот height =' + heightDiv);
}
else {
    show.style.top = -heightDiv - 20 + 'px';
    console.log('почему он это делает else');    

}

amr.onmouseover = function(){
//show.style.visibility = 'visible';
    show.style.display = 'block';
    //if(show.style.display == 'block'){
    //    show.style.opacity = 1
    //    show.style.transition = 'opacity 0.5s ease'    
    //}
    setTimeout (() => {
        show.style.opacity = 1
        show.style.transition = 'opacity 0.5s ease'    
    }
    ,0.001);
    
};
amr.onmouseout = function(){
    show.style.opacity = 0;
    show.style.transition = '0.5s ease';
    setTimeout(() => show.style.display = 'none', 500)
};
