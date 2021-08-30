let numbers = [1, 1, 1, 1, 1];
let target = 3;

function solution(numbers, target) {
  let answer = 0;

  // 여기는 dfs(3,3) 시 점이라고 생각하면
  function dfs(depth, sum, chat) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    // dfs의 왼쪽 트리는  4,4 가 되는거고 )
    dfs(depth + 1, sum + numbers[depth], "왼"); // 왼쪽

    // 3,3의 오른쪽 노드는 4,2가 됨
    // 그럼 또 여기서 4,2타고 들어가면
    // 왼쪽 노드 dfs(5,3)과 오른쪽 노드는 부모 노드가 (3,3)이니까 depth는 3, sum : 3 이므로 dfs(5,1)이 됨)ㄱ
    dfs(depth + 1, sum - numbers[depth], "오른"); // 오른쪽
  }

  dfs(0, 0, "초기0 ");

  return answer;
}

solution(numbers, target);
