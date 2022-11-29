import { useState } from "react";
import styled from "styled-components";
export default function TextAbout(){
    const[seeText,setSeeText]=useState(0)
    return(
        <Container behind={seeText} onMouseOver={()=>setSeeText(1)} onMouseOut={()=>setSeeText(0)}>
              <p>
                Desarrollador Full-Stack
            </p>
            <p>
                Hola soy lautaro, un desarrollador cuya meta es aprender en profundidad el diseño web y el uso de JavaScript.
                Actualmente tengo 1 año de experiencia y me he puesto como meta desarrollar proyectos complejos con el uso minimo de librerias.

            </p>
        </Container>
    )
}
const Container=styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    font-size: medium;
    font-weight: 300;
    transition: all 3s;
    opacity: ${(props)=>props.behind};
    padding: 5px;
    @media screen and (max-width:847px) {
        width: min(400px,90%);
        margin-inline: auto;
        overflow-y: scroll;
    }
    &:hover{
        transform:  scale(1.05);
        transition: 1s ease;
        box-shadow: 7px 7px rgba(77, 65, 65, 0.3);
        border-inline-start: 5px solid;
        border-block-start: 5px solid;
        border-image-slice: 1;
        border-radius: 10px;
        border-image-source: radial-gradient(circle at top left, #50bc34, transparent 50%);
    }
   
`