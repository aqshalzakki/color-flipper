const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'blue', 'grey', 'skyblue', 'lightgreen', ];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const simpleLink = document.getElementById('simpleLink')

btn.addEventListener('click', e => {
	const randomNumber = getRandomNumber()

	console.log(randomNumber)

	document.body.style.backgroundColor = colors[randomNumber]
	color.textContent = colors[randomNumber]
})

function getRandomNumber() {
	return Math.floor( Math.random() * colors.length )
}

simpleLink.addEventListener('click', e => {
	document.body.style.backgroundColor = 'white'
	color.textContent = 'white'
})