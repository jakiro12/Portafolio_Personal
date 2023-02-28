import styled from 'styled-components';
import ImageWeb from './SpecialComponents/FirstImage';
import TextAbout from './SpecialComponents/InfoAboutMe';
import { useEffect, useRef } from 'react';
import MySkils from './StackComponents/Stack';
import MyLastestDeploys from './Deployed/RecentDeploys';
export default function Init(){
    const test=useRef(null)
    const about=useRef(null)
    const deploys=useRef(null)
    const scrollWebsite=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:'smooth',
        })
    }

    useEffect(()=>{
        const getTitleName=document.querySelector('.my_name')
        const getTitleDev=document.querySelector('.my_job')
        let shadow=''
        let shadow2=''
         for (let index = 0; index < 8; index++) {
           shadow += (shadow ? ',': '')+ index*1+'px '+ index*1 + 'px 0 #a5a5a5'
            shadow2+=(shadow2 ? ',' :'') +index*1+ 'px ' +index*1 + 'px 0 #a5a5a5'
        } 
        getTitleName.style.textShadow=shadow;
        getTitleName.style.transition='all 3s'
        getTitleDev.style.textShadow=shadow2
        getTitleDev.style.transition='all 3s'     
    })
    return(
        <Container>       
            <nav>
                <li onClick={()=>scrollWebsite(about)}>About</li>
                <li onClick={()=>scrollWebsite(test)}>Skills</li>
                <li onClick={()=>scrollWebsite(deploys)}>Proyectos</li>
            </nav> 
           <section className='my_description' ref={about}>
            <Devname>
                   <h3 className='my_name'>Soy Lautaro Carreño</h3>
                   <h3 className='my_job'>Desarrollador Frontend</h3>
            </Devname>
            <aside className='more_info'>
                <ImageWeb/>
                <TextAbout/>
                </aside>
           </section>
          <section className='proyect_made_it' ref={test}>
            <MySkils/>
          </section>
          <section className='deploys_made_it' ref={deploys}>
            <MyLastestDeploys/>
          </section>
          <footer className='all_about'>derechos reservados</footer>
        </Container>
    )
}
const Container=styled.div`
    height: 300vh;
    font-size: medium;
    color: white;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5% 25% 35% 30% 5%;
    position: relative;
    background:#15518e;
    nav{
        height: 80%;
        width: 70%;
        border-radius: 0% 10% 0% 10% / 0% 100% 0% 100% ;
        border: 2px groove white;
        background-color: #50bc34;
        margin: auto;
        display: flex;
        box-shadow: 5px 5px 5px 1px black;
        justify-content: space-around;
        align-items: center;
        transition: all 1s;
        li{
            list-style-type: none;
            cursor: pointer;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                width: 0;
                height: auto;
                left: 0;
                bottom: -10%;
                border-bottom: 1px solid white;
            }
            &:hover::after{
                transition: all 1s;
                width: 100%;
            }
        }
    }
   @media screen and (max-width:847px){
        display: grid;
        height: 300vh;
        grid-template-columns: 1fr;
        grid-template-rows: 5% 25% 35% 30% 5%;
        nav{
            height: 60%;
        }
   }
 
    .my_description{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 40% 10%;
        width:  auto;
        height: 100%; 
        @media screen and (max-width:847px){
            width: min(450px,80%) ;
            height: 70%;
            margin: auto;
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
    .more_info{
        margin-inline:auto ;
        display: flex;
        width: 60%;
        height: auto;
        justify-content: space-around;
        align-items: center;
    }
    .proyect_made_it{
        width: auto;
        height: 100%;
    }
    .deploys_made_it{
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .all_about{
        outline: 2px solid blanchedalmond;
    }
`
const Devname=styled.article`
    height: 50%;
    width: 60%;
    margin-top: auto;
    margin-left: auto;
    display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(2,50%);
    h3{
        letter-spacing: 2px;
        font-size: xx-large;
        transform:  skew(10deg);     
    }    
`