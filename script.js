function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	for(let i = 0; i<length;i++){
		const randomIndex = Math.floor(Math.random()*characters.length);
		result+=characters.charAt(randomIndex);
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
