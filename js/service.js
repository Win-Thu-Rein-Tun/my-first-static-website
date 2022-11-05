document.querySelector('#square-1').onclick = one;
function one() {
    document.querySelector('#square-1').style.opacity = 1;
    document.querySelector('#square-2').style.opacity = 0.5;
    document.querySelector('#square-3').style.opacity = 0.5;
    document.querySelector('#square-4').style.opacity = 0.5;
    document.querySelector('#circle-1').style.display ='block';
    document.querySelector('#circle-2').style.display ='none';
    document.querySelector('#circle-3').style.display ='none';
    document.querySelector('#circle-4').style.display ='none';
}

document.querySelector('#square-2').onclick = two;
function two() {
    document.querySelector('#square-1').style.opacity = 0.5;
    document.querySelector('#square-2').style.opacity = 1;
    document.querySelector('#square-3').style.opacity = 0.5;
    document.querySelector('#square-4').style.opacity = 0.5;
    document.querySelector('#circle-1').style.display ='none';
    document.querySelector('#circle-2').style.display ='block';
    document.querySelector('#circle-3').style.display ='none';
    document.querySelector('#circle-4').style.display ='none';
}

document.querySelector('#square-3').onclick = three;
function three() {
    document.querySelector('#square-1').style.opacity = 0.5;
    document.querySelector('#square-2').style.opacity = 0.5;
    document.querySelector('#square-3').style.opacity = 1;
    document.querySelector('#square-4').style.opacity = 0.5;
    document.querySelector('#circle-1').style.display ='none';
    document.querySelector('#circle-2').style.display ='none';
    document.querySelector('#circle-3').style.display ='block';
    document.querySelector('#circle-4').style.display ='none';
}

document.querySelector('#square-4').onclick = four;
function four() {
    document.querySelector('#square-1').style.opacity = 0.5;
    document.querySelector('#square-2').style.opacity = 0.5;
    document.querySelector('#square-3').style.opacity = 0.5;
    document.querySelector('#square-4').style.opacity = 1;
    document.querySelector('#circle-1').style.display ='none';
    document.querySelector('#circle-2').style.display ='none';
    document.querySelector('#circle-3').style.display ='none';
    document.querySelector('#circle-4').style.display ='block';
}
