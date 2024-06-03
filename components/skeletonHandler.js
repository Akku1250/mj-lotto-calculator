// Populates the rows with loading cells
export function renderSkeletonRows() {
  const lottoResultBody = document.getElementById('lotto-calculator-result-body');
  lottoResultBody.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const skeletonRow = createSkeletonRow();
    lottoResultBody.appendChild(skeletonRow);
  }
}

// Removes the skeleton after the timeout is completed
export function removeSkeletonRows() {
  const lottoResultBody = document.getElementById('lotto-calculator-result-body');
  lottoResultBody.innerHTML = '';
}

// Creates a table row with pulsing cells.
function createSkeletonRow() {
  const tableBodyRow = document.createElement('tr');
  tableBodyRow.classList.add('skeleton');
  tableBodyRow.innerHTML = `
    <td><div class="cell-pulse"/></td>
    <td><div class="cell-pulse"/></td>
  `;
  return tableBodyRow;
}
