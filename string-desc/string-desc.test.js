
const solve = (str) => {
	return [...str].sort().reverse().join('')
};

test('string desc order', () => {
	expect(solve("Zbcdefg")).toEqual("gfedcbZ");

});