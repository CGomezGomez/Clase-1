const Button = ({ name , age}) => {
	
	name = name.toUpperCase();

	return (

		<div>

			<p>Name:{name}</p>
			<p>age:{age}</p>
			
		</div>

	);
};

export default Button;