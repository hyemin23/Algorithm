//  5개의 원소를 가진 배열 5개를 만든다 즉 2차원 배열을 만든다
// console.log(Array.from(Array(5), () => Array(5).fill(0)));
function sol(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);

  // 인접행렬에 간선정보 표시
  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    //   vertex(정점)가 끝(5)에 다달으면 사이클 경우의 수 증가
    if (v === n) {
      answer++;
    } else {
      // 가짓수
      for (let i = 1; i <= n; i++) {
        // 방문하지 않은 노드듣과 그래프의 행(v)의 열(i)에 정보가 있는 애들만
        if (check[i] === 0 && graph[v][i] === 1) {
          //   가짓수 방문 하면 check 배열에 표시
          check[i] = 1;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  }

  //   0번째 index는 제외 index 카운팅은 1부터 했으므로
  // 그리고 첫 번째 for문의 가짓수도 제외 자기 자신은 방문할 수 없으므로 check.
  check[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(sol(5, arr));
