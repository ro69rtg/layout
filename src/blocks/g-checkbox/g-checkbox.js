o2.gCheckBox = {
	async init()
	{
		let checkBox = document.querySelectorAll(".g-checkbox__input");
		for(let i = 0; i < checkBox.length;i++)
		{
			checkBox[i].onclick = this.toggleCheckBox.bind(this,checkBox[i]);
		}
	},
	toggleCheckBox(checkBox,event)
	{
		let checkBoxValue = checkBox.parentNode.querySelector(".g-checkbox__text").innerText;
		if(event.target.checked)
		{
			console.log(`нажато : ${checkBoxValue}`);
		}
		else
		{
			console.log(`отжато : ${checkBoxValue}`);
		}
	}
};