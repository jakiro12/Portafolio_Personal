import { useEffect,useState } from 'react';
import styled from 'styled-components';
import githublogo from '../../images/github.png'
import internetlogo from '../../images/internetlogo.jpg'

export default function MyLastestDeploys(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgEndPath = ['1','2', '3'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex =>
            (prevIndex + 1) % imgEndPath.length
        );
      }, 2000);
      return () => clearInterval(intervalId);
    }); 
    const currentImage = imgEndPath[currentIndex];
    const handleOpenLinkCard=(urlToOpen)=>{
        window.open(urlToOpen,'_blank')
    }
    return(
        <BoxDeploys>
            <div className="card_description" >
              <section className='img_container'>
                <img className='img_deploy' src={require('../../images/invitacion.jpg')} alt="img logo" />
              </section>
                <div className='about_this_deploy'>
                    <p className='first_d3'>
                    Invitación especial para las bodas, se pueden elegir entre ubicaciones para la ceremonia: la iglesia o el lugar de la ceremonia civil.
                    También proporcione un enlace para descargar un PDF con todos los eventos de la boda.
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}
                            onClick={()=>handleOpenLinkCard('https://mockup-greenplus.vercel.app/')}
                        ></button>
                        <button style={{backgroundSize:'cover'}}></button>
                    </div>
                </div>
            </div>
          <div className="card_description" >
            <section className='img_container'>
                <img className='img_deploy' src={require(`../../images/phaser_game${currentImage}.jpg`)} alt="img logo" />
                </section>
                <div className='about_this_deploy'>
                    <p className='first_d'>
                    En este juego, tienes que agregar colores a las esferas que rebotan por la pantalla utilizando una paleta de colores en la parte inferior. Debes tocar las esferas que coincidan con el color solicitado que se muestra en la esquina superior izquierda de la pantalla, para avanzar de nivel y completar la rueda cromatica de colores
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}
                        onClick={()=>handleOpenLinkCard('https://colors-game-murex.vercel.app/')}
                        ></button>
                        <button style={{backgroundSize:'cover'}}></button>
                    </div>
                </div>
            </div>
            <div className="card_description" >
            <section className='img_container'>
                    <img className='img_deploy' src={require(`../../images/dovereapp${currentImage}.png`)} alt="img logo" />
                </section>
                <div className='about_this_deploy'>
                    <p className='first_d2'>
                       Aplicacion movil realizada en React Native para obtener puntos a traves de un codigo
                       QR, cuando entregues botellas de plastico u vidrio en cualquier centro de reciclaje adherido
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}></button>
                        <button style={{backgroundSize:'cover'}}></button>
                    </div>
                </div>
            </div>
            <div className="card_description" >
            <section className='img_container'   >
                <img className='img_deploy' src={require(`../../images/skatepark${currentImage}.png`)} alt="app skatepark" />
                </section>
                <div className='about_this_deploy'>
                    <p className='first_d'>
                    Aplicacion Movil creada en React-Native para localizar todos los skateparks del pais.
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}></button>
                        <button style={{backgroundSize:'cover'}}></button>
                    </div>
                </div>
                
            </div>
            </BoxDeploys>
    )
}

const BoxDeploys=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .card_description{
        width: min(700px,95%);
        height: max(20%, 220px);
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:  #D6DBDD ;
        box-shadow: 0px 6px 5px #00000055;
        border-radius: 10px;
        overflow: hidden;
    }
    .img_container{
        width: 45%;
        height: 100%;
        overflow: hidden;
    }
    .img_deploy{
            width: 100%;
            object-fit: fill;
            height: 100%;
            border: 2px solid #e3e1e1;
            border-radius: 5px;
        } 
    .about_this_deploy{
        width: 50%;
        height: 95%;
        font-size: medium;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .box_social_medias_deploy{
        width: 45%;
        height: fit-content;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button{
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
        }
        button:nth-child(1){
            background: url(${internetlogo});
        }
        button:nth-child(2){
            background: url(${githublogo});
        }
    }
    @media screen and (max-width:450px){
        .img_container{
            height: 100px;
        }
        .card_description{
            grid-template-rows: 50% 50%;
        }
        .first_d{
            margin-top: 10px;
        }
        .first_d2{
            margin-top: 10px;
        }

    }

`