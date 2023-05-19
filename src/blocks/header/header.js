o2.header = {
	init:function()
	{
		this.inputHeader();
	},
	modalSearch: function(event)
	{
		let modalSearch = document.querySelector(".header-search__modal");
		modalSearch.classList.add('active');
	},
	modalLocal:function(event)
	{
		let modalLocal = document.querySelector(".header-local__modal");
		let textLocal = document.querySelector(".header-top__location");
		modalLocal.classList.add('active');
		textLocal.classList.add('active');
	},
	modalLocalClose:function()
	{
		let modalLocal = document.querySelector(".header-local__modal");
		modalLocal.classList.remove('active');
	},
	inputHeader: function()
	{
		let inputHeader = document.querySelector(".header-center__search-input");
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
	hideElement:function(element)
	{
		let modalSearch = document.querySelector(".header-search__modal");
		let inputHeader = document.querySelector(".header-center__search-input");
		let modalLocal = document.querySelector(".header-local__modal");
		let textLocal = document.querySelector(".header-top__location");

		let clickedElement = event.target || event.srcElement;
		let isClickInsideTarget = isDescendant(clickedElement,element);
		let isClickInsideTargetLocal = isDescendant(clickedElement,element);

		if(!isClickInsideTarget)
		{
			modalSearch.classList.remove('active');
		}
		if(!isClickInsideTargetLocal)
		{
			modalLocal.classList.remove('active');
			textLocal.classList.remove('active');
		}


		function isDescendant(child,parent)
		{
			let node = child.parentNode;
			while(node != null)
			{
				if(node === parent)
				{
					return(true);
				}
				node = node.parentNode;
			}
			return(false);
		}

	}
};