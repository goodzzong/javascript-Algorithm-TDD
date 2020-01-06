
const stringSort = (arr, n) => {
	return arr.sort((a, b) => {
		if (a[n] === b[n]) {
			return a > b ? 1 : -1;
		} else {
			return a[n] > b[n] ? 1 : -1;
		}
	});
};

test('should by sort', () => {
	expect(stringSort(['sun', 'bed', 'car'], 1)).toEqual(['car', 'bed', 'sun'])
	expect(stringSort(['abce', 'abcd', 'cdx'], 2)).toEqual(['abcd', 'abce', 'cdx'])
});