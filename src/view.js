// Cache the document element outside of the function to avoid repeated DOM queries.
const body = document.documentElement;
const darkModeToggle = document.querySelector( '#theme-toggle' );

function toggleTheme() {
	// Toggle the 'theme-dark' class.
	body.classList.toggle( 'theme-dark' );

	// Update localStorage based on the presence of the class.
	window.localStorage.setItem(
		'darkMode',
		body.classList.contains( 'theme-dark' ) ? 'enabled' : 'disabled'
	);
}

// Attach the event listener.
darkModeToggle.addEventListener( 'click', toggleTheme );
