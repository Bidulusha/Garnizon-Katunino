////////////////////////////////////
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
img = document.querySelector('.foto').style;
////////////////////////////////////


i = 0;
w = 0;
v = 1;
s = 0;








////////////////////////////////////

////////////////////////////////////
var back = document.querySelector('.back');
var t = document.querySelector('.to');
////////////////////////////////////

////////////////////////////////////
var slaid = document.body.scrollWidth;
////////////////////////////////////

//////////////////////////////////////
let timerForFoto = setInterval(() => IntBs(), 5000);
//////////////////////////////////////



////////////////////////////////////
$('img1').left = $('body').width();
document.querySelector('#img2').style.left = document.querySelector('#img1').scrollWidth + 'px';
document.querySelector('#img3').style.left = 2 * document.querySelector('#img1').scrollWidth + 'px';
////////////////////////////////////

i = 1;
j = slaid;

    document.querySelector('#img1').style.left =  0;
    document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img2').style.left =  document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img3').style.left =  2*document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img3').style.transition = "left 2s ease 0.2s";
    
function bs(){
    i += 1;
    if (i == 2){
    document.querySelector('#img1').style.left =  -document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img2').style.left =  0;
    document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img3').style.left =  document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img3').style.transition = "left 2s ease 0.2s";
    }

    if (i ==3){
    document.querySelector('#img1').style.left = -2 * document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img2').style.left = -document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img3').style.left = 0;
    document.querySelector('#img3').style.transition = "left 2s ease 0.2s";      
    }
    if (i == 4){
        document.querySelector('#img1').style.left = 0;
        document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
        document.querySelector('#img2').style.left = document.querySelector('#img1').scrollWidth + 'px';
        document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
        document.querySelector('#img3').style.left = 2 * document.querySelector('#img1').scrollWidth + 'px';
        document.querySelector('#img3').style.transition = "left 2s ease 0.2s";
        i = 1;
    
    }
    clearInterval(timerForFoto); 
    timerForFoto = setInterval(() => {IntBs()}, 5000);
    
}

function IntBs(){
    s = w + v;
    i += 1;
    if (i == 2){
    document.querySelector('#img1').style.left =  -document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img2').style.left =  0;
    document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img3').style.left =  document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img3').style.transition = "left 2s ease 0.2s";
    }

    if (i ==3){
    document.querySelector('#img1').style.left = -2 * document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img2').style.left = -document.querySelector('#img1').scrollWidth + 'px';
    document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
    document.querySelector('#img3').style.left = 0;
    document.querySelector('#img3').style.transition = "left 2s ease 0.2s";      
    }
    if (i == 4){
        document.querySelector('#img1').style.left = 0;
        document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
        document.querySelector('#img2').style.left = document.querySelector('#img1').scrollWidth + 'px';
        document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
        document.querySelector('#img3').style.left = 2 * document.querySelector('#img1').scrollWidth + 'px';
        document.querySelector('#img3').style.transition = "left 2s ease 0.2s";
        i = 1;
    
    }
}








function to(){
    i +=1
    if (i == 4){
        document.querySelector('#img1').style.left = 0;
        document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
        document.querySelector('#img2').style.left = document.querySelector('#img1').scrollWidth + 'px';
        document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
        document.querySelector('#img3').style.left = 2 * document.querySelector('#img1').scrollWidth + 'px';
        document.querySelector('#img3').style.transition = "left 2s ease 0.2s";
        i=1;
        }
    
        if (i ==3){
            document.querySelector('#img1').style.left =  -document.querySelector('#img1').scrollWidth + 'px';
            document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
            document.querySelector('#img2').style.left =  0;
            document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
            document.querySelector('#img3').style.left =  document.querySelector('#img1').scrollWidth + 'px';
            document.querySelector('#img3').style.transition = "left 2s ease 0.2s"; 
        }
        if (i == 2){
            document.querySelector('#img1').style.left = -2 * document.querySelector('#img1').scrollWidth + 'px';
            document.querySelector('#img1').style.transition = "left 2s ease 0.2s";
            document.querySelector('#img2').style.left = -document.querySelector('#img1').scrollWidth + 'px';
            document.querySelector('#img2').style.transition = "left 2s ease 0.2s";
            document.querySelector('#img3').style.left = 0;
            document.querySelector('#img3').style.transition = "left 2s ease 0.2s";    

        }
}



///////////////////////////////////
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
///////////////////////////////////

///////////////////////////////////

    


setInterval(() => {
        

    var slaid = $('body').width();
    if(document.querySelector('#img1').style.left ==  0 + 'px'){
        img1.style.left =  0;
        img1.style.transition = 'left 0s';
        img2.style.left =  slaid + 'px';
        img2.style.transition = 'left 0s';
        img3.style.left =  2*slaid + 'px';
        img3.style.transition = 'left 0s';

    }


    
    if (document.querySelector('#img2').style.left ==  0 + 'px' ){
            img1.style.left =  -slaid + 'px';
            img2.style.left =  0;
            img3.style.left =  slaid + 'px';

            $('img2').on('transitionend', function (){
            img1.style.left =  -slaid + 'px';
            img2.style.left =  0;
            img3.style.left =  slaid + 'px';
            img1.style.transition = 'left 0s';
            img2.style.transition = 'left 0s';
            img3.style.transition = 'left 0s';
            }
            );

    }
    img2.addEventListener(`transitionend`, () =>{

    if (document.querySelector('#img2').style.left ==  0 + 'px'){
    img1.style.left =  -slaid + 'px';
    img2.style.left =  0;
    img3.style.left =  slaid + 'px';

    img1.style.transition = 'left 0s';
    img2.style.transition = 'left 0s';
    img3.style.transition = 'left 0s';

    }
    }
    ,true);


    if (document.querySelector('#img3').style.left == 0 + 'px'){
            img1.style.left = -2 * slaid + 'px';
            img2.style.left = -slaid + 'px';
            img3.style.left = 0;

    }
    img1.style.transition = 'left 2s ease 0.5s';
    img3.style.transition = 'left 2s ease 0.5s';



    }, 0);

console.log('dont do it')
///////////////////////////////////















