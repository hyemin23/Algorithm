// 송아지 찾기 (Level로 찾기 dis 배열 없이)
// 출발점, 송아지 찾는 지점
function sol(s, e) {
  let check = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  let L = 0;

  // 초기 queue 세팅
  queue.push(s);
  check[s] = 1;

  while (queue.length) {
    // for (let i = 0; i < queue.length; i++) {}
    // 이렇게하면 처음 queue.length = 1 이 고정이 되므로 동적으로 바꿔줘야함.

    let len = queue.length;

    for (let i = 0; i < len; i++) {
      // 루트 트리 구하기
      let x = queue.shift();
      // 루트 트리에서 루트 트리의 자식 만들기
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) {
          return L + 1;
        }
        if (nx > 0 && nx <= 10000 && check[nx] === 0) {
          check[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
}

console.log(sol(5, 14));
