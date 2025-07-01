const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const calculateEl = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

calculateEl.addEventListener('click', calculateBMI);

heightEl.addEventListener('input', () => resultEl.style.display = 'none');
weightEl.addEventListener('input', () => resultEl.style.display = 'none');

function calculateBMI(){
    const height = parseFloat(heightEl.value);
    const weight = parseFloat(weightEl.value);

    if(isNaN(height) || isNaN(weight) || height <=0 || weight <=0){
        showResult('Please enter valid height and weight values.', 'error');
        return;
    }

    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters*heightInMeters);
    const roundBMI = bmi.toFixed(1);

    let category;
    if (bmi < 18.5){
        category = 'Underweight';
    }else if (bmi >= 18.5 && bmi < 24.9){
        category = 'Normal Weight';
    }else if (bmi >=25 && bmi <29.9){
        category = 'Overweight';
    }else {
        category = 'Obesity';
    }

    showResult(`Your BMI is <strong>${roundBMI}</strong> which is <strong>${category}</strong>.`, 'success');

}

function showResult(message, type){
    resultEl.innerHTML = message;
    resultEl.style.display = 'block';

    resultEl.className = '';

    if (type === 'error'){
        resultEl.classList.add('error');
    }else {
        resultEl.classList.add('success');
    }
}

weightEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') calculateBMI();
});