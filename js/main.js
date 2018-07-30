//Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial States
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		navItems.forEach(item => item.classList.add('show'));

		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'));

		showMenu = false;
	}
}

//Profession carousel

function test() {
	const reel = ['show', 'up', 'down'];
	const one = document.getElementById('one');
	const two = document.getElementById('two');
	const three = document.getElementById('three');
	let count1 = 1,
		count2 = 0,
		count3 = 2;

	setInterval(function() {
		one.classList.replace(reel[count2], reel[count1]);
		two.classList.replace(reel[count3], reel[count2]);
		three.classList.replace(reel[count1], reel[count3]);
		count3++;
		if (count3 == 3) count3 = 0;
		count2++;
		if (count2 == 3) count2 = 0;
		count1++;
		if (count1 == 3) count1 = 0;
	}, 2000);
}

window.addEventListener('load', test);
