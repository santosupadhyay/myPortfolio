const containerEl = document.querySelector('.container');

const headerEl = document.querySelector('.header');


window.addEventListener('scroll', () => {
    console.log(window.scrollY)
   if(window.scrollY > containerEl.offsetTop - headerEl.offsetHeight - 50){
        containerEl.classList.add('active');
   }else{
    containerEl.classList.remove('active');
   }
})

