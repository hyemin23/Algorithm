function sol(s, e) {
  let queue = [];
  let dis = Array.from({ length: 10001 }, () => 0);
  let check = Array.from({ length: 10001 }, () => 0);

  // 초기 queue 설정
  queue.push(s);
  // 초기 check 배열 설정
  check[s] = 1;
  // dis 배열 value 설정
  dis[s] = 0;

  while (queue.length) {
    // queue에서 값 꺼내오기
    let x = queue.shift();

    // 처음 queue에서 시작되는 값에서
    // 앞으로,뒤로, 앞으로 5칸
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 송아지를 찾으면 queue 종료
      if (nx === e) {
        // 현재 트리의 value값 return
        return dis[x] + 1;
      }
      // 들어가지 않은 것들만 queue에 집어넣기
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

console.log(sol(8, 3));
