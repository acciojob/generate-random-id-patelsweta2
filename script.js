function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
	let result = '';
	for(let i = 0; i<l;i++){
		const randomIndex = Math.floor(Math.random()*characters.length);
		result+=characters.charAt(randomIndex);
	}
	return result;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
