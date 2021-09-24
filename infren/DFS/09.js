// 조합
// 들어가는 경우와 들어가지 않는 경우
function sol(a, b) {
  let answer;
  let dy = Array.from(Array(a + 1), () => Array(b).fill(0));

  function DFS(n, m) {
    if (dy[n][m] > 0) return dy[n][m];
    if (n === m || m === 0) {
      return 1;
    } else {
      // 마지막 원소의 입장에서 마지막 원소를 선택하지 않은 경우와 선택하는 경우
      return (dy[n][m] = DFS(n - 1, m - 1) + DFS(n - 1, m));
    }
  }

  answer = DFS(a, b);
  return answer;
}

console.log(sol(33, 19));
