
const solve = (n) => {
	let result = 0;

	while (n > 0) {
		result += batteryCheck(n);
		n = Math.floor(n / 2);
	}
	return result;
}

const batteryCheck = (n) => {
	return n % 2;
};

const sovle2 = (n) => {
	let result = [...n.toString(2)];
	console.log(Array.from(n.toString(2)));
	return result.reduce((acc, cur) => acc + Number(cur), 0);
}

test('jump and teleport', () => {
	expect(batteryCheck(7)).toBe(1);
	expect(batteryCheck(3)).toBe(1);
	expect(solve(5)).toBe(2);
	expect(sovle2(5)).toBe(2);
});