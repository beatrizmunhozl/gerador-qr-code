
import { useContext, useState } from "react"
import QRCode from "react-qr-code"
import { ColorContext } from "../../Context/colorContext"
import { InputContext } from "../../Context/inputContext"
import { ContainerCode } from "./style"

const QrCodeComponent = () => {

    const {value} = useContext(InputContext)
    const {color} = useContext(ColorContext)

    return (
        <ContainerCode>
            { value ? (
                <QRCode
                fgColor={color}
                size={256}
                style={{ height: "auto", maxWidth: "500px", width: "100%" }}
                level={'H'}
                value={value}
                viewBox={`0 0 256 256`}                
            />
            ) : 
            (
                <div className="no-qr">
                </div>
            )}
        </ContainerCode>
    )
}

export default QrCodeComponent