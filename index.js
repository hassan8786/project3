const smallnav = document.getElementsByClassName('small-nav')[0]; // Assuming there's only one element with the class 'small-nav'
const menubutton = document.getElementById('s-menu');


console.log(menubutton);
let asif = false;

menubutton.addEventListener('click', () => {
  asif = true;
  if (asif) {
    smallnav.style.display = 'block';
  } else {
    smallnav.style.display = 'none';
  }
});

const navmenu = document.querySelector('.nav-menu')
navmenu.addEventListener('click',() =>{
  smallnav.style.display = 'none'
})