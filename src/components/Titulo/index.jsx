import { styled } from "styled-components";

const Titulo = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    margin: 24px 0;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

export default Titulo