const TotalPrice = () => {

    const precio = 50;
    const iva = 0.21;
    const total = precio + precio * iva;
  
    return (
      <p>
        El precio con IVA es de {total}
      </p>
    );
  };
  
  export default TotalPrice;