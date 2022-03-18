function sol(arr, n) {
  let answer = 0;
  // 행,열 만들어주기. 행:1번부터(0은 사용안할 예정) 열은 빈 열로 초기화
  let graph = Array.from({ length: n + 1 }, () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  // a : 정점 즉,행에 b(열)을 push 하면 인접 리스트 생성이 됨.
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      console.log(path);
      answer++;
    } else {
      // 0부터 해당 그래프 정점이 갖고있는 길이 만큼
      //처음에 DFS(1)을 넘겨줄것이므로 1행의 길이는 3이 될것임. (arr에서 정점(1)은 3개이므로 )
      for (let i = 0; i < graph[v].length; i++) {
        // 해당 정점에 들 어있는 길이 하나씩 방문한 곳 체크배열로 체크
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);

          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }
  // teset
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}

const arr = [
  [5, 9],
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

console.log(sol(arr, 5));
