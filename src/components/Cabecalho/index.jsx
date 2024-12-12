import styled from "styled-components";
import CampoTexto from '../CampoTexto'
const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
<<<<<<< Tabnine <<<<<<<
/**//+
 * This function represents the header component of the application.//+
 * It displays the logo and a text field.//+
 *//+
 * @returns {JSX.Element} - The JSX representation of the header component.//+
 *///+
export default function Cabecalho () {//+
    return(//+
        <HeaderEstilizado>//+
            <img src="/imagens/logo.png" alt="logo" />//+
            <CampoTexto />//+
        </HeaderEstilizado>//+
    )//+
}//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"17869faa-2dca-453f-a22e-3c62c9d5e646","source":"instruct"}
    }
`
export default function Cabecalho () {
return(
    <HeaderEstilizado>
        <img src="/imagens/logo.png" alt="logo" />
        <CampoTexto />
    </HeaderEstilizado>
)
}