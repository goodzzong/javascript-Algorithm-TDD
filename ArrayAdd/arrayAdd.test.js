/* global describe expect require it */
const solution = require('./arrayAdd');

describe('배열 더하기 테스트', () => {
	it('테스트', () => {
		const arr1 = [[1, 3], [2, 4]];
		const arr2 = [[3, 2], [5, 2]];
		const result = [[4, 5], [7, 6]];
		expect(solution(arr1, arr2)).toEqual(result);
	})
})