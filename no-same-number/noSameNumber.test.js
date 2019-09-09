const solution = require('./noSameNumber');

describe('같은 숫자는 싫어', () => {
	it('[1, 1, 3, 3, 0, 1, 1]', () => {
		const arr = [1, 1, 3, 3, 0, 1, 1];
		expect(solution(arr)).toEqual([1, 3, 0, 1]);
	})

	it('[1, 1, 3, 3, 0, 1, 1]', () => {
		const arr = [4, 4, 4, 3, 3];
		expect(solution(arr)).toEqual([4, 3]);
	})

})