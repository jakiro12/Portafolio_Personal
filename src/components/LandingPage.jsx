import styled,{keyframes} from 'styled-components';
import ImageWeb from './SpecialComponents/FirstImage';
import TextAbout from './SpecialComponents/InfoAboutMe';
import { useEffect, useRef } from 'react';
import MySkils from './StackComponents/Stack';
import MyLastestDeploys from './Deployed/RecentDeploys';
import { useState } from 'react';
import ModalToSeeDetails from './ResizeProjectSelected/ModalForEveryProject';

export default function Init(){
    const[showModalInfo,setShowModalInfo]=useState(false)
    const[deployRequestData,setDeployRequestData]=useState('')
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
        <Container >    
            {showModalInfo && <ModalToSeeDetails closeModal={()=>setShowModalInfo(false)} deployResizeChosen={deployRequestData}/>}   
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
            <MyLastestDeploys openDetails={()=>setShowModalInfo(true)} projectChosen={setDeployRequestData}/>
          </section>
          <footer className='all_about'>
            <button onClick={()=>scrollWebsite(about)} className='scroll_top'>&#8593;</button>
          </footer>
        </Container>
    )
}
const moveBtn=keyframes`
25%{
    transform: translateY(10px);
}
50%{
    transform: translateY(-10px);
}
100%{
    transform: translateY(0px);
}
    `
const Container=styled.div`
    height: 300vh;
    font-size: large;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5% 25% 35% 30% 5%;
    position: relative;
    overflow-x:hidden;
    nav{
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg , #ffffff 65%,#3eff0eba );
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: all 0.7s;
        li{
            list-style-type: none;
            cursor: pointer;
            position: relative;
            font-weight: 600;
            transition: all 0.7s;
            &::after{
                content: '';
                position: absolute;
                width: 0;
                height: auto;
                left: 0;
                bottom: -10%;
                border-bottom: 1px solid black;
            }
            &:hover::after{
                transition: all 0.7s;
                width: 100%;
            }
        }
        li:hover{
            transform: scale(1.05);
        }
    }
   
 
    .my_description{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 30% 60% 10%;
        width:  auto;
        height: 100%; 
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
        display: grid;
        place-items: center;
        background:linear-gradient(180deg , #3eff0eba,#ffffff 65% );
    }
    .scroll_top{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: black;
        font-size: xx-large;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #0000002c;
        background: transparent;
        animation-name: ${moveBtn};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        cursor: pointer;
    }
    @media screen and (max-width:847px){
        display: grid;
        height: 300vh;
        grid-template-columns: 1fr;
        grid-template-rows: 5% 25% 35% 30% 5%;
        overflow-x:hidden;
        nav{
            height: 60%;
            width: 100%;
        }
        .my_description{
            width: 100%;
            grid-template-rows: 25% 75%;
        }
         .more_info{
                width: 100%;
                display: grid;
                align-content: space-around;
            }   
   }
`
const Devname=styled.article`
    height: 50%;
    width: fit-content;
    margin: auto;
    display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(2,50%);
    h3{
        letter-spacing: 2px;
        font-size: xx-large;
        transform:  skew(10deg);     
    }    
`