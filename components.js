/** @format */

const body = document.querySelector('body');
const form = document.createElement('form');

export const createForm = () => {
	// Form
	form.setAttribute('class', 'form');
	body.appendChild(form);

	// Name
	const nameDiv = document.createElement('div');
	const nameInput = document.createElement('input');
	nameInput.type = 'text';
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('placeholder', 'Name');
	const nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'name');
	nameLabel.innerText = 'Set your name';
	nameDiv.append(nameLabel, nameInput);

	// Password
	const passwordDiv = document.createElement('div');
	const passwordInput = document.createElement('input');
	passwordInput.type = 'password';
	passwordInput.setAttribute('id', 'password');
	passwordInput.setAttribute('placeholder', 'Password');
	const passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	passwordLabel.innerText = 'Set your password';
	passwordDiv.append(passwordLabel, passwordInput);

	// Button
	const submitDiv = document.createElement('div');
	const button = document.createElement('button');
	button.setAttribute('type', 'submit');
	button.innerText = 'Submit';
	submitDiv.appendChild(button);

	form.append(nameDiv, passwordDiv, submitDiv);
};
