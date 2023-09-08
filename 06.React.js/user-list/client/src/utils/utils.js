export function formatData(data) {
  const date = new Date(data);
  return date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
