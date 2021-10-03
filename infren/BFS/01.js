// BFS 넓이 원 탐색 = queue이용
function sol() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";

    //   배열로 만들어서 하나씩 순환하게 만듬 v*2랑 v*2+1이랑 2개의 원소로
    for (const nv of [v * 2, v * 2 + 1]) {
      console.log(nv);
      if (nv > 7) {
        continue;
      }
      queue.push(nv);
    }
  }

  return answer;
}

console.log(sol());
