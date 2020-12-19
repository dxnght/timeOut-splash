// adding js code that changing  class of 
// splash div and makes it "disapear"
 

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
	setTimeout(() => {
		splash.classList.add('display-none')
	}, 2500)
})


