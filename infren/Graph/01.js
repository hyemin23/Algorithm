// 그래프 문제
// n : 정점의 갯수
// arr : 간선정보 2차원 배열
function sol(n, arr) {
  let answer = 0;

  // 행의 갯수 n+1개, 열의 갯수 n+1개로 초기화
  // n+1인 이유는 1번 index부터 사용할것이기 때문.
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  // check배열 노드를 방문했는지 안 했는지
  let ch = Array.from({ length: n + 1 }, () => 0);
  path = [];

  for (let [a, b] of arr) {
    // 방향 그래프이므로
    graph[a][b] = 1;
  }

  // v : vertex 정점
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log("path : ", path);
    } else {
      // i = 1인 이유는 index가 1부터 지정했기 때문
      for (let i = 1; i <= n; i++) {
        //  각각의 방들을 다 뒤지면서 그 방들이 1이고, 방문하지 않았더라면
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  // 1번 정점부터 시작
  path.push(1);
  // 1은 무조건 방문했다는 의미
  ch[1] = 1;
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
