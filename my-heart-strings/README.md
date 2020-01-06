# 문자열 내 마음대로 정렬하기

## 문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

## 제한사항
- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

## 문제 풀이

자바스크립트 내장함수인 sort 함수를 이용하여 풀었습니다.
sort함수 내부에 comparefunction을 정의하여 조건에 맞게 정렬하여 처리하였습니다.

프로그래머스의 좋아요 많은 답
```
function solution(strings, n) {
  return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
}
```
`localeCompare` 함수는 사전순서로 정렬할 수 있게 도와주는 함수입니다.

```
const stringA = 'abc';
const stringB = 'ab';

console.log(stringA.localeCompare(stringB)); // 1

```
`localeCompare` 값이 -1 이 나온다면 
- 비교 대상의 문자열이 원래 문자열보다 사전적으로 뒤에 있다면 -1 을 반환합니다.

`localeCompare` 값이 1 이 나온다면 
- 비교 대상의 문자열이 원래 문자열보다 사전적으로 앞에 있다면 1을 반환합니다.

## 입출력 예

|strings|n|return|
|---|---|---|
|[sun, bed, car]|1|[car, bed, sun]|
|[abce, abcd, cdx]|2|[abcd, abce, cdx]|