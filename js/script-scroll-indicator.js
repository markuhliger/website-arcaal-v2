//SCROLL INDICATOR AZUL
window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-line");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  });
  
   //javascript for the navigation bar effects on scroll
   window.addEventListener("scroll", function(){
    var header = document.querySelector("heade");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

