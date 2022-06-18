const hamburger = document.querySelector('.hamburger'),
	closed = document.querySelector('.close'),
	menu = document.querySelector('.menu'),
	overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	overlay.classList.add('active');
});

closed.addEventListener('click', () => {
	menu.classList.remove('active');
	overlay.classList.remove('active');
});
