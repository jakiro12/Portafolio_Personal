import styled from 'styled-components';
const allUrlDeploys={
    disney:'https://deploy-disney.vercel.app/home',
    cartags:'https://cartags.netlify.app/',
    rio:'https://sos-rio-rosario-app-8s7a.vercel.app/',
    skate:'https://lnkd.in/dXaT9v-P',
    repo_disney:'https://github.com/jakiro12/disney-plus-clone',
    repo_rio:'https://github.com/jakiro12/sos-rio-rosarioApp',
    repo_app:'https://github.com/jakiro12/skateparkapp',
    repo_cartags:'https://github.com/sonmyd/Alkemy-Project'

}

export default function MyLastestDeploys(){
    const LinkTo=(e)=>{
        window.open(e,'_blank')
    }
    return(
        <BoxDeploys>
            <div className="card_description">
                <img className='img_deploy' src={require('../../images/rio-muestra.jpg')} alt="img logo" />
                <div className='about_this_deploy'>
                    <p>
                        Aplicacion Web adaptada a moviles para reservar viajes y excursiones en la terminal fluvial 
                        de Rosario.
                    </p>
                    <div className='btn_see'>
                    <button className='logo' onClick={()=>LinkTo(allUrlDeploys.rio)}>
                        </button><button  className='logo' onClick={()=>LinkTo(allUrlDeploys.repo_rio)}></button>
                    </div>
                </div>
                
            </div>
            <div className="card_description">
                    <img className='img_deploy' src={require('../../images/disney.jpg')} alt="img logo" />
                <div className='about_this_deploy'>
                    <p>
                       Clon de disney plus basico con auth de firebase, solo visual
                    </p>
                    <div className='btn_see'>
                    <button className='logo' onClick={()=>LinkTo(allUrlDeploys.disney)}></button>
                    <button  className='logo' onClick={()=>LinkTo(allUrlDeploys.repo_disney)}></button>
                    </div>
                </div>
            </div>

            <div className="card_description">
                <img className='img_deploy' src={require('../../images/cartags.jpg')} alt="img logo" />
                <div className='about_this_deploy'>
                    <p>
                       Aplicacion Web para crear diseños de tarjetas de usuario unicos, totalmente editable 
                       desde la misma web
                    </p>
                    <div className='btn_see'>
                    <button className='logo' onClick={()=>LinkTo(allUrlDeploys.cartags)}></button>
                    <button  className='logo' onClick={()=>LinkTo(allUrlDeploys.repo_cartags)}></button>
                    </div>
                </div>
            </div>
            <div className="card_description">
                <img className='img_deploy' src={require('../../images/notfound.png')} alt="img logo" />
                <div className='about_this_deploy'>
                    <p>
                    Aplicacion Movil creada en React-Native para localizar todos los skateparks del pais
                    </p>
                    <div className='btn_see'>
                    <button className='logo' onClick={()=>LinkTo(allUrlDeploys.skate)}></button>
                    <button  className='logo' onClick={()=>LinkTo(allUrlDeploys.repo_app)}></button>
                    </div>
                </div>
            </div>
            </BoxDeploys>
    )
}

const BoxDeploys=styled.div`
    width: 90%;
    height: 100%;
  //  outline: 2px solid black;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    .card_description{
        width: 70%;
        height: 90%;
        //outline: 2px solid black;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 65% 35% ;
        .img_deploy{
            width: 80%;
            object-fit: cover;
            height: 100%;
            margin-inline: auto;
            border: 2px groove #bde552;
            border-radius: 5px;
        }
    }
    .about_this_deploy{
        padding: 1%;
        width: 80%;
        font-size: small;
        margin-inline: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
    .btn_see{
        width:auto ;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
       
    }
    .logo{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 10%;
        cursor: pointer;
        background: transparent;
        border: none;
        &:nth-child(2){
            background-image: url('https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png');
            background-size: cover;
        }
        &:nth-child(1){
            background-image:url('https://icon-library.com/images/play-icon-white-png/play-icon-white-png-26.jpg') ;
            background-size: cover;
        }
    }
    @media screen and (max-width:847px){
        grid-template-columns:  repeat(auto-fit,minmax(150px,1fr));
            grid-template-rows: 0.5fr;
            height: 70%;
            row-gap: 50px;
            margin-bottom: auto;
        .card_description{
            font-size: 14px;
           
            width: 100%;
            height: 70%;
            .img_deploy{}
        }
    }

`