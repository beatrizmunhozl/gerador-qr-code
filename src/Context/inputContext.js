import { createContext, useState } from "react";

export const InputContext = createContext()

const InputProvider = ({children}) => {

    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState("")

    const handleChange = (e) => { 
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        setValue(inputValue)
        setInputValue("")
    }

    return (
        <InputContext.Provider
        value={{ inputValue, handleChange, value, handleSubmit }}
        >
            {children}
        </InputContext.Provider>
    )
}

export default InputProvider;