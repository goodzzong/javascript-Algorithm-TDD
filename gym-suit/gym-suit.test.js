const solve = (n, lost, reserve) => {

	let newLost = overlap(lost, reserve);
	let newReserve = overlap(reserve, lost);

	newReserve.forEach((v, i) => {
		// const lostNumber = indexCheck(v, newLost);
		const lostValue = valueCheck(v, newLost);
		if (lostValue > -1) {
			//	newLost.splice(lostNumber, 1);
			newLost = newLost.filter(v => v !== lostValue);
		}
	});

	return n - newLost.length;
}

const indexCheck = (number, arr) => {
	return arr.indexOf(number - 1) > -1 ? arr.indexOf(number - 1) : arr.indexOf(number + 1) > -1 ? arr.indexOf(number + 1) : -1;
}

const valueCheck = (val, arr) => {
	return arr.includes(val - 1) ? val - 1 : arr.includes(val + 1) ? val + 1 : -1;
};

const overlap = (arr1, arr2) => {
	return arr1.filter(v => !arr2.includes(v));
};

test("gym-suit", () => {
	expect(solve(5, [2, 4], [1, 3, 5])).toEqual(5);
	expect(solve(7, [2, 3, 4], [1, 2, 3, 6])).toEqual(6);
	expect(indexCheck(1, [2, 4])).toEqual(0);
	expect(solve(5, [2, 4], [3])).toEqual(4);
	expect(solve(3, [3], [1])).toEqual(2);

	expect(overlap([2, 3, 4], [1, 2, 3, 6])).toEqual([4]);
});