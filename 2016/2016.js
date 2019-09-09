function solution(a, b) {
	const year = 2016;
	const date = new Date(year, a - 1, b);
	const weekName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

	return weekName[date.getDay()];
}
module.exports = solution;