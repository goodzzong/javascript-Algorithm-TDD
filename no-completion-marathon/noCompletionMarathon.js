function solution(participant, completion) {
	let result = [];
	completion.forEach(v => {
		result = indexCheck2(v, participant);
	})
	return result.join('');

	// or 

	// return completion.reduce((acc, cur) => {
	// 	let index = acc.indexOf(cur)
	// 	return acc.indexOf(cur) > -1
	// 		? acc.filter((_, i) => i !== acc.indexOf(cur))
	// 		: acc;
	// }, participant).join('');


}

const indexCheck = (value, array) => {
	return array.indexOf(value);
};

const indexCheck2 = (value, array) => {
	const index = array.indexOf(value);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
};
export default solution;