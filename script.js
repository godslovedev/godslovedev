function openMenu() {
    document.getElementById('mobileMenu').style.left = '0';
}
function closeMenu() {
    document.getElementById('mobileMenu').style.left = '-100%';
}





const entries = document.querySelectorAll('.card ');

const observer = new IntersectionObserver((entriesList) => {
  entriesList.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

entries.forEach(el => observer.observe(el));




  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



