function solution(participant, completion) {
	participant.sort((a, b) => a - b);
	completion.sort((a, b) => a - b);

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) return participant[i];
	}
}

export default solution;