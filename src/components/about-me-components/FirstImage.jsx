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
        margin:auto;
        height: 200px;  
        perspective: 600px;
        span{
            background: url(${background});
            inset: 0;
            background-size: 200px 200px;
            background-repeat: no-repeat;
            background-position: center center;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            transition: 3s;
        }
       
        @media screen and (max-width:847px){
            width: 150px;
            height: 150px;
   }
`