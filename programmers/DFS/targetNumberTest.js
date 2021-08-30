function solution(numbers, target) {
  let answer = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    //   왼쪽 오른쪽 어떻게 나눠서 접근하는거지 ?

    dfs(depth + 1, sum + numbers[depth]); // 왼쪽
    dfs(depth + 1, sum - numbers[depth]); // 오른쪽
  }

  dfs(0, 0);

  return answer;
}
