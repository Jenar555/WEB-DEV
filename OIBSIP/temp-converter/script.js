function temperatureConverter(valNum, sourceUnit) {
    valNum = parseFloat(valNum);
    
    if (sourceUnit === 'celsius') {
        // Convert from Celsius to Fahrenheit
        const fahrenheit = (valNum * 9/5) + 32;
        document.getElementById("outputFahrenheit").innerHTML = fahrenheit.toFixed(2);
    } else if (sourceUnit === 'kelvin') {
        // Convert from Kelvin to Fahrenheit
        const celsius = valNum - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("outputFahrenheit").innerHTML = fahrenheit.toFixed(2);
    }
}
