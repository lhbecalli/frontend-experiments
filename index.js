const nextButton = document.querySelector('.arrow-right')
const prevButton = document.querySelector('.arrow-left')
const list = document.querySelector('.list')
const item = document.querySelectorAll('.item')
const indicators = document.querySelectorAll('.indicators ul li')
const numberEl = document.querySelector('.indicators .number')



let active = 0;
         /* [item1, item2, item3] */
const total = item.length

    function update(direction){

        // Quando encontrar a classe active, retira a classe active 
        document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.indicators ul .active').classList.remove('active')
        if(direction>0){

            /* Se a direção for maior que 0, adiciona +1 */
            active = active + 1
            if(active === total){
                active = 0;
            }
        }   
        

        
        else if(direction < 0){
            active = active - 1
            if(active < 0){
                active = total - 1
        }
       
    }
    
        // Adiciona a classe active
       item[active].classList.add('active')
  indicators[active].classList.add('active')

  numberEl.textContent = String(active + 1).padStart(2, '0')
}
  
    

nextButton.addEventListener('click',()=>{

    // Vai para frente
    // direction > 1
    update(1)

})



prevButton.addEventListener('click',()=>{
    
    // Vai para trás
    update(-1)
})