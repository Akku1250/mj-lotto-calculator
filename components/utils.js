// Formats the lotto draw date to a string in the format DD-MM-YYYY.
export function formatLottoDrawDate(date = new Date()) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}-${month}-${date.getFullYear()}`;
}

// Checks if the lotto draw is before the current date.
export function lottoDrawStatus(isPast) {
  return isPast ? 'Past' : 'Future';
}
