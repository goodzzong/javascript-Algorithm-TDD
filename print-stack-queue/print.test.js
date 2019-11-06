
function print(priorities = undefined, location = undefined) {
	if (!priorities || !priorities.length) return null;

	const printList = priorities.map((v, i) => ({
		check: i === location,
		value: v
	}));
	const result = [];
	const printMe = x => x['check'];

	while (printList.length > 0) {
		let first = printList.shift();
		if (printList.some(val => val['value'] > first['value'])) {
			printList.push(first);
		} else {
			result.push(first);
		}
	}
	//console.log(result);
	return result.findIndex(printMe) + 1;
}

test("Print", () => {

	expect(print([])).toBeNull();
	expect(print([1, 2, 3, 4], 0)).not.toBeNull();
	expect(print([2, 1, 3, 2], 2)).toEqual(1);
	expect(print([1, 1, 9, 1, 1, 1], 0)).toEqual(5);
	expect(print([1, 2, 3, 4, 5], 2)).toEqual(3);

});
// 중요한 문서를 우선 프린트 할 수 있는 프린터다.
// 인쇄 요청이 들어온 순서대로 인쇄 queue
// 제일 앞 문서를 추출 뒤에 있는 것들 중에 중요한게 한개라도 있으면 제일 앞 문서는 제일 뒤로 변경.
// 우선 순위가 높은게 먼저 인쇄
// 작업목록이 있는 배열을 생성하고 넣어준다.
// location 값을 저장한다.
// 제일 앞의 값을 꺼낸다.
// 꺼낸 값과 작업목록의 값들과 비교한다.
// 꺼낸 값이 크면 인쇄 or 꺼낸 값이 작으면 맨뒤로 push
// 재정열이 완료된 목록에서 저장된 로케이션이 언제 프린트 될지 체크한다.