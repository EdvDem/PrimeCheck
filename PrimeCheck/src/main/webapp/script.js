/**
 * 
 */
document.getElementById("checkButton").addEventListener("click", showResult);

function isPrime(number) {
	for(var divisor = 2; divisor<=number/2; divisor++) {
		if(number % divisor == 0) {
			return false;
		}
	}
	return true;
}
		
function showResult() {
	var number = parseInt(document.getElementById("number").value);
	var result = document.getElementById("output");

	if (isPrime(number)) {
		result.innerHTML = "This number is a prime";
	} else {
		result.innerHTML = "This is not a prime number";
	}
	
	try {
		if (Number.isInteger(number) == false) throw err("Please enter a valid integer");
	} catch(err) {
		result.innerHTML = "Please enter a valid integer";
	}
}