// 전위순회, 중위순회, 후위순회
function solution(n) {
  let answer;

  function dfs(n) {
    if (n > 7) return;
    else {
      // 왼쪽
      dfs(n * 2);
      //   오른쪽
      dfs(n * 2 + 1);
    }
  }

  dfs(n);
  return answer;
}

solution(1);
