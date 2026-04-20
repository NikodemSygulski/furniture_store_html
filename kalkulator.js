const calculatorForm = document.getElementById('calculator-form');
const resultContainer = document.getElementById('result');
const calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const depth = parseFloat(document.getElementById('depth').value);
    const pricePerCubicMeter = 100; 

    if (isNaN(width) || isNaN(height) || isNaN(depth)) {
        resultContainer.innerHTML = 'Proszę wprowadzić poprawne wymiary.';
        return;
    }

    const volume = width * height * depth; 
    const totalPrice = volume * pricePerCubicMeter;

    resultContainer.innerHTML = `Objętość: ${volume.toFixed(2)} m³<br>Cena: ${totalPrice.toFixed(2)} PLN`;
});