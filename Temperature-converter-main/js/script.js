const temperatureInput = document.getElementById('temperatureInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const resultMessage = document.getElementById('resultMessage');

// Habilitar la conversión automáticamente si todos los campos están llenos
function checkFieldsAndConvert() {
    if (temperatureInput.value && fromUnit.value && toUnit.value) {
        convertAndDisplayResult();
    } else {
        resultMessage.textContent = ''; // Limpiar el mensaje si falta algún campo
    }
}

// Función para convertir y mostrar el resultado
function convertAndDisplayResult() {
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    const result = convertTemperature(temperature, from, to);
    resultMessage.textContent = `${temperature} ${from} is ${result.toFixed(2)} ${to}`;
}

// Función de conversión de temperatura
function convertTemperature(temp, from, to) {
    let result;

    if (from === to) {
        return temp; // Si las unidades son iguales, no hay conversión.
    }

    // Convertir desde Celsius
    if (from === 'Celsius') {
        if (to === 'Fahrenheit') {
            result = (temp * 9/5) + 32;
        } else if (to === 'Kelvin') {
            result = temp + 273.15;
        }
    }

    // Convertir desde Fahrenheit
    else if (from === 'Fahrenheit') {
        if (to === 'Celsius') {
            result = (temp - 32) * 5/9;
        } else if (to === 'Kelvin') {
            result = ((temp - 32) * 5/9) + 273.15;
        }
    }

    // Convertir desde Kelvin
    else if (from === 'Kelvin') {
        if (to === 'Celsius') {
            result = temp - 273.15;
        } else if (to === 'Fahrenheit') {
            result = ((temp - 273.15) * 9/5) + 32;
        }
    }

    return result;
}


//Limitar el rango de escritura en el input de entrada
function limitLength(input) {
    if (input.value.length > 4) {
      input.value = input.value.slice(0, 4);
    }
}



// Añadir eventos de cambio a los campos
temperatureInput.addEventListener('input', checkFieldsAndConvert);
fromUnit.addEventListener('change', checkFieldsAndConvert);
toUnit.addEventListener('change', checkFieldsAndConvert);




