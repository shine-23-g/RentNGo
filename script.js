//navbar click section// 
const sections = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".navlink");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 

    const targetId = link.getAttribute("href").substring(1); // remove the '#'

    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add("active"); 
      } else {
        section.classList.remove("active"); 
      }
    });
  });
});

// Navbar menu toggle
const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");
const menu = document.querySelector(".menu");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Optional: close menu when clicking a link
document.querySelectorAll(".navlink").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});


// Hero buttons//
document.getElementById("carBtn").addEventListener("click", e => {
  e.preventDefault();
  document.querySelectorAll(".page").forEach(sec => sec.classList.remove("active"));
  document.getElementById("Cars").classList.add("active");
  document.getElementById("Cars").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("bookNowBtn").addEventListener("click", e => {
  e.preventDefault();
  document.querySelectorAll(".page").forEach(sec => sec.classList.remove("active"));
  document.getElementById("BookNow").classList.add("active");
  document.getElementById("BookNow").scrollIntoView({ behavior: "smooth" });
});

//scroll herp//
// Select all elements with reveal classes
const revealElements = document.querySelectorAll('.reveal-left, .reveal-up, .reveal-scale');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    // Check if element is in viewport
    if (elementTop < windowHeight && elementBottom > 0) {
      el.classList.add('show'); // Add animation class
    } else {
      el.classList.remove('show'); // Remove class when element is out of viewport
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

window.addEventListener('load', revealOnScroll);
const heroImg = document.querySelector('.hero-img');

function animateOnScroll() {
  const windowHeight = window.innerHeight;

  const imgTop = heroImg.getBoundingClientRect().top;
  const imgBottom = heroImg.getBoundingClientRect().bottom;

  if(imgTop < windowHeight && imgBottom > 0){
    heroImg.classList.add('show'); // slide in
  } else {
    heroImg.classList.remove('show'); // reset for repeat
  }
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


//car details//
function openDetails(card) {
  let details = card.nextElementSibling;

  while (details && !details.classList.contains("details-overlay")) {
    details = details.nextElementSibling;
  }

  if (details) {
    details.classList.add("active");
  }
}

function closeDetails(btn) {
  btn.closest(".details-overlay").classList.remove("active");
}


//book now section custom hrs//
function customHours() {
  const select = document.getElementById("duration");
  const customInput = document.getElementById("customInput");

  if (select.value === "custom") {
    customInput.style.display = "block"; 
    customInput.focus(); 
  } else {
    customInput.style.display = "none"; 
    customInput.value = ""; 
  }
}


