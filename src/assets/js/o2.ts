/**
 * инициализация всех инициализаций
 */
$(document).ready(function(): void
{
	window.o2.init();
	window.o2.inputPlaceholders();
	window.o2.slider.init();
	window.o2.footer.init();
	window.o2.gCheckBox.init();
});

/**
 * основной объект
 */
window.o2 =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init(): void
	{
	},
	/**
	* отслеживание клика вне блока
	*/
	clickOutside(element, callback): any
	{
		const outsideChecker = (event) =>
		{
			const container = $(element);

			if (!container.is(event.target) && container.has(event.target).length === 0)
			{
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};

		document.addEventListener('click', outsideChecker);

		return outsideChecker;
	},
	inputPlaceholders: function() {
		let inputPlaceholders = document.querySelectorAll<HTMLInputElement>(".inputPlaceholders");

		function updatePlaceholders() {
			inputPlaceholders.forEach(function(input) {
				if (window.matchMedia("(max-width: 480px)").matches) {
					input.setAttribute("placeholder", input.dataset.mobilePlaceholder);
				} else {
					input.setAttribute("placeholder", input.dataset.desktopPlaceholder);
				}
			});
		}

	updatePlaceholders();
	window.onresize = updatePlaceholders;
},
};