import styled,{keyframes} from 'styled-components';
export default function BoxData({status}){
    return(
        <Schema appear={status}>
           <div className='cube'>
           <p>email varchar(25)</p>
           <p>lautaro_11_27@hotmail.com</p>
           <p>uuid</p>
           <p>ff55de58-llis735</p>

            <div className='cara'></div>
            <div className='cara2'></div>
            <div className='cara3'></div>
           </div>
        </Schema>
    )
}
const rotation=keyframes`
    0%{
        transform: rotateY(0deg);
    }
    100%{
        transform: rotateY(360deg);
    }
`
const Schema=styled.div`
    width: 100%;
    height: 100%;
    outline: 2px solid black;
    visibility: ${(props)=>props.appear};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    perspective-origin: center;
    font-family: sans-serif;
    text-transform: lowercase;
    font-size: 10px;
    .cube{
        color: black;
        font-weight: 600;
        width: 140px;
        height: 80px;
        background-color: white;
        animation: ${rotation} 6s linear infinite;
        transform-style: preserve-3d;
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4,1fr);
        > p{
            width: 100%;
            height: 100%;
            outline: 1px solid black;
            text-indent: 4px;
        }
        .cara{
            position: absolute;
            left: -50%;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: green;
            transform: rotateY(-90deg) translateX(-50%);
        }
        .cara2{
            position: absolute;
            right: -50%;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: red;
            transform: rotateY(-90deg) translateX(-50%);
        }
        .cara3{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: blue;
            transform: translateZ(-140px);
        }
    }
`