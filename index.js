// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function getWeekDayFromOffset(d, x) {

  // Array of week days
  const days = ['Mon', 'Tue', 'Wed', 'Thu','Fri','Sat','Sun'];
  const dIndex = days.indexOf(d);

  const xIndex = (dIndex + x) % days.length;
  return days[xIndex];
}

function solution(S, K) {
    return getWeekDayFromOffset(S, K);
}
