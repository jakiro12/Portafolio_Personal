import styled from "styled-components";
import background from "../../images/profile.jpg"
export default function ImageWeb(){
    return(
        <Image>
         <span></span>
         <span></span>
         <span></span>
         <span></span>

        </Image>
    )
}
const Image=styled.div`
        position: relative;      
        width: 200px;
        margin-inline:auto;
        height: 200px;  
        span{
            background: url(${background});
            inset: 0;
            background-size: 200px 200px;
            background-repeat: no-repeat;
            background-position: center center;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transition: 3s;
        }
        span:nth-child(1){
            clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);
        }
        span:nth-child(2){
            clip-path: polygon(50% 100%, 100% 100%, 100% 50%, 50% 50%);
        }
        span:nth-child(3){
            clip-path: polygon(0 100%, 50% 100%, 50% 50%, 0 50%);
        }
        span:nth-child(4){
            clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
        }
        &:hover span:nth-child(1){
            transform: translateX(40px) translateY(-70px) scale(0.8) rotate(45deg)  ;
            transition: 1s;
            border-radius: 0 120px 0 0;      
        }
        &:hover span:nth-child(2){
            transform: translateX(40px) translateY(70px) scale(0.8) rotate(-45deg)  ;
            transition: 1s;
            border-radius: 0  0 120px 0;      
        }
        &:hover span:nth-child(3){
            transform: translateX(-40px) translateY(70px) scale(0.8) rotate(45deg)  ;
            transition: 1s;
            border-radius: 0  0  0 120px;      
        }
        &:hover span:nth-child(4){
            transform: translateX(-40px) translateY(-70px) scale(0.8) rotate(-45deg)  ;
            transition: 1s;
            border-radius:120px 0  0  0 ;      
        }
        @media screen and (max-width:847px){
            width: 150px;
            height: 150px;
   }
`