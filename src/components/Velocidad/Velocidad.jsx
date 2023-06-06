const Velocidad = ({ kmporhora }) => {

    const metrosporsegundo = kmporhora * (1 / 3.6);
  
    return (
      <p>
        {kmporhora} Km/h son {metrosporsegundo} m/s.
      </p>
    );
  };
  
  export default Velocidad;