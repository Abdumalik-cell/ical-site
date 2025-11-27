document.addEventListener('DOMContentLoaded', () => {
	const btns = document.querySelectorAll('.gallery__btn');

	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			btns.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
		});
	});
});
