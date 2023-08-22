const container=document.getElementById('container');

container.addEventListener('mouseover' , function(){
    container.style.flexDirection='column-reverse'
});

container.addEventListener('mouseout' , function(){
    container.style.flexDirection='column'
});