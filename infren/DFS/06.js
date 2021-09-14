function solution(n, m) {
  let answer = [];
  let newArr = Array.from(
    {
      length: m,
    },
    () => 0
  );

  function DFS(L) {
    if (L === m) {
      answer.push(newArr.splice());
    } else {
      // ㅅㅂ 이해해버렸다..
      for (let i = 1; i <= n; i++) {
        //   L은 계속 0인 상태로 돌아야함

        //   newArr[0]=1  * [1,0];
        //   DFS(1)호출
        //   newArr[1]=1 * [1,1];
        //   DFS(2)호출
        //   return [1,1]저장

        //   for문 i=2
        //   newArr[0]=2 * [2,0];
        //   DFS(2호출)
        //   return [2,1]저장
        newArr[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(3, 2));
