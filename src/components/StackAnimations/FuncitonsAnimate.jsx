import styled,{keyframes} from 'styled-components';
export default function AsyncAwaitAnimate({status}){
    const memory = navigator.deviceMemory;
    return(
        <FunctionShow appear={status}>
           {
            `tu memoria ram es ${memory} GB`
           }
        </FunctionShow>
    )
}
const move=keyframes`
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.9);
    }
`
const FunctionShow=styled.div`
    visibility: ${(props)=>props.appear};
    position: absolute;
    width: fit-content;
    height: fit-content;    
    border: 2px solid black;
    animation: ${move} 4s infinite;
`

