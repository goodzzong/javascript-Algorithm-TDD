

const solve = (str) => {
	const stack = [];
	let count = 0;

	[...str].reduce((acc, cur, i) => {
		if (cur === '(') {
			stack.push(cur);
		} else {
			stack.pop();
			if (acc === '(') {
				count += stack.length;
			} else {
				count += 1;
			}
		}

		return acc = cur;
	}, '');

	return count;
}

const bracket = (str1, str2) => {
	return str1 + str2 === "()" ? true : false;
};

test("iron Stick", () => {
	expect(solve("()(((()())(())()))(())")).toBe(17);
	expect(solve("(()()())")).toBe(4);
	expect(bracket("(", ")")).toBe(true);
	expect(bracket("(", "(")).toBe(false);
});