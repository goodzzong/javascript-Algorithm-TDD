const solution = (heights = undefined) => {
	if (!heights) {
		return null;
	}
	const result = [];

	for (let i = heights.length - 1; i >= 0; i--) {
		for (let j = i - 1; j >= 0; j--) {
			if (heights[i] < heights[j]) {
				result.unshift(j + 1);
				break;
			}
			if (j === 0) result.unshift(0);
		}
	}

	return [0].concat(result);
}

test("top", () => {
	expect(solution()).toBeNull();
	const heights1 = [7, 4];
	const result1 = [0, 1];
	expect(solution(heights1)).toBeDefined();
	console.log(solution(heights1));
	expect(solution(heights1)).toEqual(result1);
});