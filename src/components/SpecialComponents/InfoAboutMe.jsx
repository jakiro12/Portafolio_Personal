import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
export default function TextAbout(){
    const[seeText,setSeeText]=useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setSeeText(1)
        }, 3000);
        
    })
    return(
        <Container behind={seeText} onMouseOver={()=>setSeeText(1)} onMouseOut={()=>setSeeText(0)}>
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
    font-size: medium;
    font-weight: 300;
    transition: all 3s;
    opacity: ${(props)=>props.behind};
    padding: 5px;
    @media screen and (max-width:847px) {
        width: 45%;
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