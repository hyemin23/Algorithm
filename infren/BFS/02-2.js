// 송아지 찾기 방법2
function sol(s, e) {
  let queue = [];
  let ch = Array.from({ length: 10001 }, () => 0);

  // 초기 queue setting
  queue.push(s);
  ch[s] = 1;

  // 초기 level setting
  let L = 0;

  while (queue.length) {
    // 현재 큐의길이 구하기
    let len = queue.length;

    // 각 레벨의 queue에 들어있는 전체 길이만큼 반복
    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      // 현재 queue의 자식들 순회
      for (let nx of [x - 1, x + 1, x + 5]) {
        //자식들중 송아지 값이 존재하면
        if (nx === e) {
          // +1해준느 이유는 L++하기전에 여기서 종료되므로 ++을 못하기 때문에 명시적으로 +1을 해주는 것임.
          return L + 1;
        }

        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
}

console.log(sol(5, 14));
