# 쇠막대기

## 문제 설명
여러 개의 쇠막대기를 레이저로 절단하려고 합니다. 효율적인 작업을 위해서 쇠막대기를 아래에서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자릅니다. 쇠막대기와 레이저의 배치는 다음 조건을 만족합니다.

```
- 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있습니다.
- 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓습니다.
- 각 쇠막대기를 자르는 레이저는 적어도 하나 존재합니다.
- 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않습니다.
```

아래 그림은 위 조건을 만족하는 예를 보여줍니다. 수평으로 그려진 굵은 실선은 쇠막대기이고, 점은 레이저의 위치, 수직으로 그려진 점선 화살표는 레이저의 발사 방향입니다.

![쇠막대기예제이미지](https://grepp-programmers.s3.amazonaws.com/files/ybm/dbd166625b/d3ae656b-bb7b-421c-9f74-fa9ea800b860.png)

이러한 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있습니다.

```
(a) 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 '()'으로 표현합니다. 또한 모든 '()'는 반드시 레이저를 표현합니다.
(b) 쇠막대기의 왼쪽 끝은 여는 괄호 '('로, 오른쪽 끝은 닫힌 괄호 ')'로 표현됩니다.
```

위 예의 괄호 표현은 그림 위에 주어져 있습니다.
쇠막대기는 레이저에 의해 몇 개의 조각으로 잘리는데, 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘리고, 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘립니다.

쇠막대기와 레이저의 배치를 표현한 문자열 arrangement가 매개변수로 주어질 때, 잘린 쇠막대기 조각의 총 개수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- arrangement의 길이는 최대 100,000입니다.
- arrangement의 여는 괄호와 닫는 괄호는 항상 쌍을 이룹니다.

## 문제풀이
스택과 큐를 물어보는 문제 같다.

문자를 하나씩 추출해 "(" 기호이면 스택에 넣고 ")" 기호이면
스택에 제일 윗부분을 빼서 "(" 기호이면 "()" 이조합이 되니 레이저를 
쏜것이다. 그래서 스택에 남아있는 갯수가 쇠막대기가 되므로 그 갯수를 
세면 된다. 문자열을 하나씩 추출할때 ")" 기호일때 이전 문자를 확인하여
또 ")" 이면 쇠막대기가 끝난것이다. 끝날때 마지막 잘려나간 부분을 하나
더해주면 된다.

1. 문자 추출
2. "(" 기호 인지 ")" 인지 확인
   1. "(" 이면 push()
   2. ")" 이면
      1. 스택에서 제일 위의 값을 빼서 문자열이 "(" 인지 확인 하고 맞으면 스택의 갯수를 더한다.
      2. ")" 이면 쇠막대기가 끝난것이므로 마지막 숫자 하나를 더한다.

## 입출력 예

|arrangement|return|
|---|---|
|"()(((()())(())()))(())"|17|