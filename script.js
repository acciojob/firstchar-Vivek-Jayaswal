function firstChar(text) {
  // your code here
	let str = text.trim();
	if (str === "") {
		return '';
	}
	else{
		return str.charAt(0);
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
