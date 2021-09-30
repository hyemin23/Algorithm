// 3개중 2개 뽑기 중복 허용 X 순열 문제.
function sol(n, arr) {
  let answer = [];
  let check = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === n) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          // DFS 탈출 후 밑에 실행
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

// 3개중에서
const arr = [3, 6, 9];
// 2개를 뽑는 것
console.log(sol(2, arr));
