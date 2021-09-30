let arr = [81, 58, 42, 33, 61];

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function dfs(L, sum) {
    // 무게제한 추가 (259)
    if (sum > c) {
      return;
    }
    //   부분집합 완성 (태우는경우에)
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      // 다음 바둑이를 태우는 경우
      dfs(L + 1, sum + arr[L]);
      // 바둑이를 태우지 않는 경우
      dfs(L + 1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}

// 최대무게, 각 바둑이들의 무게 전달
console.log(solution(259, arr));
