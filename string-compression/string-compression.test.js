/*
	1. 주어진 문자열의 갯수를 구한다.
	2. 갯수의 중간 숫자를 구한다.
	3. 구한 중간 숫자길이 만큼 처음부터 문자열을 추출하여 같은 값을 체크한다.
	4. 중복되는 값이 나온것을 비교하여 가장 짧은것을 구한다.
		4.1 1부터 중간값까지 반복하여 체크
*/

const solution = s => {
	const range = [...Array(Math.floor(s.length / 2))].map((_, i) => i + 1);
	return Math.min(...range.map(i => compress(s, i).length));
};

const compress = (s, n) => {
	const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
	console.log(n);
	console.log(chunk(s, n))
	console.log(chunk(s, n).reduce(
		([a, l, c], e) => {
			if (e === l) {
				console.log(`e === l`, [a, l, c + 1]);
			} else {
				console.log(`e !== l`, [make([a, l, c]), e, 1]);
			}

			return e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]
		}, ['', '', 0]
	))
	return make(
		chunk(s, n).reduce(
			([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
			['', '', 0]
		)
	);
};

const chunk = (s, n) => {
	return s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
}
test('string count check', () => {
	expect(solution("aabbaccc")).toBe(7);
});
