let arr = [81, 58, 42, 33, 61];

function solution(c, sum) {
  let answer;
  let n = arr.length;

  function dfs(L, sum) {
    //   총 바둑이들과 같으면
    // 태우는 경의 수 완성
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      // 바둑이를 태운 경우
      dfs(L + 1, sum + arr[L]);
      // 바둑이를 태우지 않은 경우
      dfs(L + 1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}

// 최대무게, 각 바둑이들의 무게 전달
console.log(solution(259, arr));
