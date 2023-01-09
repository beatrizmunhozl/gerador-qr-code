import { useContext } from "react";
import { InputContext } from "../../Context/inputContext";
import InputColor from "../inputColor";
import { Button } from "../inputColor/style";
import { StyledForm } from "./styles";

export default function InputCode() {

	const { inputValue, handleSubmit, handleChange } = useContext(InputContext)

	const handle = (e) => {
		e.preventDefault();
		handleSubmit();
	}
	
	return (
		<StyledForm onSubmit={ (e) => handle(e)}>
			<input type="url" value={inputValue} onChange={(e) => handleChange(e)} placeholder="Cole aqui sua URL"/>
			<InputColor />
			<Button type="submit">Gerar QrCode</Button>
		</StyledForm>
	);
}
