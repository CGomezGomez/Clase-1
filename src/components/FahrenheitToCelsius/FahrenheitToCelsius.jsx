const FahrenheitToCelsius = () => {

    const fahrenheit = 50;
    const celsius =  (fahrenheit - 32) / 1.8;
  
    return (
      <p>
        {fahrenheit} grados Fahrenheit son {celsius} grados Celsius
      </p>
    );
  };
  
  export default FahrenheitToCelsius;