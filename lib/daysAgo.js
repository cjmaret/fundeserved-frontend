export default function daysAgo(dateValue) {
  const currentDate = new Date().getDate();
  const prevDate = new Date(dateValue).getDate();
  return Math.abs(currentDate - prevDate);
}
