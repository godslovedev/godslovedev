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



 function toggleReadMore() {
    const full = document.getElementById("full-about");
    const btn = document.getElementById("read-more-btn");

    if (full.classList.contains("hidden")) {
      full.classList.remove("hidden");
      btn.textContent = "Read Less<<";
    } else {
      full.classList.add("hidden");
      btn.textContent = "Read More>>";
    }
  }
