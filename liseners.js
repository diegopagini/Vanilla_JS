/** @format */

const about = document.createElement('div');
about.setAttribute('id', 'about');
const title = document.createElement('h1');
title.innerText = 'About Page';
about.appendChild(title);

const renderPage = (page) => {
	const body = document.querySelector('body');
	body.innerHTML = '';
	body.appendChild(page);
};

export const listeners = () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', (event) => {
		const name = form.elements.name.value;
		const password = form.elements.password.value;
		console.log(name, password);
		event.preventDefault();
		renderPage(about);
	});
};
