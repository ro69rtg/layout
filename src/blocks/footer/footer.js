o2.footer = {
	init:function()
	{
		this.inputFooter();
	},

	inputFooter: function()
	{
		let inputFooter = document.querySelector(".footer__top-mailer-input");
		function updatePlaceholder()
		{
			if(window.matchMedia("(max-width:480px").matches)
			{
				inputFooter.placeholder = "Подписаться на рассылку";
			}
			else
			{
				inputFooter.placeholder = "Введите свой Email и получите скидку";
			}
		}
		updatePlaceholder();
		window.onresize = updatePlaceholder;
	},
};