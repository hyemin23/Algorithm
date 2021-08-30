let n = 3;

let computers = [
  // 첫 번째 입장에서의 시점
  // 첫 번째는 세번째만 연걸되어 있지 않음
  [1, 1, 0],
  // 두 번째 입장에서의 시점
  // 모두 연결되어있음
  [1, 1, 0],
  //   3 번째 입장에서 시점
  //   첫 번째만 연결 되어있지 않음
  //  첫번째 연결 x  두 번째 연결o 세 번째 연결 o
  [0, 1, 1],
];

function solution(n, computers) {
  let answer = 0;

  let visited = new Array();

  // computers의 길이만큼 방문한 배열 생성
  for (let i = 0; i < computers.length; i++) {
    visited[i] = false;
  }

  function dfs(c, n, v) {
    //   방문처리
    //   첫 번째 트리 방문 처리
    v[n] = true;

    //   첫 번째 방문하는중이고 첫번째 컴퓨터의 요소를 반복하면서
    c[n].forEach((data, i2) => {
      //   i2와 n이 같지 않을경우
      //한 배열안에서 다른 index들끼리 비교해야하므로?
      console.log(i2, n);
      if (i2 !== n) {
        //   1번째는 false c[0][1] === 1 이면 그게 아닌경우 종료
        //
        if (v[i2] === false && c[n][i2] === 1) {
          // 재귀함수 실행
          // 다음 재귀는 현재 computer의 index를 dfs의 n으로, v를 visited로 넘겨준다.
          dfs(c, i2, v);
        }
      }
    });
  }

  visited.forEach((data, index) => {
    if (data === false) {
      //   방문하지 않은 경우 +1
      answer += 1;
      // computers배열과, visited의 index, visited 전달
      dfs(computers, index, visited);
    }
  });
  return answer;
}

solution(n, computers);
