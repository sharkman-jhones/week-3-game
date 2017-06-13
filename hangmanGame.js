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
var currentWord;
var gameActive = true;

/*



*/

function setWord(){
	this.currentWord = carAnswers[Math.floor(Math.random() * carAnswers.length)];
	console.log(this.currentWord.toUpperCase());
}

function updateWinLoss(){
	document.getElementById("winCounter").innerHTML = win;
	document.getElementById("lossCounter").innerHTML = lose;
}

function updateGuessesLeft(){
	document.getElementById("guessesLeftCounter").innerHTML = guessesLeft;
}

function updateGuessList(){
	document.getElementById("guessesSoFar").innerHTML = guessList;
}

function startGame(){

}

function resetGame(){
	guessesLeft = 6;
	// blanks = [];
	guessList = [];
	gameActive = true;
	updateGuessList();
	updateGuessesLeft();
	setWord();
}

function generateBlanks(){
	this.blanks = [];
	for (i=0; i < currentWord.length; i++){
		if (guessList.indexOf(currentWord[i]) === -1){
			blanks.push("_");
		}
		else {
			blanks.push(currentWord[i]);
		}

	}
	document.getElementById("wordPlace").innerHTML = blanks;

}

function replaceWord(){
	for (i=0; i < currentWord.length; i++){
		if (guessList.indexOf(currentWord[i]) !== -1){
				blanks[i].replace(blanks[i], currentWord[i]);
		}
	}
}

setWord();
generateBlanks();

document.onkeyup = function(event){
	if (gameActive === true){
		var userInput = String.fromCharCode(event.keyCode);
		guessList.push(userInput);
		updateGuessList();
		replaceWord();
	}
}