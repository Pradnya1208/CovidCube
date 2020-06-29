
window.addEventListener('load', function(){

    let rotate = document.querySelectorAll('.rotate');
    let rotateSides = ['X', 'Y', 'Z'];
    let container = document.querySelector('.container');

    rotate.forEach(function(item, i){
        item.addEventListener('click', ()=>{
            container.style.animation = `rotate${rotateSides[i]} 10s infinite linear`;
        });
    });

});

