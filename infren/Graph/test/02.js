// 1번부터 시작하는 정점의 경우의 수
function sol(arr, n) {
  let answer = 0;
  // 행,열 만들기
  // 첫 번째 index부터 계산하것이기 때문에 n+1로 (0번 index 사용 X)
  let graph = Array.from({ length: n + 1 }, () => Array());
  // check배열
  let ch = Array.from({ length: n + 1 }, () => 0);

  // 그래프 정보 만들어주기
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  // v : 정점
  function DFS(v) {
    // 마지막 정점에 달으면 stop
    if (v === n) {
      answer++;
    } else {
      // 해당 정점의 길이만큼 for문 돌아야함
      for (let i = 0; i < graph[v].length; i++) {
        // 해당 정점을 다녀 왔는지 check
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          // 해당 정점의 index를 넘겨주면 다음 index들로 이동
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  }

  // 1번 정점은 for문에서 제외
  // 이유는 1번 정점에서 연결된 애들부터 for문을 돌아야하므로 즉, 2번or 3번 or 4번 for문을 돌아야하므로.
  // 자기 자신 for문들 돌면 안됨 2번 OR 3번 4번 정점의 for문을 돌아야함 1번부터 시작이므로 절대 다시 돌아가면(들어가면) 안됨.
  ch[1] = 1;
  //1번 정점부터 시작이므로
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
