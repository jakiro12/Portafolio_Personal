import styled from "styled-components";
export default function MobileMenu({closeMenu,onScrollStack,onScrollProyects}){
    const handleOpenMedias=(urlMedia)=>{
        window.open(urlMedia,'_blank')
        closeMenu()
    }
    const handleScrollView=(webSection)=>{
        webSection()
        closeMenu()
    }
    return(
        <ModalMobile>
            <ul>
                <li style={{alignSelf:'flex-end',marginRight:'5%'}}
                    onClick={closeMenu}
                >X</li>
                <li 
                    onClick={()=>handleScrollView(onScrollStack)}
                >Stack</li>
                <li
                    onClick={()=>handleScrollView(onScrollProyects)}
                >Proyectos</li>
                <li 
                    onClick={()=>handleOpenMedias('https://github.com/jakiro12')}
                >GitHub</li>
                <li 
                    onClick={()=>handleOpenMedias('https://www.linkedin.com/in/lautaro-carre%C3%B1o-9b9248b1/')}
                >LinkedIn</li>
            </ul>
        </ModalMobile>
    )
}


const ModalMobile=styled.div`
        position: fixed;
        z-index: 1;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        ul{
            transition: all 1s;
            width: 100%;
            height: 40%;
            border-bottom:2px solid #e3e1e1;
            box-shadow: 0px 3px 10px 3px #0000004a;
            display: flex;
            background-color: #e6eef6;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            li{
                list-style: none;
                cursor: pointer;
                font-weight: bold;
            }
            li:nth-child(1){
                width: 40px;
                height: 40px;
                border: 2px solid #000000;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
        }
        `