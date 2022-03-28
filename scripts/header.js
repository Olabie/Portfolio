const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const space = document.querySelector(".space");
const logo = document.querySelector(".logoImg");
let times = 0;
links.addEventListener("click",function(e){
  const clicked = e.target.closest(".link");
  console.log(clicked)
  links.classList.remove("res-nav");
  const sec = document.querySelector(`#${clicked.dataset.sec}`);
  console.log(clicked.dataset.sec)
 const secCoords = sec.getBoundingClientRect();
 window.scrollTo(secCoords.left +window.pageXOffset,secCoords.top+window.pageYOffset - 100);
});
menu.addEventListener("click",function(){
links.classList.toggle("res-nav");
 if(times ===0)
 { 
  document.addEventListener("keydown",function(e){
    if(e.key ==='Escape')
    links.classList.remove("res-nav");
  });
 }
 times++;
});
const landObserv = new IntersectionObserver(function(entries){
    const [entry] = entries;
    if(entry.isIntersecting === false)
    header.classList.add("sticky");
    else
      header.classList.remove("sticky");
    },{root:null,threshold:0.999});
landObserv.observe(space);
