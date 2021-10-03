// BFS 넓이 우선 탐색 queue활용
function sol() {
  let answer = "";
  let queue = [];

  // 큐는 1부터 시작
  queue.push(1);

  // queue가 비어이을 때 까지
  while (queue.length) {
    // queue에서 1개씩 꺼내기(완료 상태로 만들기)
    const v = queue.shift();
    answer += v + " ";

    // queue의 트리가지를 뻗어 나가기
    for (const a of [v * 2, v * 2 + 1]) {
      // 무한 queue가 되지 않도록 stop 7까지
      if (a > 7) {
        break;
      }
      // 증가된 자식 트리들 que에 넣어주기
      queue.push(a);
    }
  }

  return answer;
}

console.log(sol());
