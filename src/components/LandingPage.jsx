import styled,{keyframes} from 'styled-components';
import ImageWeb from './about-me-components/FirstImage';
import TextAbout from './about-me-components/InfoAboutMe';
import { useEffect, useRef } from 'react';
import MySkils from './skills-animate-components/Stack';
import MyLastestDeploys from './projects-deployed/RecentDeploys';
import React,{ useState } from 'react';
import githublogo from '../images/github.png'
import linkedin from '../images/linkedIn.png'
import MobileMenu from './modal-menu/NavbarMenu';
import AnimateTechs from './animate-techs/Animate';
export const ContextPage=React.createContext()
export default function Init(){
    const[showMobileMenu,setShowMobileMenu]=useState(false)
    const[bgImg,setBgImg]=useState('')
    const test=useRef(null)
    const topPortfolio=useRef(null)
    const deploys=useRef(null)
    const scrollWebsite=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:'smooth',
        })
    }
    const handleOpenMySocialMedias=(url)=>{
        window.open(url,'_blank')
    }

    useEffect(()=>{
        const getTitleName=document.querySelector('.my_name')
        const getTitleDev=document.querySelector('.my_job')
        let shadow=''
        let shadow2=''
         for (let index = 0; index < 8; index++) {
           shadow += (shadow ? ',': '')+ index*1+'px '+ index*1 + 'px 0 #ffffff'
            shadow2+=(shadow2 ? ',' :'') +index*1+ 'px ' +index*1 + 'px 0 #ffffff'
        } 
        getTitleName.style.textShadow=shadow;
        getTitleName.style.transition='all 3s'
        getTitleDev.style.textShadow=shadow2
        getTitleDev.style.transition='all 3s'     
    })
    return(
        <ContextPage.Provider value={{bgImg,setBgImg}}>
            <Container >    
                {showMobileMenu && <MobileMenu closeMenu={()=>setShowMobileMenu(false)} onScrollStack={()=>scrollWebsite(test)} onScrollProyects={()=>scrollWebsite(deploys)}/>}
                <nav ref={topPortfolio}>
                    <li onClick={()=>scrollWebsite(test)}>Stack</li>
                    <li onClick={()=>scrollWebsite(deploys)}>Proyectos</li>
                    <div className='box_social_medias'>
                        <button type='button' style={{backgroundSize:'cover'}}
                        onClick={()=>handleOpenMySocialMedias('https://github.com/jakiro12')}
                        ></button>
                        <button type='button' style={{backgroundSize:'cover'}}
                        onClick={()=>handleOpenMySocialMedias('https://www.linkedin.com/in/lautaro-carre%C3%B1o-9b9248b1/')}
                        ></button>
                    </div>
                    <button className='menu_navbar_mobile' onClick={()=>setShowMobileMenu(true)}><hr/></button>
                </nav> 
            <section className='my_description' >
                <Devname>
                    <h3 className='my_name'>Soy Lautaro Carreño</h3>
                    <h3 className='my_job'>Desarrollador Frontend</h3>
                </Devname>
                <aside className='more_info'>
                    <TextAbout/>
                    <ImageWeb/>
                </aside>
            </section>
            <section className='proyect_made_it' ref={test}>
                <MySkils/>
                <AnimateTechs/>
            </section>
            <section className='deploys_made_it' ref={deploys}>
                <MyLastestDeploys />
            </section>
            <footer className='all_about'>
                <button onClick={()=>scrollWebsite(topPortfolio)} className='scroll_top'>&#8593;</button>
            </footer>
            </Container> 
        </ContextPage.Provider>
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
    height: 400dvh;
    font-size: large;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5% 25% 25% 41% 4%;
    position: relative;
    overflow-x:hidden;
    background-color: #e6eef6;
    nav{
        height: 100%;
        width: 100%;
        border-bottom:2px solid #e3e1e1;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: all 0.7s;
        box-shadow: 0px 3px 10px 3px #0000004a;
        li{
            list-style-type: none;
            cursor: pointer;
            position: relative;
            font-weight: 600;
            transition: all 0.7s;
            font-size: 18px;
            &::after{
                content: '';
                position: absolute;
                width: 0;
                height: auto;
                left: 0;
                bottom: -10%;
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
    .menu_navbar_mobile{
        display: none;
    }
    .box_social_medias{
        width: 15%;
        height: fit-content;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button{
            width: 40px;
            height: 40px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            box-shadow: 1px 1px 2px 2px #00000055;
        }
        button:nth-child(1){
            background: url(${githublogo});
        }
        button:nth-child(2){
            background: url(${linkedin});
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
        width: 95%;
        height: auto;
        justify-content: space-around;
        align-items: center;
    }
    .proyect_made_it{
        width: auto;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 70% 30%;
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
        background:transparent;
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
        border: 2px solid #3eff0eba;
        background: transparent;
        animation-name: ${moveBtn};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        cursor: pointer;
    }
    @media screen and (max-width:847px){
        display: grid;
        height: 350dvh;
        grid-template-columns: 1fr;
        grid-template-rows: 3% 25% 25% 42% 5%;
        overflow-x:hidden;
        .menu_navbar_mobile{
            display: block;
            margin-right: 5%;
            border-left: none;
            border-right:none;
            border-radius: none;
            background: transparent;
            height: 40px;
            width: 40px;
            cursor: pointer;
            hr{
                height: 2px;
                outline: none;
                border: none;
                background-color: #000000;
            }
        }
        nav{
            height: 100%;
            width: 100%;
            justify-content: flex-end;
            li{
                display: none;
            }
        }
        .my_description{
            width: 100%;
            grid-template-rows: 25% 75%;
        }
        .box_social_medias{
            display: none;
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