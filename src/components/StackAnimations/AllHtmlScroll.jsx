import { useEffect } from 'react';
import styled from 'styled-components';

export default function SeeAllHtml({status}){
    useEffect(()=>{
        let move=200
        if(status === 'visible'){
            const myBox=document.querySelector('.scolling')
            function moveDown(){
                myBox.scrollBy({
                    top:move,
                    behavior:'smooth'
                })
            }
            setTimeout(moveDown,1000)
            move+=100
        }
    })
    return(
        <AllHtml appear={status} className='scolling'>
      <pre id="codeCard">
           {`
             <div className='container'>
                <header className="imageprofile">
                    <img src='' alt=''/>
                </header>
                <footer >
                    <div className="positions">
                    <div className="description">
                    <div className="profileinfo"> nombre</div>
                        <hr className="verticaldiv"/>
                    <div className="profileinfo"> apellido</div>
                    </div>
                    <hr className="line"/>    
                    <div className="description">
                    <div className="profileinfo"> nombre</div>
                        <hr className="verticaldiv"/>
                    <div className="profileinfo"> apellido</div>
                    </div>
                    <hr className="line"/>
                    <div className="description">
                    <div className="profileinfo"> 
                        <button className="social"></button>
                        <button className="social"></button>
                        <button className="social"></button>
                    </div>
                        <hr className="verticaldiv"/>
                    <div className="profileinfo"> apellido</div>
                    </div>
                    </div>
                </footer>
             </div>
           `}
          </pre>
        </AllHtml>
    )
}

const AllHtml=styled.div`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    position: absolute;
    border-top: 2px groove black;
    border-bottom:2px groove black ;
    visibility: ${(props)=>props.appear};

`