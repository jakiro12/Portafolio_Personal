import styled from 'styled-components';


export default function MyLastestDeploys({openDetails,projectChosen}){
    
    const handleProjectSelected=(number)=>{
        openDetails()
        projectChosen(number)
    }
    return(
        <BoxDeploys>
            <div className="card_description" onClick={()=>handleProjectSelected(1)}>
            <section className='img_container'>
                <img className='img_deploy' src={require('../../images/rio-muestra.jpg')} alt="img logo" />
                </section>
                <div className='about_this_deploy'>
                    <p>
                        Aplicacion Web adaptada a moviles para reservar viajes y excursiones en la terminal fluvial 
                        de Rosario.
                    </p>
                </div>
                
            </div>
            <div className="card_description" onClick={()=>handleProjectSelected(2)}>
            <section className='img_container'>
                    <img className='img_deploy' src={require('../../images/disney.jpg')} alt="img logo" />
                </section>
                <div className='about_this_deploy'>
                    <p>
                       Clon de disney plus basico con auth de firebase, solo visual
                    </p>
                </div>
            </div>

            <div className="card_description" onClick={()=>handleProjectSelected(3)}>
              <section className='img_container'>
                <img className='img_deploy' src={require('../../images/cartags.jpg')} alt="img logo" />
              </section>
                <div className='about_this_deploy'>
                    <p>
                       Aplicacion Web para crear diseños de tarjetas de usuario unicos, totalmente editable 
                       desde la misma web
                    </p>
                </div>
            </div>
            <div className="card_description" onClick={()=>handleProjectSelected(4)}>
            <section className='img_container'>
                <img className='img_deploy' src={require('../../images/skatepark.jpg')} alt="img logo" />
                </section>
                <div className='about_this_deploy'>
                    <p>
                    Aplicacion Movil creada en React-Native para localizar todos los skateparks del pais
                    </p>
                </div>
            </div>
            </BoxDeploys>
    )
}

const BoxDeploys=styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    .card_description{
        width: min(330px,75%);
        height: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 65% 35% ;
        cursor: sw-resize;
    }
    .img_container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img_deploy{
            width: 80%;
            object-fit: fill;
            height: 100%;
            border: 2px groove #bde552;
            border-radius: 5px;
        }
    .about_this_deploy{
        padding: 1%;
        width: 80%;
        font-size: medium;
        margin-inline: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
    @media screen and (max-width:847px){
        grid-template-columns:  repeat(auto-fit,minmax(min(150px,100%),1fr));
            grid-template-rows: 0.5fr;
            height: 70%;
            row-gap: 50px;
            margin-bottom: auto;
        .card_description{
            font-size: 14px;
            width: 100%;
            height: 70%;
        }
    }

`