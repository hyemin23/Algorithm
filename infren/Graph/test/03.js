function sol(board) {
  let answer = 0;
  // 12,3,6,9시간 각각의 행,열 설정
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    // 도착점(6,6)에 도착하면 count!
    if (x === 6 && y === 6) {
      answer++;
    } else {
      // 방향 3시,6시,9시,12시
      for (let i = 0; i < 4; i++) {
        // 기존 x,y값 방향 변동
        let realX = x + dx[i];
        let realY = y + dy[i];

        //   경계선 설정 및 갈수 있는 곳 확인
        if (
          realX <= 6 &&
          realX >= 0 &&
          realY <= 6 &&
          realY >= 0 &&
          board[realX][realY] === 0
        ) {
          //   갔던 곳 check
          board[realX][realY] = 1;
          DFS(realX, realY);
          // 되돌아 오면서 되돌아왔던곳  0으로 초기화
          board[realX][realY] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  // 0,0(출발점)에서 시작
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(sol(arr));
