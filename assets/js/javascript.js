
const menuToggle = document.querySelector('.menu-toggle');
const navMobile = document.getElementById('navMobile');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById('overlay');
const dropdownToggle = document.querySelector('.nav-mobile .dropdown-toggle');
const dropdownMobile = document.querySelector('.nav-mobile .dropdown');

/* MOBILE MENU */
menuToggle.addEventListener('click', () => {
  navMobile.classList.add('open');
  overlay.classList.add('show');
});

closeMenu.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

function closeNav() {
  navMobile.classList.remove('open');
  overlay.classList.remove('show');
}

/* DROPDOWN MOBILE */
dropdownToggle.addEventListener('click', () => {
  dropdownMobile.classList.toggle('open');
});

/* UNDERLINE AO CLICAR (DESKTOP) */
// document.querySelectorAll('.nav-desktop a, .dropdown-label').forEach(item => {
//   item.addEventListener('click', () => {
//     document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
//     item.classList.add('active');
//   });
  
// });

document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document
      .querySelectorAll('.dropdown-menu a')
      .forEach(a => a.classList.remove('active'));

    link.classList.add('active');
  });
});



  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');
  const images = document.querySelectorAll('.carousel-track img');

  let index = 0;
  let interval = setInterval(nextSlide, 10000);

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 10000);
  }


