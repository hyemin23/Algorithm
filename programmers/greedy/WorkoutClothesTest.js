var n = 5;
var lost = [2, 4];
var reserve = [1, 3, 5];

function solution(n, lost, reserve) {
  var answer = 0;
  var ans = [];

  for (var i = 0; i <= n; i++) {
    ans.push(1);
  }

  for (var i = 1; i <= n; i++) {
    for (var j = 0; j < lost.length; j++) {
      if (i === lost[j]) ans[i] = 0;
    }
    for (var j = 0; j < reserve.length; j++) {
      if (i === reserve[j]) ans[i] += 1;
    }
  }

  for (var i = 1; i <= n; i++) {
    if (ans[i] === 0 && ans[i - 1] === 2) {
      ans[i - 1] = 1;
      ans[i] = 1;
    } else if (ans[i] === 0 && ans[i + 1] === 2) {
      ans[i + 1] = 1;
      ans[i] = 1;
    }
  }
  for (var i = 1; i <= n; i++) {
    console.log("asdasd", ans[i]);
    if (ans[i] > 0) answer++;
  }
  //   console.log("answeransweranswer", answer);
  return answer;
}

var ans1 = solution(n, lost, reserve);

console.log(ans1);
