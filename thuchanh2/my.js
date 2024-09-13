function calculate() {
    let w = +document.getElementById("weight").value;
    let h = +document.getElementById("height").value;

let bmi = w / h**2

if (bmi < 18.5) {
    document.write("Underweight");
} else if (bmi <= 18.5 ) {
    document.write("Normal");
} else if (bmi <= 25.0) {
    document.write("Over weight");
} else {
    document.write("Obese");
}
}
