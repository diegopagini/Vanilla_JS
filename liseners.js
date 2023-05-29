/** @format */

export const listeners = () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', (event) => {
		const name = form.elements.name.value;
		const password = form.elements.password.value;

		console.log(name, password);
		event.preventDefault();
	});
};
