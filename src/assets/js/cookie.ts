window.o2.cookie =
{
	set(name: string, value: any, options: any = {}): void
	{
		if(!options.path)
			options.path = '/';

		if (options.expires instanceof Date)
			options.expires = options.expires.toUTCString();

		let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

		for (let optionKey in options)
		{
			updatedCookie += "; " + optionKey;
			let optionValue = options[optionKey];
			if (optionValue !== true)
			{
				updatedCookie += "=" + optionValue;
			}
		}

		document.cookie = updatedCookie;
	},
	get(name: string)
	{
		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	},
	delete(name: string)
	{
		this.set(name, "", {
			'max-age': -1
		});
	},
};