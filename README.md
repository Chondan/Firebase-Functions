# Firebase Functions

## Firebase 
- admin sdk
	- if we want to interact with firestore database inside cloud functions, we need to require an admin sdk.
	- admin sdk allows us basically to interact with firestore.

## Types of Cloud Functions
- Background Triggers -> we're not sending a response to a client but still need to return a value or promise.
	- database events
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