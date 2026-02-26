//your JS code here. If required.
// Get the HTML elements by their IDs
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

// Set the initial counter value
let currentValue = 0;

// Add a click event listener to the button
incrementBtn.addEventListener('click', function() {
    // 1. Alert the un-incremented value
    alert(currentValue);
    
    // 2. Increment the value by 1
    currentValue++;
    
    // 3. Update the paragraph text to show the new value
    counterDisplay.textContent = currentValue;
});