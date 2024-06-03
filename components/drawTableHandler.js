import { formatLottoDrawDate, lottoDrawStatus } from './utils.js';

//  Renders the lotto draw dates in the table.
export const renderLottoDrawTable = (lottoDates = [], selectedDate = new Date()) => {
  const lenOfLottoDates = lottoDates.length;
  const lottoResultBody = document.getElementById('lotto-calculator-result-body');
  lottoResultBody.innerHTML = '';

  if (lenOfLottoDates === 0) {
    // Populates the table with empty rows if no draw dates are provided
    for (let row = 0; row < 5; row++) {
      const emptyRow = createEmptyRow(row);
      lottoResultBody.appendChild(emptyRow);
    }
  } else {
    // Populates the table with lotto draw dates
    lottoDates.forEach((date, index) => {
      const lottoDrawRow = createLottoDrawRow(date, selectedDate, index);
      lottoResultBody.appendChild(lottoDrawRow);
    });
  }
};

// Creates an empty table row.
function createEmptyRow(row) {
  const tableBodyRow = document.createElement('tr');
  tableBodyRow.classList.add(`slide-in-row-${row}`);
  tableBodyRow.innerHTML = `<td>&nbsp;</td> <td>&nbsp;</td>`;
  return tableBodyRow;
}

// Creates a table row for a lotto draw date.
function createLottoDrawRow(date, selectedDate, row) {
  const tableBodyRow = document.createElement('tr');
  tableBodyRow.classList.add(`slide-in-row-${row}`);
  tableBodyRow.innerHTML = `
    <td>${formatLottoDrawDate(date)}</td>
    <td>${lottoDrawStatus(date < selectedDate)}</td>
  `;
  return tableBodyRow;
}
