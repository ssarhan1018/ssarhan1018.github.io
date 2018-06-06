var letterframes = [
	{ 
		transform: 'translateY(80px)',
		opacity: 0
	},
	{ 
		transform: 'translateY(-20px)', 
		opacity: 1,
		offset: 0.01
	},
	{ 
		transform: 'translateY(0)', 
		offset: 0.02,
	},
	{ 
		transform: 'translateY(0) scale(1)', 
		opacity: 1,
		offset: 0.9
	},
	{ 
		transform: 'translateY(300px) rotateZ(120deg)', 
		opacity: 0
	}
]

function wrapInSpan(text){ // split each character of text and wrap inside span tag
	return text.split('').map(letter => {
		var letter = (letter == ' ')? '&nbsp;' : letter
		return '<span>' + letter + '</span>'
	})
	.join('')
}

var header = document.getElementById('header')
var letterAnimations = [] // array of letters animation objects
var lettersArray // array of letters DOM references

header.innerHTML = (wrapInSpan(header.innerText))
lettersArray = Array.from(header.getElementsByTagName('span'))

lettersArray.map((letter, indx) =>{ // loop through lettersArray
	letterAnimations[indx] = letter.animate(letterframes, { // Call animate() on each letter and store reference to Animation() object instance
		fill: 'both',
		easing: 'ease-in',
		duration: 4000,
		delay: indx * 300
	})
})


function playLetters(){
	 return letterAnimations.map((animation) =>{ // call each animation instance play() method and return array of animation promises
		animation.play()
		return animation.finished // return promise that resolve when animation finishes
	})
}


function pauseletters(){
	letterAnimations.map((animation) =>{
		animation.cancel()
	})
}

pauseletters() // pause animation to start

Promise.all(playLetters()).then(() => { // play animation sequence and do something when they have all completed
	pauseletters() // cancel animation (so text appears again)
})

/*=============================================================================================*/


