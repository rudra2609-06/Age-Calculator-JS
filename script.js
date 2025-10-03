document.addEventListener("DOMContentLoaded", () => {
  const inputDateField = document.querySelector("#input-date");
  const calculateAgeBtn = document.querySelector("#calculate-age-btn");
  const result = document.querySelector("#result");

  inputDateField.max = new Date().toISOString().split("T")[0];

  calculateAgeBtn.addEventListener("click", () => {
    let birthDate = new Date(inputDateField.value);

    if (birthDate > new Date()) {
      result.textContent = "Birth date cannot be in the future";
      return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    if (birthDate > today) {
      result.textContent = "Birth date cannot be in the future";
    }

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3, d3;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    if (!inputDateField.value) {
      result.textContent = "Please enter date to calculate your age";
    } else {
      result.textContent = `${y3} Years, ${m3} Months, ${d3} Days`;
      console.log(y3, m3, d3);
    }
  });

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
});
