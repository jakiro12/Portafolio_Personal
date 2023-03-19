import styled,{keyframes} from 'styled-components';
export default function BoxData({status}){
    return(
        <Schema appear={status}>
           <div className='cube'>
           <p>email varchar(25)</p>
           <p>lautaro_11_27@hotmail.com</p>
           <p>uuid</p>
           <p>ff55de58-llis735</p>

            <div className='cara'>
            <p>name(varchar 20) not null</p>
           <p>Lautaro</p>
           <p>description (text)</p>
           <p>Frontend Developer</p>
            </div>
            <div className='cara2'>
            <p>id bigint</p>
           <p>1234</p>
           <p>uuid</p>
           <p>ff55de58-llis735</p>
            </div>
            <div className='cara3'>
            <p>open to work bool</p>
           <p>true</p>
           <p>experiencia (char8)</p>
           <p>+1 año</p>
            </div>
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
    visibility: ${(props)=>props.appear};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 400px;
    perspective-origin: center;
    font-family: sans-serif;
    text-transform: lowercase;
    font-size: 10px;
    .cube{
        color: black;
        font-weight: 600;
        width: 120px;
        height: 80px;
        background-color: white;
        animation: ${rotation} 6s linear infinite;
        transform-style: preserve-3d;
        position: relative;
        outline: 1px solid black;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4,1fr);
        > p{
            width: 100%;
            height: 100%;
            text-indent: 4px;
            display: flex;
            align-items: center;
        
        }
        p:nth-child(2){
            outline: 1px solid black;
        }
        p:nth-child(3){
            border-bottom: 1px solid black;
        }
        .cara{
            position: absolute;
            left: -50%;
            top: 0;
            outline: 1px solid black;
            width: 100%;
            height: 100%;
            background-color: white;
            transform: rotateY(-90deg) translateX(-50%);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4,1fr);
            > p{
            width: 100%;
            height: 100%;
            text-indent: 4px;
            display: flex;
            align-items: center;
        }
        }
        .cara2{
            position: absolute;
            right: -50%;
            top: 0;
            width: 100%;
            height: 100%;
            outline: 1px solid black;

            background-color: white;
            transform: rotateY(90deg) translateX(50%);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4,1fr);
            > p{
            width: 100%;
            height: 100%;
            text-indent: 4px;
            display: flex;
            align-items: center;
        }
        }
        .cara3{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            width: 100%;
            outline: 1px solid black;

            height: 100%;
            background-color: white;
            transform: translateZ(-120px) rotateY(180deg);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4,1fr);
            > p{
            width: 100%;
            height: 100%;
            
            text-indent: 4px;
            display: flex;
            align-items: center;
        }
        }
    }
`