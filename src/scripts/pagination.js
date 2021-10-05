const boxes = [].slice.call(document.querySelectorAll(".single-product"));
const paginationNumbersContainer = document.querySelector(".pagination-numbers");
const totalBoxes = boxes.length;
const perPage = 12;

let currentPage = 0;
let dynamicPageNumber, 
	paginationButtons, 
	wrappers;


const checkDOM = setInterval(function() {
	if (document.querySelectorAll(".pagination-button")) {
		paginationButtons = document.querySelectorAll(".pagination-button");
		clearInterval(checkDOM);
		buttonsLoaded();
		
	}
}, 0);

function buttonsLoaded() {
	paginationButtons.forEach(function(button) {
		button.addEventListener("click", function(event) {
			const clicked = event.target;
			let pageNumber = clicked.getAttribute("data-page-number");
			
			// button.getAttribute("data-page-sss");
			wrappers = document.querySelectorAll('[class*="wrapper"]');
			
			wrappers.forEach(function(wrapper) {
				wrapper.style.display = 'none';
			});
			document.querySelector(`.wrapper-${pageNumber}`).style.cssText = `display: flex;
			flex-wrap: wrap;
			justify-content: center;`;
			
			
			
			
			
			
		});
	});
}
var elements = $(".single-product");

boxes.forEach(function(box, index) {
	if (index % perPage === 0) {
		dynamicPageNumber = index / perPage + 1;
		paginationNumbersContainer.innerHTML += `<p class="pagination-button ${dynamicPageNumber} " data-page-number="${dynamicPageNumber}">${dynamicPageNumber}</p>`;
		
	}
});


for(var i = 0; i < boxes.length; i+=perPage) {
	elements.slice(i, i+perPage).wrapAll(`<div class='wrapper-${i / perPage + 1}'></div>`);
}


