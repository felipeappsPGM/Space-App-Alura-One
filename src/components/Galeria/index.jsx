import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.div`

    flex-grow: 1;
`



export default function Galeria() {
    return (
        <>
            <Tags />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}