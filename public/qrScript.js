var qrcode = new QRCode("qrcode");

function makeCode () {
	var elText = document.getElementById("text");

	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}

	qrcode.makeCode("http:10.10.66.60:8080/show/"+elText.value);
}

makeCode();

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});
