let arr = [1, 3, 5, 6, 7, 10];

function solution(arr) {
  let flag = false;
  let answer = 0;
  let max = arr.length;
  let total = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  function dfs(n, sum) {
    if (flag) return;
    //   마지막 index에 도달하면
    if (n === max) {
      //   전체 total - sum = sum
      if (total - sum === sum) {
        answer = "YES";
        flag = true;
      }
    } else {
      dfs(n + 1, arr[n] + sum);
      dfs(n + 1, sum);
    }
  }
  //   1 : index, 2: sum
  dfs(0, 0);
  return answer;
}

console.log(solution(arr));
