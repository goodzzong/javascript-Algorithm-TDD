
// 1. 대문자든 소문자로 변환
// 2. 글자를 하나씩 확인해 가면서 등록해준다.
// 3. 없으면 등록 있으면 글자수의 카운트를 늘려준다.

const UpperCase = (str) => {
	return str.toUpperCase();
};

const compare = str => {
	const [...arr] = str;
	const obj = arr.reduce((acc, cur) => {

		if (!acc[cur]) acc[cur] = 1;
		else acc[cur] += 1;
		return acc;
	}, {})
	return obj['P'] === obj['Y'];
};

const solve = str => {
	const upperCaseStr = UpperCase(str);
	return compare(upperCaseStr);

};

const solve2 = str => {
	const [...arr] = str.toUpperCase();
	return arr.filter(v => v === 'P').length === arr.filter(v => v === 'Y').length
};

function numPY(s) {
	return s.match(/p/ig).length == s.match(/y/ig).length;
}

test('string check', () => {
	expect(UpperCase("pPoooyY")).toBe("PPOOOYY");
	expect(compare("PPOOOYY")).toBe(true);
	expect(solve("pPoooyY")).toBe(true);
	expect(solve2("pPoooyY")).toBe(true);
});