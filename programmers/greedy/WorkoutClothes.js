function solution(n, lost, reserve) {
  // 체육복을 잃어버렸으면서 여벌이 없는 경우
  const realLost = lost.filter((element) => !reserve.includes(element));

  // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
  let realReserve = reserve.filter((element) => !lost.includes(element));

  // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우(realLost.filter)
  return (
    // realLost.filter((lost) : 잃어버린 사람 중 여벌을 받을 수 없는 학생을 배열로 반환
    n -
    realLost.filter((lost) => {
      // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
      const lend = realReserve.find(
        // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
        (reverse) => Math.abs(reverse - lost) == 1
      );

      // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
      if (!lend) return lost;
      // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
      realReserve = realReserve.filter((reverse) => reverse !== lend);
    }).length
  );
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
