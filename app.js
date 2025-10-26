function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let BMI_formula_result = ((weight / (height * height)) * 10000).toFixed(2);

  let BMI = document.getElementById("bmi");
  BMI.value = BMI_formula_result;

  let bmi_result = document.getElementById("result");
  console.log(bmi_result);

  if (BMI_formula_result < 18.5) {
    bmi_result.innerText = "Underweight ";
  } else if (BMI_formula_result > 18.5 && BMI_formula_result < 24.9) {
    bmi_result.innerText = "Normal weight";
  } else if (BMI_formula_result > 25 && BMI_formula_result < 29.9) {
    bmi_result.innerText = "Overweight ";
  } else if (BMI_formula_result > 30 && BMI_formula_result < 35) {
    bmi_result.innerText = "Obesity ";
  } else if (BMI_formula_result >= 35) {
    bmi_result.innerText = "Severe Obesity ";
  }
}
