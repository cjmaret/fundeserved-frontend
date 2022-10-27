export default function convertDate(dateValue) {
  const date = new Date(dateValue.toString());
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
