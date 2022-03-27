const menuBtn = document.querySelector('#open-menu-btn');
const closeMenu = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');

// Open Nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display="block";
  menuBtn.style.display="none";
  closeMenu.style.display="inline-block";
})

// Close Nav

const closeNav = () => {
  menu.style.display="none";
  menuBtn.style.display="inline-block";
  closeMenu.style.display="none";
}

closeMenu.addEventListener("click", closeNav);

// close nav menu when menu items are clicked
if(window.innerWidth < 1024) {
  document.querySelectorAll(".nav__menu li a").forEach(navItem => {
    navItem.addEventListener("click", closeNav);
  })
}

// change navbar styles on scroll
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
})


// Fetch testimonials from the testimonials array
const fetchTestimonials = () => {
  let testimonialsContainer = document.querySelector(".testimonials__container");
  testimonialsContainer.innerHTML = "";

  // loop through array ans print testimonials
  testimonials.forEach(testimonial => {
    const newTestimonial = document.createElement(`article`);
    newTestimonial.className = `testimonial`;
    newTestimonial.innerHTML = `
    <p>"${testimonial.quote}"</p>
    <div class="testimonial__client">
      <span class="avatar">
        <img src="./images/${testimonial.avatar}.jpg">
      </span>

      <div class="testimonial__work">
        <p><b>${testimonial.name}</b></p>
        <small>${testimonial.title}</small>
      </div>
    </div>
    `;

    testimonialsContainer.append(newTestimonial);
  })

}


window.addEventListener("load", fetchTestimonials);
