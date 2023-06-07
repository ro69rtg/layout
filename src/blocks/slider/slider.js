o2.slider = {
	async init()
	{
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(function(response)
			{
				if (response.status !== 200)
				{
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function(data)
				{
					for(let i = 0;i< 2;i++)
					{
						let images = document.querySelectorAll(".slider-block__img");
						let texts = document.querySelectorAll(".slider-block__content-img-text");
						for (let i = 0; i < images.length; i++)
						{
							let img = images[i];
							img.src = data[i].url;
							let text = texts[i];
							text.innerText = data[i].title;
						}
					}
				});
			})
			.catch(function(err)
			{
				console.log('Fetch Error :-S', err);
			});

		const sliderElements = document.querySelectorAll('.slider');
		sliderElements.forEach((sliderElement) =>
		{
			this.addSlider(sliderElement);
		});
	},
	addSlider(sliderElement)
	{
		const slides = sliderElement.querySelectorAll('.slider-block');
		const dotsContainer = sliderElement.querySelector('.slider__dots-list');
		let currentSlide = 0;
		let slideWidth = 0;

		function init()
		{
			slideWidth = slides[0].offsetWidth;
			createDots();
			createButtonListeners();
			showSlide(currentSlide);

			window.addEventListener('resize', updateSliderSize);
		}

		function updateSliderSize()
		{
			slideWidth = slides[0].offsetWidth;
			const slidePosition = -currentSlide * slideWidth;
			slides.forEach((slide) =>
			{
				slide.style.transform = `translateX(${slidePosition}px)`;
			});
		}

		function createDots()
		{
			dotsContainer.innerHTML = '';
			for (let i = 0; i < slides.length; i++)
			{
				const dot = document.createElement('li');
				dot.classList.add('slider__dots-link');
				dot.onclick = function()
				{
					showSlide(i);
				};
				dotsContainer.appendChild(dot);
			}
		}

		function createButtonListeners()
		{
			const nextButton = sliderElement.querySelector('.slider__btns-right');
			const prevButton = sliderElement.querySelector('.slider__btns-left');

			nextButton.onclick = nextSlide;
			prevButton.onclick = prevSlide;
		}

		function showSlide(slideIndex)
		{
			const slidePosition = -slideIndex * slideWidth;

			slides.forEach((slide) =>
			{
				slide.style.transition = 'transform 0.5s ease';
				slide.style.transform = `translateX(${slidePosition}px)`;
			});

			dotsContainer.querySelectorAll('.slider__dots-link').forEach((dot) =>
			{
				dot.classList.remove('active');
			});

			dotsContainer.querySelectorAll('.slider__dots-link')[slideIndex].classList.add('active');

			currentSlide = slideIndex;
		}

		function nextSlide()
		{
			const nextSlideIndex = (currentSlide + 1) % slides.length;
			showSlide(nextSlideIndex);
		}

		function prevSlide()
		{
			const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
			showSlide(prevSlideIndex);
		}


		init();

	},

};