


const briefElement = document.querySelector('.js-brief');

const infoElement = document.querySelector('.container');

const inputElement = document.querySelector('.js-input');


const entryElement = document.querySelector('.js-entry');
entryElement.addEventListener("click", ()=>{
    const name = inputElement.value;
    console.log(name)
    
    const nameElement = document.querySelectorAll('.name');
    nameElement.forEach((names)=>{
    
        names.innerHTML = name;
    })
    
  setTimeout(()=>{
      briefElement.style.display = 'none';
    infoElement.style.display = 'flex';
  },1500)
    
    
});





const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

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


/* 
entryElement.addEventListener("click", ()=>{
    const name = inputElement.value;
    const html1 = `
    <div class="first">
        <h1>Hi there, ${name} </h1>
        <p>
            Here's what you have to do to start getting paid just for making calls
        </p>
        <p>
            Your duty as <b>Tech MEDICS'</b> outreach personnel will be to get in touch with potential clients and get paid per deal closed.
        </p>
        <button class="next1">Next</button>
     </div>
    `
    briefElement.innerHTML = html1;
});

const next1Element = document.querySelector('.next1');

next1Element.addEventListener("click", ()=>{
    const html2 = `
    hello
    `
    briefElement.innerHTML = html2
}) */
