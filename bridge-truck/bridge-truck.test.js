/*
	다리(스택)의 길이는 주어진 다리의 길이의 수
	다리를 다 지난 트럭과 대기 트럭이 같을 때 까지 반복 하며 카운트를 구한다.
	대기트럭에서 한개씩 꺼내와서 다리위에 올린다.
	올린 트럭은 다리의 길이를 넘을 수 없고 다리의 무게를 초과할수 없다.

	다리의 길이를 확인 후 다리에 트럭을 올린다 

*/

const bridgeWeightCheck = (weight, bridge, truck) => {
	return bridge.reduce((a, c) => a + c, truck) <= weight ? true : false;
};

const solution = (bridge_length, weight, truck_weights) => {
	const bridge = Array(bridge_length).fill(0);
	let time = 0;
	let sum = 0;

	for (let i = 0; ; i++) {
		sum -= bridge.shift();
		const truck = truck_weights.shift();


		if (sum + truck <= weight) {
			sum += truck;
			bridge.push(truck);
		} else {
			bridge.push(0);
			truck_weights.unshift(truck);
		}


		time++;

		if (bridge.length <= 0 || sum <= 0) {
			break;
		}
	}

	return time;
};



// const solution = (bridge_length, weight, truck_weights) => {

// 	const bridge = Array(bridge_length).fill(0);
// 	let time = 0;
// 	let sum = 0;

// 	while (truck_weights.length > 0 || sum > 0) {
// 		sum -= bridge.pop();
// 		if (sum + truck_weights[0]<= weight) {
// 			sum += truck_weights[0];
// 			bridge.unshift(truck_weights.shift());
// 		} else {
// 			bridge.unshift(0);
// 		}
// 		time++;
// 	}

// 	return time;
// };

test("solving problem", () => {
	expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
	expect(solution(100, 100, [10])).toBe(101);
	expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(110);

});