/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 	let size = preferences.length; 
	let count = 0;  
	for (let i=0; i<size; i++) { 
		let pass1 = preferences[i] - 1;
		let pass2 = preferences[pass1] - 1;
		let pass3 = preferences[pass2] - 1;
		/* if the passage is orderly these are our lovers ))) */
		if (pass3 == i) count++;			
	}
	/* triangle has three lovers / 3 = one love triangle */
	return Math.floor(count / 3);
};
