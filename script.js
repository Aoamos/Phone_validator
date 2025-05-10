// Get DOM elements
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

// phone number validation function
const validatePhoneNumber = (phoneNumber) => {
  // Regular expression to match phone numbers in the format (123) 456-7890
  const regex = /^\+?[\d\s\-().]{7,}$/;
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  return regex.test(phoneNumber);
};

// check button click handler
checkBtn.addEventListener("click", () => {
  const phoneNumber = userInput.value.trim();
  if (!phoneNumber) {
    result.innerHTML = `<p class="invalid">InValid phone number: ${phoneNumber}</p>`;
    return;
  }
  const isValid = validatePhoneNumber(phoneNumber);

  result.innerHTML = `<p class="${isValid ? "valid" : "invalid"}">${
    isValid ? "Valid" : "Invalid"
  } phone number: ${phoneNumber}</p>`;

  // Clear the input field
  userInput.value = "";
});

// clear button click handler
clearBtn.addEventListener("click", () => {
  userInput.value = "";
  result.innerHTML = "";
});
