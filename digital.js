let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let db = document.querySelector('.db');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}


