window.addEventListener('load', function(){

    let rotate = document.querySelectorAll('.rotate');
    let rotateSides = ['X', 'Y', 'Z'];
    let container = document.querySelector('.container');
    var Gx=0;
    var Gy=0;
    var x=0;
    var y=0;

    rotate.forEach(function(item,i){

        item.addEventListener('click', ()=>{
        if (x===0 && i===0)
        {
            if(Gx===0 || (Gy===1 && y===1))
       		{
                 container.style.animation = `rotate${rotateSides[i]} 10s infinite linear`;
                 x = 1; Gx=1; y=0; Gy=0;
        	}
        }
        else if (y===0 && i===1)
        {
           if (Gy===0 || (Gx===1 && x===1))
           {
                container.style.animation = `rotate${rotateSides[i]} 10s infinite linear`;
                x = 0; Gx=0; y=1; Gy=1;
           }
       	}
       else
       {
       		    container.style.animation = `loop 18s infinite linear`;
                if (x===1){x=0; Gx=0;}
                if(y===1){y=0; Gy=0;}
       }
            
                 		
        });
                       
            container.addEventListener('mouseenter', ()=> {
            container.style.webkitAnimationPlayState = 'paused';});
               
            container.addEventListener('mouseleave', () =>{
            container.style.webkitAnimationPlayState = 'running';});

            item.addEventListener('mouseenter', ()=> {
            item.style.background = 'Gainsboro';
            item.style.color = 'black';
            item.style.opacity=0.5;});

            item.addEventListener('click', ()=> {
            item.style.background = 'LightSlateGrey';
            item.style.color = 'black';
            item.style.opacity=0.8;});

            item.addEventListener('mouseleave', () =>{
            item.style.background = 'transparent';
            item.style.color = 'white';

            });
    });

});

