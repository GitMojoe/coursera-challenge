(function(){
    'use strict'
    
    
    let convertType = 'miles';
    
    const convertForm = document.getElementById('convert');
    const answerDiv = document.getElementById('answer');
    const heading = document.querySelector('h1');
    const topic = document.querySelector('p');
    
    document.addEventListener('keydown', function(event){
    
        let key = event.code;
    
            if(key ==='KeyK'){
                convertType ='kilometers';
                heading.innerHTML = 'Miles to Kilometers Convertor'
                topic.innerHTML ='Type in a number of miles and click the button to convert the distance to kilometers';
                
            }else if(key ==='KeyM'){
            convertType = 'miles';
            heading.innerHTML = 'Kilometers to Miles Convertor'
            topic.innerHTML ='Type in a number of Kilometers and click the button to convert the distance to miles';
            }
        
    })
    
    
    convertForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    
    if(distance){
        
        if(convertType === 'kilometers'){
            const conversion = (distance * 1.60934).toFixed(3);
    
            answerDiv.innerHTML=`<h2>The unit ${distance} miles converted to kilometers is ${conversion}kilometers</h2>`
        }else if(convertType==='miles'){
            const conversion = (distance * 0.621371).toFixed(3);
            answerDiv.innerHTML = `<h2>The unit ${distance}kilometers converted to miles is ${conversion}miles</h2>`
        }
    }else{
        answerDiv.innerHTML ='<h2>Please input a value</h2>'
    }
    
    
    })
    
    
    })();