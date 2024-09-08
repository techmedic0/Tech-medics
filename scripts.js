



const displayButton = document.querySelector('.menu');
const navElement = document.querySelector('.nav');

displayButton.onclick = ()=>{
    if (navElement.style.display === 'flex') {
        navElement.style.display = 'none';
        navElement.classList.remove('nav-display');
        displayButton.style.color = 'navy';
        displayButton.style.textShadow = ''
    } else {
        navElement.style.display = 'flex';
        navElement.classList.add('nav-display')
        displayButton.style.color = 'gold';       displayButton.style.textShadow = '0 0 5px navy'
    }
}


window.addEventListener('click', (event)=> {
    if (!displayButton.contains(event.target)) {      
            navElement.style.display = 'none';
            displayButton.style.color = 'navy';
            displayButton.style.textShadow = ''
    }    
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const offerElement = document.querySelector('.offer');

const offer1Element = document.querySelector('.offer1');

count = 0;

//offer1Element.style.display = 'none';

function change() {setInterval(()=> {
    offer1Element.style.display = 'none';
    offerElement.style.display = 'block';
       setTimeout(()=>{
    
      offer1Element.style.display ='block';
      offerElement.style.display = 'none'
    }, 3000)
    count ++;
}, 6000)}

change();


const yearElement = document.querySelector('.year');
const today = new Date();
let year = today.getFullYear();

yearElement.innerHTML = year;



