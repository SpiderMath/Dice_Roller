function run() {
	const imgElement = document.getElementById("img")
	imgElement.innerHTML = "<img class=\"center\" src=\"../Assets/rolling-dice.gif\" alt=\"Rolling Dice GIF\"></img>";
	const buttonElem = document.getElementById("button");
	const resultElem = document.getElementById("result");

	buttonElem.innerHTML = "";
	resultElem.innerHTML = "";

	setTimeout(() => {
		imgElement.innerHTML = "<img class=\"center\" src=\"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2017%2F01%2FCongratulations-GIF-Image-for-Whatsapp-and-Facebook-27-1.gif&f=1&nofb=1\" alt=\"Congratulatory GIF\">";

		resultElem.innerHTML = `<p style="text-align: center;"><b>Congratulations! The dice fell on: <i>${[1, 2, 3, 4, 5, 6][Math.floor(Math.random() * 6)]}</i></b></p>`

		buttonElem.innerHTML = "<button id=\"btn\" onClick=\"run()\">Try Again?</button>"
	}, 5 * 1000);
}