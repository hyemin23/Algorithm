// 조합

function sol(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  function DFS(L, R) {
    // 단계가 같아지면 즉, 뽑는 수가 같아지면
    if (L === m) {
      answer.push(temp.slice());
    } else {
      // 여기서 1로 적어주면 안됨
      // 이유 : 계속해서 i 값이 DFS(L+1,i+1) 하면서 2번째 자리에서 동적으로
      // 변화를 가지며 가짓수를 줄여 나가야하 하기 때문.
      for (let i = R; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
  return answer;
}

// 1~n개의 번호가 있다.
// const arr = [1, 2, 3, 4];

// 그 중 2개를 뽑는다.
console.log(sol(4, 2));
