import ColorProvider from "./colorContext";
import InputProvider from "./inputContext";

const AppContext = ({children}) => {
    return (
        <ColorProvider>
            <InputProvider>
                {children}
            </InputProvider>
        </ColorProvider>        
    )
}

export default AppContext