import styled from "styled-components";
export default function TextAbout(){
 
    return(
        <Container>
            <p>
            Desarrollo aplicaciones en React y React-Native, utilizando JavaScript como lenguaje principal.
             Cuento con más de 1 año de experiencia y tuve la oportunidad de trabajar en grupos de desarrollo 
             con personas de otros países y diferentes tipos de conocimientos, ya sea en lenguaje de programación
              como ámbitos laborales.
            </p>
        </Container>
    )
}
const Container=styled.div`
    width: min(90%,400px);
    height: 200px;
    display: grid;
    margin-inline: auto;
    font-size: large;
    font-weight: 300;
    padding: 5px;
    box-shadow: 7px 7px rgba(77, 65, 65, 0.3);
    border-inline-start: 5px solid;
    border-block-start: 5px solid;
    border-image-slice: 1;
    border-image-source: radial-gradient(circle at top left, #50bc34, transparent 50%);
    border-radius: 10px;
    @media screen and (max-width:847px) {
        width: 45%;
        margin-inline: auto;
        overflow-y: scroll;
    }
`