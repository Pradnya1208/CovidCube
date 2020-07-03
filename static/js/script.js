window.addEventListener('load', function(){

    let rotate = document.querySelectorAll('.rotate');
    let dropbtn = document.querySelector('.dropbtn');
    let content = document.querySelector('.dropdown-content');
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

        content.addEventListener('click', ()=>{
                rotate[0].style.display = 'none';
                rotate[1].style.display = 'none';
                 container.style.cursor = 'pointer';
                container.style.position='relative';
                container.style.webkitAnimation=`move 10s normal`;
                 container.style.webkitAnimationFillMode ='forwards';



                });





});

/* there is a single button right now*/


/*container.addEventListener('click', () =>{
             container.style.display = 'none';
             item.style.display = 'none';
             });
*/




/*
item.addEventListener('click', ()=>{
             item.style.cursor = "pointer";
             item.style.webkitTransform= "scale3d(0.8,0.8,0.8)";
             item.style.mozTransform = "scale3d(0.8,0.8,0.8)";
             item.style.transform= "scale3d(0.8,0.8,0.8)";
            });


*/




        /*     dropbtn.addEventListener('mouseenter', ()=>{
                container.style.display = 'none';
                item.style.display = 'none';
                });

             dropbtn.addEventListener('mouseleave', ()=>{
                container.style.display = 'block';
                item.style.display = 'block';
                });
        */

           /*     content.addEventListener('click', ()=>{
                container.style.display = 'none';
                item.style.display = 'none';
                cube.style.display = 'inline';



                });*/



                /*
content.addEventListener('click', ()=>{
                /*container.style.display = 'none';
                rotate[0].style.display = 'none';
                rotate[1].style.display = 'none';
                /*cube.style.display = 'inline';
                container.style.cursor = 'pointer';
             container.style.webkitTransform= 'scale3d(0.4,0.4,0.4)';
             container.style.mozTransform = 'scale3d(0.4,0.4,0.4)';
             container.style.transform= 'scale3d(0.4,0.4,0.4)';
             container.style.transition='20s';
             container.style.animation ='forwards';


                });
                */