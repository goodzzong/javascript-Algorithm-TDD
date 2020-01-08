
/*
	1. 스킬트리를 이용해 유저들이 만든 스킬트리중에
	스킬트리에 포함되어 있는 스킬들만 추출한다.

	2. 추출한 유저들이 만든 스킬트리 중에 일치하는 스킬트리가 존재하는 지 확인
	하여 그 갯수를 파악하여 값을 구한다.
*/

const includeCheck = (skill, str) => {
	return Array.from(str).filter(v => skill.includes(v)).join('');
};

const isSkill = (skill, str) => {
	return skill.includes(str);
};

const solve = (skill, skill_trees) => {
	const extractSkillTrees = skill_trees.map(v => includeCheck(skill, v));
	let answer = 0;
	return extractSkillTrees.reduce(
		(acc, cur) => {
			return skill.startsWith(cur) ? acc + 1 : acc
		},
		0
	);


	// for (const skillTree of extractSkillTrees) {
	// 	if (isSkill(skill, skillTree) && skill.startsWith(skillTree)) {
	// 		answer++;
	// 		console.log(skillTree)
	// 	}
	// }

	// return answer;
};

test('should the include check skill tree ', () => {
	expect(includeCheck("CBD", "BACDE")).toBe("BCD");
});

test('should the possible skill tree check', () => {
	expect(isSkill("CBD", "BCD")).toBe(false);
	expect(isSkill("CBD", "CBD")).toBe(true);
	expect(isSkill("CBD", "BD")).toBe(true);
});

test('solve', () => {
	expect(solve('CBD', ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
});