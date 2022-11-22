const nav=document.querySelector("nav")


console.log(nav);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      nav.setAttribute("id","Nav")
    } else {
      nav.removeAttribute("id")
    }
  }