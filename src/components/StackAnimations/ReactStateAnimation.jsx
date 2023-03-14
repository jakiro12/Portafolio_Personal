import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
export default function StateIncrement({status}){
    const[count,setCount]=useState(32)
    useEffect(()=>{
        if(status === 'visible'){
            setTimeout(
                function(){
            setCount(count + 1)
                }, 1000
            )
        }
    })
    return(
        <Phrase appear={status} font={count}>
            Custom Hooks {count} 
        </Phrase>
    )
}

const Phrase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    font-size: '${(props)=>props.font}px';
    justify-content: center;
    align-items: center;
    position: absolute;
    outline: 2px solid black;
    visibility: ${(props)=>props.appear};

`