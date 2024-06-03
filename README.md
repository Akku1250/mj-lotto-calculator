# Lotto Calculator
The Lotto Calculator web application dynamically determines the previous two, next, and the following two Irish Lotto draw dates occurring on Wednesdays and Saturdays at 8 PM based on user input, displaying the results alongside their respective past or future status.

# Project Structure

1. components
- drawCalculationHandler.js - Responsible for calculating Lotto draw dates.
- drawTableHandler.js - Responsible for rendering the draw dates in the table.
- skeletonHandler.js - Responsible for managing the loading skeleton.
- userFormHandler.js - Responsible for handling user form submissions and processes the input date.
- utils.js - Contains helper functions that assist in certain part of the application.

2. styles.css
- Main stylesheet contain all style rules set for the application.
  
3. index.html
- Main HTML containing the structure of the application.
  
4. main.js
- Main entry point that handles event listeners of the application.

# User Guide 
1. Select a date and time from the input field.
2. Submit the form to generate the previous two, next, and following two Irish Lotto draw dates.
3. The table will populate with the next five Lotto draw dates, highlighting the past and future draws.

# Result Example
Input Date: 04-06-2024 (Tuesday)

### Previous Lotto Draws:
- 29-05-2024 (Wednesday) - Past
-	01-06-2024 (Saturday) - Past

### Next Draw:
-	05-06-2024 (Wednesday) - Future

###	Following Draws:
- 08-06-2024 (Saturday) - Future
- 12-06-2024 (Wednesday) - Future

# Application State

### Initial State

![Desktop - Initial State](https://github.com/Akku1250/mj-lotto-calculator/assets/25317831/e5f1982d-a71d-4706-a1a7-48e345f77dee)

### Result State

![Desktop - Result State](https://github.com/Akku1250/mj-lotto-calculator/assets/25317831/a66f85d2-9b2d-41ed-a103-da4aab2b281a)


