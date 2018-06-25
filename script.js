function convert() {
	inputValue = document.getElementById('myInput').value
	// alert(inputValue)

	try {
		outputValue = 2.20462 * inputValue
		document.getElementById('result').innerText = outputValue
		// alert(outputValue)
	}
	catch(err) {
		console.log(err)
		alert('Please provide valid input.')
	}
}