const burger = document.querySelector('.burger')
const menu = document.querySelector('#menu-open')


burger.addEventListener('click',function(){

    menu.classList.toggle('hidden')
})

const Note = document.querySelectorAll('.Note')
Note.forEach(function(e){
    e.addEventListener('click',function(){
       const noteContent = e.querySelector('path')
       noteContent.classList.toggle('fill')
    
    })
})
