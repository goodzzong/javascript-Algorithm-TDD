function solution(arr) {

	const result = [];

	/* 	
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== arr[i + 1]) result.push(arr[i])
		} 
	*/

	return arr.filter((v, i) => v != arr[i + 1]);
}

module.exports = solution;