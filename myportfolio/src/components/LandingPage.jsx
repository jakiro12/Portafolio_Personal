import styled,{keyframes} from 'styled-components';
import ImageWeb from './SpecialComponents/FirstImage';
import TextAbout from './SpecialComponents/InfoAboutMe';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Init(){
    const[ver,setVer]=useState('hidden')
    const navigate=useNavigate()
    return(
        <Container>            
           <div className='btn-photo'>
            <Direction  time={ver} onMouseOver={()=>setVer('visible')} onMouseOut={()=>setVer('hidden')}>
                <header >
                    <p id='hola'>Aquí!</p>
                <div className='btn-container'>
                <span className='arrow'> </span>
                <span className='arrow'></span>
                <span className='arrow'></span>
                <span className='arrow'></span>
                <span className='arrow'></span>
                </div>
                </header>
                <ImageWeb  />
                <button className='btn-proyects'onClick={()=>navigate('/projects')}>Proyectos</button>
            </Direction>
           </div>
           <div className='my-info'>
            <div className='about'>
            <hr className='left'/>
            <p>Sobre mi</p>
            <hr className='right'/>
            </div>
            <TextAbout/>
              </div>
        </Container>
    )
}
const borderAnimate=keyframes`
    0%{
        transform: translateY(-70px) rotate(45deg);
    }
    100%{
        transform: translateY(5px) rotate(45deg);
    }
`
const Container=styled.div`
    height: 200vh;
    font-size: medium;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    background:#15518e;
   @media screen and (max-width:847px){
        display: grid;
   }
 
    .btn-photo{
        display: flex;
        justify-content: center;
        width:  600px;
        height: 520px;
        margin: 5%; 
        border: 2px solid #96c2ee15;
        @media screen and (max-width:847px){
            width: min(400px,50%) ;
            height: 480px;
            margin-inline: auto;
   }
       }
    .my-info{
        display: grid;
        justify-content: center;
        width:  600px;
        height: 420px;
        margin: 5%; 
        @media screen and (max-width:847px){
        width: min(400px,70%);
        margin-inline: auto;
        }
    }
    .about{
        width: 80%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        p{
            font-size: larger;
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    .left{
            height:20px;
            background: linear-gradient(to left, #50bc34,white);
            width: 50px;
            margin-left: auto;
            border: none;
            border-radius:  100% 0 0 0;
    }
    .right{
            height:20px;
            background: linear-gradient(to right, #50bc34,white);
            width: 50px;
            margin-right: auto;
            border: none;
            border-radius:  0 100% 0 0;
    }
`
const Direction=styled.article`
    height: 90%;
    width: 300px;
    margin: auto;
    display: grid;
    justify-content: center;
    position: relative;
    .btn-proyects{
        position: absolute;
        top: 72%;
        left: 35%;
        visibility: ${(props)=>props.time};
        background: #50bc34;
        border: none;
        padding:3px ;
        color: white;
        &:hover{
            cursor: pointer;
        }
        
    }
    header{
        width: 200px;
        height: 200px;        
        overflow: hidden;
        margin-top: 15%;
        text-align: center;
        p{
            font-weight: bold;
           margin-top: 4%;
        }
        .btn-container{
            overflow-y:hidden ;
            display: grid;
            width: 100px;
            height: 160px;
            margin: auto ;
            position: relative;
            margin-top: 10%;
        span{
            width: 80px;
            height: 25px;
            border: 2px solid transparent;
            margin: auto;
            text-align: center;
        }
                    
            .arrow {
            width: 40px;
            height: 40px;
            border: 4px solid #50bc34;
            border-left: 0;
            border-radius: 0 15px 0 15px;
            border-top: 0;
           animation: ${borderAnimate} 2s linear infinite;
            }
        }
    }
    
   
    
`