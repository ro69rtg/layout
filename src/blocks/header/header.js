o2.header = {
	init:function()
	{
		this.inputHeader();
	},
	modalSearch: function(event)
	{
		let modalSearch = document.querySelector(".header-search__modal");
		let backgroundPlate = document.querySelector(".backgroundPlate");
		let searchInput = document.querySelector(".header-center__search");

		modalSearch.classList.add('active');
		searchInput.classList.add('active');
		backgroundPlate.classList.add('active');
		document.body.classList.add('lock');
	},
	modalLocal:function(event)
	{
		let modalLocal = document.querySelector(".header-local__modal");
		let textLocal = document.querySelector(".header-top__location");
		let backgroundPlate = document.querySelector(".backgroundPlate");

		document.body.classList.add('lock');
		backgroundPlate.classList.add('active');
		modalLocal.classList.add('active');
		textLocal.classList.add('active');
	},
	modalCatalog:function(event)
	{
		let modalCatalog = document.querySelector("header-catalog");
		modalCatalog.classList.add('active');
	},
	modalLocalClose:function()
	{
		let modalLocal = document.querySelector(".header-local__modal");
		let backgroundPlate = document.querySelector(".backgroundPlate");
		let textLocal = document.querySelector(".header-top__location");

		modalLocal.classList.remove('active');
		textLocal.classList.remove('active');
		backgroundPlate.classList.remove('active');
		document.body.classList.remove('lock');
	},
	inputHeader: function()
	{
		let inputHeader = document.querySelector(".header-center__search-input");
		let inputFooter = document.querySelector(".footer-mailer__input");
		function updatePlaceholder()
		{
			if(window.matchMedia("(max-width:480px").matches)
			{
				inputHeader.placeholder = "Что будем искать?";
				inputFooter.placeholder = "Подписаться на рассылку";
			}
			else
			{
				inputHeader.placeholder = "Автор, название, ISBN";
				inputFooter.placeholder = "Введите свой Email и получите скидку";
			}
		}
		updatePlaceholder();
		window.onresize = updatePlaceholder;
	},
	hideModal:function(element)
	{
		let modalLocal = document.querySelector(".header-local__modal");
		let textLocal = document.querySelector(".header-top__location");
		let modalSearch = document.querySelector(".header-search__modal");
		let backgroundPlate = document.querySelector(".backgroundPlate");
		let searchInput = document.querySelector(".header-center__search");


		modalSearch.classList.remove('active');
		backgroundPlate.classList.remove('active');
		modalLocal.classList.remove('active');
		textLocal.classList.remove('active');
		document.body.classList.remove('lock');
		searchInput.classList.remove('active');

	}
};