const solve = (n, arr1, arr2) => {
	return Array.from({ length: n }, (_, i) => mergeRow2(n, arr1[i], arr2[i]));
}

const mergeRow2 = (n, row1, row2) => {
	let binary1 = "0".repeat(n - row1.toString(2).length).concat(row1.toString(2));
	let binary2 = "0".repeat(n - row2.toString(2).length).concat(row2.toString(2));
	let result = Array(n).fill(' ');

	return result.map((v, i) => binary1[i] === '1' || binary2[i] === '1' ? "#" : " ").join('');
}

test('sample', () => {
	expect(solve(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(
		[
			"#####",
			"# # #",
			"### #",
			"#  ##",
			"#####"
		]
	);
});