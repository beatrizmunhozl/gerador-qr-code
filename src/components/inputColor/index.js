import { useContext } from "react";
import { ChromePicker } from "react-color";
import { ColorContext } from "../../Context/colorContext";
import { ColorInput } from "./style";

export default function InputColor() {

	const {color, setDisplayColor, displayColorPicker, handleChange} = useContext(ColorContext)

	return (
		<ColorInput>
			<div className="color-sample">
				<div
					className="sample"
					onClick={setDisplayColor}
					style={{
						backgroundColor: color
					}}></div>
				<label>Cor: </label>
				<span>{color}</span>
			</div>
			{displayColorPicker && (
				<div className="container--color-picker">
					<ChromePicker
						color={color}
						onChange={handleChange}
					/>
				</div>
			)}
		</ColorInput>
	);
}

