const CelsiusToFahrenheit = () => {

    const celsius = 32;
    const fahrenheit = celsius * 1.8 + 32;
  
    return (
      <p>
        {celsius} grados Celsius son {fahrenheit} grados Fahrenheit
      </p>
    );
  };
  
  export default CelsiusToFahrenheit;