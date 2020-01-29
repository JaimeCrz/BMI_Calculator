//BMI Calculator 1 multiply height by height, after divide by (kilograms % Cacl_heigh)
// then compare in the status table.


// Imperial methode. 
// Weight in pounds by 703  // height in inch x Height(inch) 
// divide answerd 1 by answerd 2 = BMI


// Table:
// underweight <18.5
// normal  18.5 to 24.9
// overW    25-29.9
// Obesity  30 - 34.9
// obesity 2    35 - 39.9
// Extreme Obe  40

const  calculateMetricBMI = (weight, height) => {
	let  result
	result = (weight / ((height / 100) * (height / 100))).toFixed(2)
	return  result
}