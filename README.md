# Firebase Functions

## Firebase 
- admin sdk
	- if we want to interact with firestore database inside cloud functions, we need to require an admin sdk.
	- admin sdk allows us basically to interact with firestore.
- hosting -> `firebase hosting` (command)
	- firebase uploaded the whole things in our local directory so we need to check any configurations in our local directory to match with any configuration we have changed on the 'firebase console' while developing.

## Types of Cloud Functions
- Background Triggers -> we're not sending a response to a client but still need to return a value or promise.
	- database events
		- e.g. trigger when there is a new document.
	- auth events
		- e.g. trigger when a new user signed up.
	- storage events
	- analytics events
- HTTP Triggers (can call function directly)
	- endpoint request
		- you can also use `console.log()` to bebug your code. You can see that logs on the 'Logs' tab in the Cloud Functions tab on your firebaes console.
	- callable
		- handle error: https://firebase.google.com/docs/reference

## Lesson Learned
- Material Icons: 
	- Links:
		- https://google.github.io/material-design-icons/
		- https://material.io/resources/icons/?style=baseline
	- Example: `<i class="material-icons upvote">arrow_upward</i>` -> 'arrow_upward' is a keyword that use to represent an icon.
- Open & Close Modal
```JavaScript
// open request modal 
requestList.addEventListener('click', () => {
	requestModal.classList.add('open');
});

// close request modal 
requestModal.addEventListener('click', (e) => {
	console.log(e.target);
	if (e.target.classList.contains('new-request')) {
		requestModal.classList.remove('open');
	}
});
```
- Classname toggle
```JavaScript
const modal = document.querySelector('.modal');
modal.classList.toggle('active');
```
- Vue Instance
```JavaScript
const app = new Vue({
	el: '#app',
	data: {
		requests: []
	},
	mounted() {
		const ref = firebase.firestore().collection('requests');

		ref.onSnapshot(snapshot => {
			let requests = [];
			snapshot.forEach(doc => {
				requests.push({ ...doc.data(), id: doc.id });
			});

			let html = '';
			requests.forEach(request => {
				html += `<li>${request.text}</li>`;
			});
			this.requests = requests;
		});
	}
});
```
- Google Cloud Functions - warning Avoid nesting promises promise/no-nesting: https://stackoverflow.com/questions/49844854/google-cloud-functions-warning-avoid-nesting-promises-promise-no-nesting