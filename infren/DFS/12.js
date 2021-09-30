//총 배열, 몇개를 뽑는지, 어떤 배수인지
function sol(arr, n, m) {
  // 총 갯수 구하기
  let answer = 0;

  // DFS를 이용하여 경우의 수
  function DFS(L, R, S) {
    if (L === n) {
      if (S % 6 === 0) {
        return answer++;
      }
    } else {
      for (let i = R; i < arr.length; i++) {
        DFS(L + 1, i + 1, S + arr[i]);
      }
    }
  }

  // L, for문, sum
  DFS(0, 0, 0);
  return answer;
}

const arr = [2, 4, 5, 8, 12];
console.log(sol(arr, 3, 6));
