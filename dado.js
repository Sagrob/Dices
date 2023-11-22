function die(sides) {
	var dieResult = Math.floor((Math.random() * sides) + 1);
	var output = document.getElementById("outputDiceBox");
	output.innerHTML = dieResult;
}