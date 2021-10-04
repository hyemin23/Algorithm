// 송아지 찾기
// 출발지점, 송아지가 있는 지점
// /case 1
function sol(start, end) {
  let queue = [];
  let dis = Array.from({ length: 100001 }, () => 0);
  let check = Array.from({ length: 10001 }, () => 0);

  queue.push(start);
  dis[start] = 0;
  check[start] = 1;

  while (queue.length) {
    let x = queue.shift();
    // 뒤로,앞으로 5번 앞으로
    //   nx : 증가하면서 찾아야햐는 값
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 송아지 value를 찾으면 종료
      if (nx === end) {
        // 점프횟수는 : 부모노드 value + 1 의 값 = 자식의 값
        return dis[x] + 1;
      }
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

console.log(sol(5, 14));
