const requestModal = document.querySelector('.new-request');
const requestList = document.querySelector('.add-request');
const requestForm = document.querySelector('.new-request form');

// open request modal 
requestList.addEventListener('click', () => {
	requestModal.classList.add('open');
});

// close request modal 
requestModal.addEventListener('click', (e) => {
	if (e.target.classList.contains('new-request')) {
		requestModal.classList.remove('open');
	}
});

// add a new request
requestForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const addRequest = firebase.functions().httpsCallable('addRequest');
	addRequest({
		text: requestForm.request.value
	})
	.then(() => {
		requestForm.reset();
		requestModal.classList.remove('open');
		requestForm.querySelector('.error').textContent = '';
	})
	.catch(err => {
		requestForm.querySelector('.error').textContent = err.message;
	});
});