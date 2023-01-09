import { createContext, useState } from "react";

export const ColorContext = createContext()

const ColorProvider = ({children}) => {

	const [color, setColor] = useState("#e5383b");
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleChange = (color) => setColor(color.hex);

    const setDisplayColor= () => setDisplayColorPicker(!displayColorPicker)

    return (
        <ColorContext.Provider
        value={{ color, setColor, displayColorPicker, setDisplayColorPicker, setDisplayColor, handleChange}}
        >
        {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider