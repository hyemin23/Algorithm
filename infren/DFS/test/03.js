// 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 단 공집합은 출력하지 않습니다.

function solution(n) {
  let answer;
  // check 배열 (n+1개의 배열이 존재해야함) 0~3까지 초기화 단, 0번째는 사용 안 할거임
  let check = Array.from({ length: n + 1 }, () => 0);

  function dfs(v) {
    //   4면 종료
    //   n이 3으로 오면 v가 4일 경우 종료
    if (v === n + 1) {
      //   원소 출력
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) {
          console.log(i);
        }
      }
      return;
    } else {
      // check =1 집함 포함 0 = 포함 x
      // 왼쪽 오른쪽 구분 = check 여부로
      check[v] = 1;
      // 왼쪽 트리 증가
      dfs(v + 1);
      // 오른쪽 증가
      check[v] = 0;
      dfs(v + 1);
    }
  }

  // 1부터 시작
  dfs(1);
  return answer;
}

solution(3);
