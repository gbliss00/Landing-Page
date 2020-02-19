// select all sections by applying querySelectorAll

let pageSections = document.querySelectorAll('section');

// select parent for nav list items

let parentUL = document.querySelector('#navbar__list');

// Build menu and create the nav list
let posArray = [];

pageSections.forEach((element, ind) => {
	let listInfo = element.getAttribute('data-nav');
	console.log(listInfo);

	let listIt = document.createElement('li');

	// Scroll to section on link click
	listIt.innerHTML = `<a href="#section${ind + 1}" id="s${ind + 1}">${listInfo}</a>`;

	parentUL.appendChild(listIt);
});

let half_window_height = window.innerHeight / 2;

// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll', () => {
	posArray = [];
	pageSections.forEach((element, ind) => {
		let pos = element.getBoundingClientRect().top;
		posArray.push(pos);
	});

	let firstValue = posArray.find((el) => el > 0);
	let firstIndex = posArray.findIndex((el) => el > 0);

	// Set sections as active
	for (let j = 0; j < pageSections.length; j++) {
		if (j === firstIndex && firstValue < half_window_height) {
			document.getElementById(`s${j + 1}`).classList.add('highlighted');
			document.getElementById(`section${j + 1}`).classList.add('my-active-class');
		} else {
			document.getElementById(`s${j + 1}`).classList.remove('highlighted');
			document.getElementById(`section${j + 1}`).classList.remove('my-active-class');
		}
	}
});

//Get the button:
mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
