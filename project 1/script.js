(function(){
    'use strict'
    
    const myphotos = ['image1.jpg', 'image2.jpg','image3.jpg','image4.jpg','image5.jpg']
    let currentPhoto = 0;
    let container = document.getElementById('content');
    let prevPhoto = document.getElementById('previous')
    let nextPhoto = document.getElementById('next')
    
    prevPhoto.addEventListener('click',function(event){
        event.preventDefault();
    
        currentPhoto--;
        if(currentPhoto < 0){
            currentPhoto=myphotos.length-1;
        }
    
      swapPhoto();
    })
    
    nextPhoto.addEventListener('click', function(event){
        event.preventDefault();
        currentPhoto++;
    
        if(currentPhoto > myphotos.length-1){
            currentPhoto = 0;
        }
    
        swapPhoto();
       
    })
    
    function swapPhoto(){
        let newSlide = document.createElement('img');
        newSlide.src=`slides/${myphotos[currentPhoto]}`;
        newSlide.className='fadeinimg'
        container.appendChild(newSlide);
    
        if(container.children.length>2){
            container.removeChild(container.children[0]);
        }
    
    
        }
    
    
    })();