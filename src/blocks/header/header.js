o2.header = {
	init:function()
	{
		this.inputHeader();
	},
	inputHeader: function()
	{
		let inputHeader = document.querySelector(".header__center-search-input");
		function updatePlaceholder()
		{
			if(window.matchMedia("(max-width:480px").matches)
			{
				inputHeader.placeholder = "Что будем искать?";
			}
			else
			{
				inputHeader.placeholder = "Автор, название, ISBN";
			}
		}
		updatePlaceholder();
		window.onresize = updatePlaceholder;
	},
};