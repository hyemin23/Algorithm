// 송아지 찾기
// 출발, 송아지가 있는 지점
function sol(s, e) {
  let answer = 0;

  // 체크 배열
  // 1~10000번까지이므로 0번째 index 사용 X
  let ch = Array.from({ length: 100001 }, () => 0);
  let dis = Array.from({ length: 100001 }, () => 0);

  // queue
  let queue = [];

  // 출발지점이므로 1로 check!
  ch[s] = 1;
  // 현재 위치 push
  queue.push(s);

  // 현재위치 value 초기화
  dis[s] = 0;

  while (queue.length) {
    // 첫 출발좌표 5.
    let x = queue.shift();

    //   nx : 트리의 key
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 가지를 뻗으면서 송아지 도착지점인지 확인
      if (nx === e) {
        //점프 횟수 트리 정점의 value
        return dis[x] + 1;
      }

      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        //   dis[nx](자식)의 값은 부모의 값 + 1
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

console.log(sol(8, 3));
