document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weightGuide = document.querySelector('#weight-guide');

    // Input Validation
    if (isNaN(height) || height <= 0) {
      results.innerHTML = `<p style="color: red;">Please enter a valid height.</p>`;
      return;
    }
    if (isNaN(weight) || weight <= 0) {
      results.innerHTML = `<p style="color: red;">Please enter a valid weight.</p>`;
      return;
    }

    // BMI Calculation
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<h2>Your BMI: ${bmi}</h2>`;

    // Updating BMI Guide based on BMI
    let message = '';
    if (bmi < 18.6) {
      message = "You are Underweight. Consider a nutritious diet.";
      weightGuide.style.color = "blue";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "You are in the Normal range. Keep up the healthy lifestyle!";
      weightGuide.style.color = "green";
    } else {
      message = "You are Overweight. Regular exercise and a balanced diet are recommended.";
      weightGuide.style.color = "red";
    }

    // Display updated BMI category message
    weightGuide.innerHTML = `
      <h3>BMI Weight Guide</h3>
      <p style="font-weight: bold;">${message}</p>
      <p>Under Weight = Less than 18.6</p>
      <p>Normal Range = 18.6 and 24.9</p>
      <p>Overweight = Greater than 24.9</p>
    `;
  });
});
