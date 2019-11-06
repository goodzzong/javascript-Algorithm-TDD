
const solve = (array, commands) => {
	return commands.map(v => numberCheck(array, v));

}
const numberCheck = (array, command) => {
	return parseInt(array
		.slice(command[0] - 1, command[1])
		.sort((a, b) => a - b).filter((_, i) => i === command[2] - 1));
}
test('K number Check', () => {
	expect(solve([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
	expect(numberCheck([1, 5, 2, 6, 3, 7, 4], [2, 5, 3])).toEqual(5);
	expect(numberCheck([1, 5, 2, 6, 3, 7, 4], [4, 4, 1])).toEqual(6);
})