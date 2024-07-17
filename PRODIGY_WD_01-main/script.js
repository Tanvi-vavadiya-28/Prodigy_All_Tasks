window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").style.backgroundColor = "#111"; // Change background color on scroll
  } else {
    document.querySelector(".navbar").style.backgroundColor = "#333"; // Revert back to original color
  }
}

const menuItems = document.querySelectorAll(".navbar a");

menuItems.forEach(item => {
  item.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#555";
  });
  item.addEventListener("mouseleave", function() {
    if (!this.classList.contains("active")) {
      this.style.backgroundColor = "";
    }
  });
});

document.getElementById("about").addEventListener("click", function() {
  document.querySelector(".navbar a.active").classList.remove("active");
  this.classList.add("active");
});

document.getElementById("services").addEventListener("click", function() {
  document.querySelector(".navbar a.active").classList.remove("active");
  this.classList.add("active");
});

document.getElementById("contact").addEventListener("click", function() {
  document.querySelector(".navbar a.active").classList.remove("active");
  this.classList.add("active");
});
