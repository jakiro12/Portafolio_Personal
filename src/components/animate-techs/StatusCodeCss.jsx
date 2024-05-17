import styled,{keyframes} from 'styled-components';
import { useEffect } from 'react';
export default function StatusHttpCss({status}){
    useEffect(()=>{
        let drawShadow=document.querySelector('.code_text')
        let shadow=''
        for(let index= 2; index < 10; index++){
            shadow += (shadow ? ',': '')+ index*1+'px '+ index*0 + 'px 0 #2cf504'
        }
        drawShadow.style.textShadow=shadow
    })
    return(
        <ResponseCode appear={status}>
            <div className='code_text'></div>
            <div className='code_text'></div>
            <div className='code_text'></div>

            <div className='code_text'></div>
            <div className='code_text'></div>
            <div className='code_text'></div>

            <div className='code_text'></div>
            <div className='code_text'></div>
            <div className='code_text'></div>

            <div className='code_text'></div>
            <div className='code_text'></div>
            <div className='code_text'></div>
        </ResponseCode>
    )
}
const status=keyframes`
    100% {
    transform: rotateY(25deg) rotateX(33deg) scale(1.5);
  }
`
const ResponseCode=styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(white,grey);
    visibility: ${(props)=>props.appear};
    display: grid;
    perspective: 700px;
    place-items: center;
    position: relative;
    --status-size:25px;
    .code_text{
        width: 50%;
        position: absolute;
        height: 50%;
       animation: ${status} 5s infinite alternate ease-in-out -7.5s;
  animation-fill-mode: forwards;
        transform-style: preserve-3d;
     transform: rotateY(-20deg) rotateX(-10deg) translateZ(0);  
     &::after{
        font-size: var(--status-size);
        content: "Status 102 Loading...";
        white-space: pre;
        text-align: center;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 25%;
        color: #0fc533;
        letter-spacing: -2px;
        text-shadow: 4px 0 1px rgba(0, 0, 0, 0.13);
     }             
    }
    .code_text:nth-child(1)::after{
        transform: translateZ(0px);
    }
    .code_text:nth-child(2)::after{
        transform: translateZ(1px);
    }
    .code_text:nth-child(3)::after{
        transform: translateZ(2px);
    }
    .code_text:nth-child(4)::after{
        transform: translateZ(3px);
    }
    .code_text:nth-child(5)::after{
        transform: translateZ(4px);
    }
    .code_text:nth-child(6)::after{
        transform: translateZ(5px);
    }
    .code_text:nth-child(7)::after{
        transform: translateZ(6px);
    }
    .code_text:nth-child(8)::after{
        transform: translateZ(7px);
    }
    .code_text:nth-child(9)::after{
        transform: translateZ(8px);
    }
    .code_text:nth-child(10)::after{
        transform: translateZ(9px);
    }
    .code_text:nth-child(11)::after{
        transform: translateZ(10px);
    }
    .code_text:nth-child(12)::after{
        transform: translateZ(11px);
    }
`