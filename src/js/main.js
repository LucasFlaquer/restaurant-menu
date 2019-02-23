const list = document.querySelectorAll('.side-menu--list');
$(document).ready(function () {
	change();
});


function change() {
	let item = $('.side-menu--item a');
	item.on('click', function() {
		let href = $(this).attr('href');
		console.log(href);
		console.log($(this));

		// $(href).toggleClass('active');
		// console.log($(href));
		// let target = href.replace('#', '');
		// console.log(target);
	});
}