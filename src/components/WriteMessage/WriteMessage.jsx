const WriteMessage = () => {

    const name = 'Carlos';
    const material = 'madera';
    const size = '2m';
    const note = 'Pedido entregado'
  
    return (
      <p>
        {name} ha pedido una caja de {material}, de tamaño {size}. {note}.
      </p>
    );
  };
  
  export default WriteMessage;