"use strict";var e,t,c,l,s,i;e=document.getElementById("burger"),t=document.getElementById("navside"),c=document.getElementById("close__btn"),e.addEventListener("click",(function(){t.classList.add("nav-active")})),c.addEventListener("click",(function(){t.classList.remove("nav-active")})),document.addEventListener("mouseup",(function(e){e.target!==c&&e.target!==t&&t.classList.remove("nav-active")})),l=document.getElementById("icon_btn"),s=document.body,"enabled"===localStorage.getItem("light")?s.classList.add("light"):s.classList.remove("light"),l.addEventListener("click",(function(){s.classList.contains("light")?(s.classList.remove("light"),localStorage.setItem("light","disabled")):(s.classList.add("light"),localStorage.setItem("light","enabled")),"enabled"===localStorage.getItem("light")?s.classList.add("light"):s.classList.remove("light")})),i=document.querySelector(".nav_list"),document.querySelectorAll(".nav_link").forEach((function(e){e.addEventListener("click",(function(){i.querySelector(".active").classList.remove("active"),e.classList.add("active")}))})),window.addEventListener("scroll",(function(){document.querySelector(".header__section").classList.toggle("topNav-active",scrollY>70),document.querySelector(".toUpBtn").classList.toggle("toUpBtn-active",scrollY>600)}));
//# sourceMappingURL=all.js.map
