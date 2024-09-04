import styled from 'styled-components';
import githublogo from '../../images/github.png'
import internetlogo from '../../images/internetlogo.jpg'

export default function MyLastestDeploys(){
    
    const handleOpenLinkCard=(urlToOpen)=>{
        window.open(urlToOpen,'_blank')
    }
    return(
        <BoxDeploys>
            <div className="card_description" >
            <aside className='img_container'   >
                <img className='img_deploy' src={require(`../../images/init2.jpg`)} alt="app skatepark" />
                </aside>
                <div className='about_this_deploy'>
                    <p className='first_d'>
                        Aplicacion web para asignar tareas a un tablero personal de trello usando credenciales personales sin necesidad de iniciar sesion
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button 
                            onClick={()=>handleOpenLinkCard('https://trello-list-maker.vercel.app/')}                        
                        style={{backgroundSize:'cover'}}></button>
                        <button 
                            onClick={()=>handleOpenLinkCard('https://github.com/jakiro12/trello_list_maker')}                                                
                        style={{backgroundSize:'cover'}}></button>
                    </div>
                </div>                
            </div>
            <div className="card_description" >
              <aside className='img_container'>
                <img className='img_deploy' src={require('../../images/invitacion.jpg')} alt="img logo" />
              </aside>
                <div className='about_this_deploy'>
                    <p className='first_d'>
                    Invitación animada para las bodas, se pueden elegir entre ubicaciones la iglesia o el lugar de la ceremonia civil.
                    También proporcione un enlace para descargar un PDF con todos los eventos de la boda.
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}
                            onClick={()=>handleOpenLinkCard('https://mockup-greenplus.vercel.app/')}
                        ></button>
                        <button style={{backgroundSize:'cover'}}
                             onClick={()=>handleOpenLinkCard('https://github.com/jakiro12/wedding_invitation')}
                             ></button>
                    </div>
                </div>
            </div>
          <div className="card_description" >
            <aside className='img_container'>
                <img className='img_deploy' src={require(`../../images/phaser_game1.jpg`)} alt="img logo" />
                </aside>
                <div className='about_this_deploy'>
                    <p className='first_d'>
                    Juego para aprender la teoria de colores. Debes agregar un color a las esferas y elegir las que coincidan con el color solicitado que se muestra en la esquina superior izquierda de la pantalla, para avanzar de nivel y completar la rueda cromatica de colores.
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}}
                            onClick={()=>handleOpenLinkCard('https://colors-game-murex.vercel.app/')}
                        ></button>
                        <button style={{backgroundSize:'cover'}}
                            onClick={()=>handleOpenLinkCard('https://github.com/jakiro12/bugs_game')}
                        ></button>
                    </div>
                </div>
            </div>
            <div className="card_description" >
            <aside className='img_container'>
                    <img className='img_deploy' src={require(`../../images/dovereapp1.png`)} alt="img logo" />
                </aside>
                <div className='about_this_deploy'>
                    <p className='first_d'>
                       Aplicacion movil realizada en React Native para obtener puntos a traves de un codigo
                       QR, cuando entregues botellas de plastico u vidrio en cualquier centro de reciclaje adherido
                    </p>
                    <div className='box_social_medias_deploy'>
                        <button style={{backgroundSize:'cover'}} disabled></button>
                        <button style={{backgroundSize:'cover'}}
                            onClick={()=>handleOpenLinkCard('https://github.com/jakiro12/Dovere')}
                        ></button>
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
        height: max(18%, 220px);
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: 16px;
            font-weight: bolder;
        }
    }
    .box_social_medias_deploy{
        width: 60%;
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
    }

`