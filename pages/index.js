import InputCode from "../src/components/inputCode"
import QrCodeComponent from "../src/components/qrCode"
import { Container, ScreenApp } from "../src/components/containerCard/style"

export default function Home() {
  return (
    <ScreenApp>
      <Container >
        <div className="input-container">
          <h1>Gerador de QR-Code</h1>
          <p>Basta inserir uma URL abaixo que o QR-code será gerado</p>
          <InputCode/> 
        </div>
        <QrCodeComponent/>
      </Container>
    </ScreenApp>
  )
}
