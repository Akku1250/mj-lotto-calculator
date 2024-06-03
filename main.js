import { handleLottoFormSubmit } from './components/userFormHandler.js';
import { renderLottoDrawTable } from './components/drawTableHandler.js';

/*
When the application loads, the DOMContentLoaded event is triggered, executing a function that dynamically 
populates the lotto draw table with five empty rows using the renderLottoDrawTable function.
*/
document.addEventListener('DOMContentLoaded', () => {
  renderLottoDrawTable([]);
});

const userLottoForm = document.getElementById('userLottoForm');

/* 
When the user selects the date and time from the input field and submits the form, it 
triggers the submit event, which executes handleLottoFormSubmit.
*/
userLottoForm.addEventListener('submit', handleLottoFormSubmit);
