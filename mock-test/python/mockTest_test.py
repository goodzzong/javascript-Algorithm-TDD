import pytest

patterns = [
	[1, 2, 3, 4, 5],
	[2, 1, 2, 3, 2, 4, 2, 5],
	[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
];

def isCorrect(pattern, answer, index):
    return answer == pattern[index % len(pattern)]

def exam(answers):
    scores = [0,0,0];
    for i, pattern in enumerate(patterns):
      for answer_index, answer in enumerate(answers):
        if isCorrect(pattern, answer, answer_index):
          scores[i] += 1 
        else:
          scores[i]
    maxValue = max(scores);
   
    result = [];
    for i in range(len(scores)):
      if scores[i] == maxValue:
        result.append(i + 1) 
    
    return result

def test_exam():
    assert exam([1, 3, 2, 4, 2]) == [1, 2, 3]
