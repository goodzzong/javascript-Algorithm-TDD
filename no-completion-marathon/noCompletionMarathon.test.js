import solution from "./noCompletionMarathon";

describe('No Completion Marathon', () => {
	it('participant check', () => {
		const participant = ["leo", "kiki", "eden"];
		const completion = ["eden", "kiki"];
		expect(solution(participant, completion)).toBe("leo");
	});

	it('participant check2', () => {
		const participant = ["mislav", "stanko", "mislav", "ana"];
		const completion = ["stanko", "ana", "mislav"];
		expect(solution(participant, completion)).toBe("mislav");
	});
});

