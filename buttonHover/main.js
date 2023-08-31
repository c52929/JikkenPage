'use strict';
{
  for(let i=0; i<2; i++){
    document.getElementsByClassName('moveButton')[i].addEventListener('touchstart',(event)=>{
      event.preventDefault();
      document.getElementsByClassName('moveButton')[i].classList.add('hover');
    })
    document.getElementsByClassName('moveButton')[i].addEventListener('touchend',(event)=>{
      event.preventDefault();
      document.getElementsByClassName('moveButton')[i].classList.remove('hover');
    })
  }
}
