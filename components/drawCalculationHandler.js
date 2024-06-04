// Calculates the lotto draw dates based on the selected date.
export function generateLottoDrawDates(selectedDate) {
  const lottoDrawDates = [];
  /*
  lottoDrawDate helps calculate the previous, next and following lotto draw dates which are added to the lottoDrawDates list. This variable 
  is initialized by calling getNextLottoDraw(selectedDate) to find the next draw date from the selected date.
  Given that we know the next draw date, this will be used as a starting point to calculate the previous and following draw dates.
  Note: The getNextLottoDraw function checks the day of the week and hours to determine the next draw date (Wednesday or Saturday at 
  8 PM). For instance, if the selected date is Tuesday 12pm, the next draw date will be Wednesday at 8 PM.
  */
  let lottoDrawDate = getNextLottoDraw(selectedDate);

  /* 
  Populates with the previous lotto draw dates
  Note: getPrevLottoDraw subtracts the number of days to get the previous draw date.
  For instance, if the current draw date is Wednesday at 8 PM, the last draw date was last week on Saturday at 8 PM. 
  */
  for (let i = 0; i < 2; i++) {
    const previousDrawDate = getPrevLottoDraw(lottoDrawDate);
    lottoDrawDates.unshift(previousDrawDate);
    lottoDrawDate = previousDrawDate;
  }

  // Resets the current lotto draw date to the next draw (as mentioned earlier, the starting point)
  lottoDrawDate = getNextLottoDraw(selectedDate);

  // Populates with the next and following lotto draw dates
  for (let i = 0; i < 3; i++) {
    lottoDrawDates.push(lottoDrawDate);
    lottoDrawDate = getNextLottoDraw(lottoDrawDate);
  }

  return lottoDrawDates;
}

// Calculates the next lotto draw date based on the selected date.
function getNextLottoDraw(selectedDate = new Date()) {
  const day = selectedDate.getDay();
  const hours = selectedDate.getHours();
  const isWednesday = day === 3;
  const isSaturday = day === 6;

  let getNextDrawDays;
  // Determine the number of days until the next lotto draw
  // IF: day < 3 (Sun to Tue) => the next draw date is on Wed
  // ELSE IF: day == Wed and hours < 20 => there is a draw on Wed
  // ELSE IF: day < 6 (Thu to Fri) => the next draw date is on Sat
  // ELSE IF: day == Sat and hours < 20 => there is a draw on Sat
  // ELSE: IF day > Sat and/or hours > 20 => the next draw is next week Wed.
  if (day < 3) {
    getNextDrawDays = 3 - day;
  } else if (isWednesday && hours < 20) {
    getNextDrawDays = 0;
  } else if (day < 6) {
    getNextDrawDays = 6 - day;
  } else if (isSaturday && hours < 20) {
    getNextDrawDays = 0;
  } else {
    getNextDrawDays = (10 - day) % 7;
  }

  let lottoDrawDate = new Date(selectedDate);
  // Adding the number of days till the next draw.
  lottoDrawDate.setDate(selectedDate.getDate() + getNextDrawDays);
  // The draw is set for 8 PM, as every Wednesday and Saturday draw takes place at that time.
  lottoDrawDate.setHours(20, 0, 0, 0);

  return lottoDrawDate;
}

// Calculates the previous lotto draw date based on the draw date.
function getPrevLottoDraw(drawDate = new Date()) {
  const day = drawDate.getDay();
  // Determine the number of days since the previous lotto draw
  // IF: day === 3 (Wed) => the previous draw date is Sat at 8pm
  // ELSE: day === 6 (Sat) => the previous draw date is Wed at 8pm
  const NoOfDaysToSubtract = day === 3 ? 4 : 3;
  const previousLottoDrawDate = new Date(drawDate);
  // Subtract days to get the previous draw date
  previousLottoDrawDate.setDate(drawDate.getDate() - NoOfDaysToSubtract);

  return previousLottoDrawDate;
}
