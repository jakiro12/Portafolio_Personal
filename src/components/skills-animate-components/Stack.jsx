import styled from 'styled-components';

export default function MySkils(){
    
    return(
        <InfoSkills>
            <header>
                <p className='stack_title'>
                    Tecnologias que utilizo
                </p>
            </header>
            <main>
                <div className='stack' >
                    <img src={require('../../images/javascript.png')} alt='logo JS'/>
                </div>
                <div className='stack'  >
                <img src={require('../../images/css.png')} alt='logo CSS'/>
                </div>
                <div className='stack' >
                <img src={require('../../images/html.png')} alt='logo HTML'/>
                </div>
                <div className='stack' >
                <img src={require('../../images/react.png')} alt='logo React'/>
                </div>
                <div className='stack' >
                    <img src={require('../../images/javascript.png')} alt='logo JS'/>
                </div>
                <div className='stack'  >
                <img src={require('../../images/css.png')} alt='logo CSS'/>
                </div>
            </main>
        </InfoSkills>
    )
}

const InfoSkills=styled.article`
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15% 85%;
    main{
        display: flex;
        width: 90%;
        height: 100%;
        margin-inline:auto ;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
        .stack{
            width:100px;
            height: 100px;
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
        font-size: x-large;
        font-weight: 600;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            bottom: -10%;
            height: 20%;
            background-color: #D6DBDD;
            width: 100%;
        }
    }
   
`