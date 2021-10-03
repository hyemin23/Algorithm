// 미로탐색
function sol(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    // 0,0 : 출발점 6,6 도착점
    if (x === 6 && y === 6) {
      answer++;
    } else {
      // 도는 방향
      for (let k = 0; k < 4; k++) {
        // 가는 방향에 좌표를 더하여 계속 이동
        let nx = x + dx[k];
        let ny = y + dy[k];

        //   경계선 설정
        //   6,6을 넘지 않고 가는곳의 board가 0 이라면
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          //   갔던 곳 check
          board[nx][ny] = 1;
          DFS(nx, ny);
          //   갔던 곳 check 해제
          //   이유 : 갔던곳을 확인한 뒤, 다시 돌아가면서 for문을 다시 돌아 0인곳이 또 있나 확인
          board[nx][ny] = 0;
        }
      }
    }
  }

  // 첫 번째 탐색지에는 1이라고 표기해하기 꼭
  board[0][0] = 1;
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
