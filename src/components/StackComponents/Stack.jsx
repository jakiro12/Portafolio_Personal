import styled from 'styled-components';
import AsyncAwaitAnimate from '../StackAnimations/FuncitonsAnimate';
import { useState } from 'react';
import StatusHttpCss from '../StackAnimations/StatusCodeCss';
export default function MySkils(){
    const[javaScriptAnimation,setJavaScriptAnimation]=useState('hidden')
    const[cssAnimation,setCssAniamtion]=useState('hidden')
    return(
        <InfoSkills>
            <header>
                <p className='stack_title'>
                    Stack de trabajo
                </p>
            </header>
            <main>
                <div className='stack' onMouseOver={()=>setJavaScriptAnimation('visible')} onMouseLeave={()=>setJavaScriptAnimation('hidden')}>
                    <img src={require('../../images/javascript.png')} alt='logo JS'/>
                </div>
                <div className='stack'  onMouseOver={()=>setCssAniamtion('visible')} vocab onMouseLeave={()=>setCssAniamtion('hidden')}>
                <img src={require('../../images/css.png')} alt='logo CSS'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/html.png')} alt='logo HTML'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/react.png')} alt='logo React'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/sql.png')} alt='logo SQL'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/postgresql.png')} alt='logo PostgreSQL'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/sass.jpg')} alt='logo Sass'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/node.png')} alt='logo NodeJs'/>
                </div>
                
            </main>
            <footer>
                <AsyncAwaitAnimate status={javaScriptAnimation}/>
                <StatusHttpCss status={cssAnimation}/>
            </footer>
        </InfoSkills>
    )
}

const InfoSkills=styled.article`
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15% 70% 15%;
    main{
        display: grid;
        width: 90%;
        height: 100%;
        margin-inline:auto ;
        grid-template-columns:  repeat(auto-fit,minmax(250px,1fr));
        grid-template-rows: auto;
        .stack{
            width: 60%;
            height: 80%;
            margin: auto;
            border-radius: 10px;
            position: relative;
            perspective: 700px;
            perspective-origin: top;
            transition: all 2s;
            img{
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
                &:hover{
                    transform:  rotateY(-30deg) scale(0.8) translateZ(-50px) ;
                    box-shadow: 5px 0px 10px black;
                    transition: all 2s;
                }   
            }
        }
    }
    header{
        display: flex;
        align-items: center;
    }
    
    .stack_title{
        margin-left: 10%;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            bottom: -10%;
            height: 20%;
            background-color: #f2e98183;
            width: 100%;
        }
    }
    footer{
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width:847px){
        main{
            width: 100%;
            height: 80%;
            .stack{
                width: 50%;
                height: 90%;
                display: flex;
                justify-content: center;
               // outline: 2px solid black;
                img{
                        width: 70%;
                        height: 100%;
                        object-fit: cover;
                    }
            }
        }
   }
   @media screen and (max-width:440px){
    main{
        grid-template-columns:  repeat(auto-fit,minmax(150px,1fr));
        .stack{
                width: 50%;
                height: 90%;
                display: flex;
                justify-content: center;
               // outline: 2px solid black;
                img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
            }
    }
   }
`