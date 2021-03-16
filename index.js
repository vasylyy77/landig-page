let next = document.querySelector('.slaider__sp-right')
let prev = document.querySelector('.slaider__sp-left')
let wrap = document.querySelector('.slaider__wraper')
let ling = 0
console.log(prev)
  prev.addEventListener('click',()=>{
    ling = ling - 800 
    console.log(ling)
      if(ling > -9000){
          
           wrap.style.marginLeft = ling +'px'
         
      }else{
          ling = 0
      }

      
      
  })
  next.addEventListener('click',()=>{
    ling = ling + 800 
    console.log(ling)
      if(ling <800){
          
         wrap.style.marginLeft = ling +'px'
         
      }else{
          ling = 0
      }

      
        
  })
 
  
  function v (){
    ling = ling - 800 
    console.log(ling)
      if(ling > -9000){
          
           wrap.style.marginLeft = ling +'px'
         
      }else{
          ling = 0
      }

console.log('f')
   }
 
    setInterval(() => {
      v()
        }, 2000)


        let video = document.querySelector('.start__btn-video')
        let mod = document.querySelector('.start__mod')
        let vid = document.querySelector('.start__mod-sp')
        video.addEventListener('click', ()=>{
            mod.classList.add('active')
        })
       vid.addEventListener('click', ()=>{
            mod.classList.remove('active')
        })
        