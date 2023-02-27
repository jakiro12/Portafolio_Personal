import styled from 'styled-components';

export default function MySkils(){
    return(
        <InfoSkills>
            <header>
                <p className='stack_title'>
                    Stack de trabajo
                </p>
            </header>
            <main>
                <div className='stack'>
                    <img src={require('../../images/javascript.png')} alt='logo JS'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/css.png')} alt='logo CSS'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/html.png')} alt='logo HTML'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/react.png')} alt='logo React'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/sql.png')} alt='logo SQL'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/postgresql.png')} alt='logo PostgreSQL'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/sass.jpg')} alt='logo Sass'/>
                </div>
                <div className='stack'>
                <img src={require('../../images/node.png')} alt='logo NodeJs'/>
                </div>
                
            </main>
            <footer>
                animacion por cada logo
            </footer>
        </InfoSkills>
    )
}

const InfoSkills=styled.article`
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15% 70% 15%;
    main{
        display: grid;
        width: 90%;
        height: 100%;
        margin-inline:auto ;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: repeat(2,1fr);
        .stack{
            width: 60%;
            height: 80%;
            
            margin: auto;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            img{
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
        &::before{
            content: '';
            position: absolute;
            left: 0;
            bottom: -10%;
            height: 20%;
            background-color: #f2e98183;
            width: 100%;
        }
    }
`