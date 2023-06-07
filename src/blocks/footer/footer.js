o2.footer = {
	init()
	{
		let footerBlock = document.querySelectorAll(".footer__center-block--toggle");
		for (let i = 0;i < footerBlock.length;i++)
		{
			footerBlock[i].onclick = this.footerBlockOpen.bind(this,footerBlock[i]);
		}
	},
	footerBlockOpen(block)
	{
		if (window.matchMedia("(max-width: 768px)").matches)
		{
			let footerBlockList = block.querySelector(".footer__center-block-list");
			block.classList.toggle("open");
			block.querySelector(".footer__center-block-list").classList.toggle("open");
		}
	}
};