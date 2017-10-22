

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];
var counter = 0;

var checkForMatch = function() {
		if (cardsInPlay.length === 2) {
		if ( cardsInPlay[0] === cardsInPlay[1] ) {
			counter++;
			// resetBoard();
			alert("You've found a match! Your score is " + counter);
		} else {
			alert("Sorry, please try again. Your score is " + counter);
			// resetBoard();
		} 
	}
};

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped a " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

// var resetBoard = function () {
// 	for (var i = 0; i < card.length; i++) {
// 		document.getElementsByTagName("img")[i].setAttribute("src", "image/back.png");
// 	};
// 	cardsInPlay = [];
// };

// var resetButton = function () {
// 	document.getElementById("reset").addEventListener("click", resetBoard);
// 	counter = 0;
// }; 

createBoard();


