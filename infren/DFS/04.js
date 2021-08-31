let arr = [1, 3, 5, 6, 7, 10];

function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  let n = arr.length;

  function DFS(L, sum) {
    console.log(sum);
    if (flag === 1) return;

    //   L과 n이 같을 때 즉, L이 6일때만 실행
    //   마지막 배열까지 도달하면 부분집합 하나 완성
    if (L === n) {
      //   total - sum => 반대편 원소의 총 합
      if (total - sum === sum) {
        answer = "YES";

        flag = 1;
      }
    } else {
      // L =index 0부터 6까지 더함

      //부분집합을 사용하는 쪽 (왼쪽)
      DFS(L + 1, sum + arr[L]);
      // 부분집합을 사용하지 않는 쪽 단계만 증가. (오른쪽)
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(arr));
