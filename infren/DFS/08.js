// 팩토리얼
// 자연수 n을 입력하면 n!을 계산하여 출력하는 프로그램을 작성하시오.

function sol(n) {
  let answer;
  function DFS(a) {
    if (a === 1) {
      return 1;
    } else {
      return a * DFS(a - 1);
    }
  }

  answer = DFS(n);
  return answer;
}

console.log(sol(4));
