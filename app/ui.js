// // const div = document.querySelector('.box')

const elems = document.querySelectorAll('.box') ;

elems.forEach(element =>  {
    let qimg = document.createElement('img') //quest img
    qimg.className = 'quest'
    qimg.src = "assets/flag png/icon tanda tanya.png" ;  
    
    let fimg = document.createElement('img') // flag img
    fimg.className = 'flag'
    fimg.src = "assets/flag png/argentina.png" ;  
    fimg.style.display = 'none'

    element.appendChild(qimg) ; element.appendChild(fimg) 
})

elems.forEach(element => element.addEventListener('click', e => { 
    if(!element.classList.contains('rotate')){
        element.classList.add('rotate')
        function show(){
           element.querySelector('.flag').style.display = 'block';
        }
        function hide(){
           element.querySelector('.quest').style.display = 'none';
        } 
    } 
    else {
        element.classList.remove('rotate')
        function hide(){
            element.querySelector('.flag').style.display = 'none';
        }
        function show(){
            element.querySelector('.quest').style.display = 'block';
        }
        
    } 
    setTimeout(show, 300);
    setTimeout(hide, 290);  
})) 

