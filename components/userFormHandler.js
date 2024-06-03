import { generateLottoDrawDates } from './drawCalculationHandler.js';
import { renderLottoDrawTable } from './drawTableHandler.js';
import { renderSkeletonRows, removeSkeletonRows } from './skeletonHandler.js';

// Responsible for handling user form submissions and processes the input date.
export function handleLottoFormSubmit(event) {
  event.preventDefault();

  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = '';

  const selectedDateInput = document.getElementById('selectedDate').value;

  if (!selectedDateInput) {
    errorMessage.textContent = 'Enter a date and time to generate draw dates';
    return;
  }
  // Renders loading skeleton rows while processing.
  renderSkeletonRows();
  
  const selectedDate = new Date(selectedDateInput);
  // Generates a list containing lotto draw dates (i.e. the previous two draws, the next and following two draws) based on user selected date.
  const lottoDrawDates = generateLottoDrawDates(selectedDate);

  // After 2 seconds, the skeleton row is removed, and the lotto draw dates are loaded into the table.
  setTimeout(() => {
    removeSkeletonRows();
    renderLottoDrawTable(lottoDrawDates, selectedDate);
  }, 2000);
}
