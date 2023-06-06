import Button from "./components/Button/Button";
import CalculateCircleArea from "./components/CalculateCircleArea/CalculateCircleArea";
import CalculateSquareArena from "./components/CalculateSquareArena/CalculateSquareArena";
import TriangleArena from "./components/CalculateTriangleArea/CalcualteTriangleArea";
import CelsiusToFahrenheit from "./components/CelsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/FahrenheitToCelsius/FahrenheitToCelsius";
import Number from "./components/Number/Number";
import TotalPrice from "./components/TotalPrice/TotalPrice";
import Velocidad from "./components/Velocidad/Velocidad";
import WriteMessage from "./components/WriteMessage/WriteMessage";
import SayHello from "./components/sayHello/sayHello";

const App = () => {

	return (
	<>
	<Button name = 'Dorian' age={36} />
	<SayHello name= 'Carlos' />
	<CalculateSquareArena />
	<TriangleArena/>
	<CalculateCircleArea />
	<CelsiusToFahrenheit />
	<FahrenheitToCelsius />
	<TotalPrice />
	<WriteMessage />
	<Number numberA={5} numberB={10} numberC={30} />
	<Velocidad kmporhora={30} />
	</>
	)
}

export default App;

