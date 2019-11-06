function solve(n, map1, map2) {
	//	return [...Array(n)].map((_, i) => mergeRow(n, map1[i], map2[i]));

	// or

	return Array.from({ length: n }, (_, i) => mergeRow(n, map1[i], map2[i]));

	// or

	// const map = Array(n);
	// for (let i = 0; i < n; i++) {
	// 	map[i] = mergeRow(n, map1[i], map2[i]);
	// }
	// return map;
}

function mergeRow(n, row1, row2) {
	const row = Array(n).fill(' ');
	const binary1 = row1.toString(2);
	const binary2 = row2.toString(2);

	row.map((_, i) =>
		last(binary1, i) === '1' || last(binary2, i) === '1'
			? row[row.length - i - 1] = '#' : ''
	);

	// for (let i = 0; i < n; i++) {
	// 	if (last(binary1, i) === '1' || last(binary2, i) === '1') {
	// 		row[row.length - i - 1] = '#';
	// 	}
	// }

	return row.join('');
}

function last(sequence, index) {
	return sequence[sequence.length - (index || 0) - 1];
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

	expect(solve(6,
		[46, 33, 33, 22, 31, 50],
		[27, 56, 19, 14, 14, 10]
	)).toEqual(
		[
			"######",
			"###  #",
			"##  ##",
			" #### ",
			" #####",
			"### # "
		]
	);
});

test('mergeRow', () => {
	expect(mergeRow(5, 9, 30)).toBe('#####');
	expect(mergeRow(5, 0, 0)).toBe('     ');
	expect(mergeRow(5, 1, 0)).toBe('    #');
});

test('last', () => {
	expect(last([1, 2, 3])).toBe(3);
	expect(last([1, 2, 3], 0)).toBe(3);
	expect(last([1, 2, 3], 1)).toBe(2);
});
