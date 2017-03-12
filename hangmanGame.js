var carAnswers = [
	"AC Cars",
	"Acura",
	"Alfa Romeo",
	"Alpine",
	"Aston Martin",
	"Audi",
	"Autobianchi",
	"Bentley",
	"Blitz",
	"BMW",
	"Bugatti",
	"Buick",
	"Cadillac",
	"Chevrolet",
	"Chrysler",
	"Citroen",
	"Cizeta",
	"Datsun",
	"DMC",
	"Dodge",
	"Eagle",
	"Ferrari",
	"Fiat",
	"Ford",
	"Gillet",
	"Ginetta",
	"Holden",
	"Hommell",
	"Honda",
	"Hyundai",
	"Infiniti",
	"Isuzu",
	"Jaguar",
	"Jensen",
	"Kia",
	"Marcos",
	"Maserati",
	"Mazda",
	"McLaren",
	"Mercedes-Benz",
	"Mercury",
	"MG",
	"Mini",
	"Mitsubishi",
	"Lamborghini",
	"Lancia",
	"Land Rover",
	"Lexus",
	"Lister",
	"Lotus",
	"Nissan",
	"Opel",
	"Pagani",
	"Panoz",
	"Peugeot",
	"Plymouth",
	"Pontiac",
	"Renault",
	"Saleen",
	"Scion",
	"SEAT",
	"Shelby",
	"Spyker",
	"Subaru",
	"Suzuki",
	"Tesla",
	"Toyota",
	"Triumph",
	"TVR",
	"Vauxhall",
	"Volkswagen",
	"Volvo"
]


var win = 0;
var lose = 0;
var guessesLeft = 6;
var blanks = [];
var guessList = [];
var currentWord = null;
var gameActive = null;
var userInput;

function setWord(){
	this.currentWord = carAnswers[Math.floor(Math.random() * carAnswers.length)];
	console.log(this.currentWord);
}

function updateWinLoss(){
	document.getElementById("winCounter").innerHTML = win;
	document.getElementById("lossCounter").innerHTML = lose;
}

function updateGuessesLeft(){
	document.getElementById("guessesLeftCounter").innerHTML = guessesLeft;
}

function updateGuessList(){
	document.getElementById("guessesSofar").innerHTML = guessList.join(", ")
}

function resetGame(){
	guessesLeft = 6;
	blanks = [];
	guessList = [];
	gameActive = true;
	updateGuessList();
	updateGuessesLeft();
	setWord();
}



document.onkeyup = function(event){
	if (gameActive === true){
		userInput = String.fromCharCode(event.keyCode).toUpperCase;
	}
}

// function setGame(){
// 	console.log(currentWord);

// 	for (x = 0; x < currentWord.length; x++){
// 		if(currentWord[x] == ' '){
// 			blanks.push(' ');
// 		}

// 		else if(currentWord[x] == '-'){
// 			blanks.push('-')
// 		}

// 		else{
// 			blanks.push('');
// 		}
// 	}
// 	document.getElementById("wordPlace").innerHTML = blanks;


// 	}

// document.onkeyup = function(event) {
// 	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
// 	console.log(userInput);
// }