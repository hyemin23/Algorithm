// 부분집합

function solution(n) {
  let answer = [];

  // check Array 생성 0초기화
  let ch = Array.from(
    {
      length: n + 1,
    },
    () => 0
  );

  function dfs(v) {
    // ex n = 3일경우 4일때 종료하게끔.
    if (v === n + 1) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        //   체크 배열에 1인것만
        if (ch[i] === 1) temp += i + " ";
      }
      // 마지막 공집합 제거.
      if (temp.length > 0) answer.push(temp.trim());
    } else {
      // 포함/미포함 체크
      // check 걸어주기 초기 v=1 (포함)
      ch[v] = 1;
      // 같은 숫자로 뻗기 때문.
      dfs(v + 1);

      // 미포함
      ch[v] = 0;
      dfs(v + 1);
    }
  }

  // dfs는 1부터 호출
  dfs(1);
  return answer;
}

console.log(solution(3));
