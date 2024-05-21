import { useEffect,useState } from 'react';
import styled from 'styled-components';
import githublogo from '../../images/github.png'
import linkedin from '../../images/linkedIn.png'

export default function MyLastestDeploys({openDetails,projectChosen}){
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
    const handleProjectSelected=(number)=>{
        openDetails()
        projectChosen(number)
    }
    return(
        <BoxDeploys>
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
              <section className='img_container'>
                <img className='img_deploy' src={require('../../images/game_balls.jpg')} alt="img logo" />
              </section>
                <div className='about_this_deploy'>
                    <p className='first_d3'>
                       Juego Web para enseñar la rueda cromatica de colores, eligiendo el color correcto por cada nivel;
                       solo para pantallas de escritorio (aun en desarrollo).
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}></button>
                        <button style={{backgroundSize:'cover'}}></button>
                    </div>
                </div>
            </div>
            <div className="card_description" >
            <section className='img_container'>
                <img className='img_deploy' src={require('../../images/fluviales.png')} alt="img logo" />
                </section>
                <div className='about_this_deploy'>
                    <p className='first_d4'>
                        Aplicacion Web en desarrollo para gestionar los viajes en bote desde la terminal
                        fluvial de Rosario hacia los paradores en las islas vecinas, solo frontend por el momento.
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
        width: min(700px,75%);
        height: 200px;
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
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .img_deploy{
            width: 80%;
            object-fit: fill;
            height: 100%;
            border: 2px solid #e3e1e1;
            border-radius: 5px;
        } 
    .about_this_deploy{
        width: 80%;
        height: 90%;
        font-size: medium;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
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
            background: url(${githublogo});
        }
        button:nth-child(2){
            background: url(${linkedin});
        }
    }
    @media screen and (max-width:847px){
        grid-template-columns:  repeat(auto-fit,minmax(min(150px,100%),1fr));
            grid-template-rows: 0.5fr;
            height: 80%;
            margin-bottom: auto;
        .card_description{
            font-size: 14px;
            width: 100%;
            height: 70%;
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