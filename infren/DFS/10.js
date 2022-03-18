function sol(n, f) {
  let answer;

  // 메모이제이션
  let dy = Array.from(Array(11), () => Array(11).fill(0));

  // 체크 배열 순열
  let ch = Array.from({ length: n + 1 }, () => 0);
  // temp
  let p = Array.from({ length: n }, () => 0);
  // 조합수
  let b = Array.from({ length: n }, () => 0);

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) {
      return dy[n][r];
    } else {
      return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
  }

  function DFS(L, sum) {
    if (L === n) {
    } else {
      for (let i = 1; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

conosle.log(sole(4, 16));
