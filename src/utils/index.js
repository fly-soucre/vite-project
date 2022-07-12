function getRelativeTimeDesc(time) {
  const currentInMs = new Date().getTime();
  const timeInMs = new Date(time).getTime();

  const minuteInMs = 60 * 1000;
  const hourInMs = 60 * minuteInMs;
  const dayInMs = 24 * hourInMs;
  const monthInMs = 30 * dayInMs;
  const yearInMs = 365 * dayInMs;

  const relativeTime = currentInMs - timeInMs;
  if (relativeTime < minuteInMs) {
    return `${Math.ceil(relativeTime / 1000)} 秒前`;
  } else if (relativeTime < hourInMs) {
    return `${Math.ceil(relativeTime / minuteInMs)} 分钟前`;
  } else if (relativeTime < dayInMs) {
    return `${Math.ceil(relativeTime / hourInMs)} 小时前`;
  } else if (relativeTime < monthInMs) {
    return `${Math.ceil(relativeTime / dayInMs)} 天前`;
  } else if (relativeTime < yearInMs) {
    return `${Math.ceil(relativeTime / monthInMs)} 月前`;
  } else {
    return `${Math.ceil(relativeTime / yearInMs)} 年前`;
  }
}

const data1 = getRelativeTimeDesc("2018-04-20 08:20:10");
const data2 = getRelativeTimeDesc("2022-07-12 08:20:10");
const data3 = getRelativeTimeDesc("2022-06-13 08:20:10");
const data4 = getRelativeTimeDesc("2022-06-13 14:33:10");
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);