const slides = [
	{
		image: './img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: './img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: './img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: './img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: './img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const { createApp } = Vue
    
      createApp({
        data() {
          return {
            message: 'Hello Vue!',
            
          }
        } 
      }).mount('#app')


//const caroselloElement = document.querySelector('.carosello')


// img.forEach((el) => {
// 	let divString = `<div class="slide position-relative">
//                     	<img src="./img/${el.url}" alt="">
// 						<div class="position-absolute bottom-0  text-white p-4 info">
// 							<h2>
// 								${el.titolo}
// 							</h2>
// 							<span>
// 								${el.descrizione}
// 							</span>
// 						</div>
//                 	</div>`
// 	caroselloElement.innerHTML += divString;
// })

let indiceSlideAttiva = 0
const slideElements = document.getElementsByClassName('slide')
slideElements[0].classList.add('active')

const rightBtnElement = document.querySelector('.carosello__arrow.arrow-right')
const leftBtnElement = document.querySelector('.carosello__arrow.arrow-left')

rightBtnElement.addEventListener('click', function () {
	const slideElements = document.getElementsByClassName('slide')
	slideElements[indiceSlideAttiva].classList.add('active')

	console.log('current slide', indiceSlideAttiva)
	const lastIndex = slideElements.length - 1

	let slideCorrente = slideElements[indiceSlideAttiva]
	slideCorrente.classList.remove('active')

	if (indiceSlideAttiva < lastIndex) {
		indiceSlideAttiva += 1
	} else {
		indiceSlideAttiva = 0
	}
	//indiceSlideAttiva += 1  

	let prossimaSlide = slideElements[indiceSlideAttiva]
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})

leftBtnElement.addEventListener('click', function () {
	const slideElements = document.getElementsByClassName('slide')
	slideElements[indiceSlideAttiva].classList.add('active')

	console.log('current slide', indiceSlideAttiva)

	let slideCorrente = slideElements[indiceSlideAttiva]
	slideCorrente.classList.remove('active')

	if (indiceSlideAttiva > 0) {
		indiceSlideAttiva--
	} else {
		indiceSlideAttiva = slideElements.length - 1 //last index
	}
	//indiceSlideAttiva -= 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})