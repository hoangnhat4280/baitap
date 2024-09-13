let weight = + prompt('Nhap can nang (kg):', 0)
let height = + prompt('Nhap chieu cao (m):', 0)
let bmi = weight / height**2

if (bmi < 18,5) {
    document.write("Underweight");
} else if (bmi <= 18,5 ) {
    document.write("Normal");
} else if (bmi <= 25.0) {
    document.write("Over weight");
} else {
    document.write("Obese");
}
