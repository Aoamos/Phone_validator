// Get DOM elements
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

// phone number validation function
const validatePhoneNumber = (phoneNumber) => {
  // Regular expression to match phone numbers in the format (123) 456-7890
  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return regex.test(phoneNumber);
}


