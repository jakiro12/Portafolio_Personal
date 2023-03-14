import { useEffect } from 'react';
import styled from 'styled-components';

export default function SeeAllHtml({status}){
    useEffect(()=>{

        const myBox=document.querySelector('.scolling')
        const scrollBox=()=>{
            let heightTo=20
            myBox.scrollTop+=heightTo
            heightTo+= 20
        }
        setTimeout( scrollBox(),4000)
      
    })
    return(
        <AllHtml appear={status} className='scolling'>
      <pre id="codeCard">
           {`
             <div class='container'>
                <header class="imageprofile">
                    <img src='' alt=''/>
                </header>
                <footer >
                    <div class="positions">
                    <div class="description">
                    <div class="profileinfo"> nombre</div>
                        <hr class="verticaldiv"/>
                    <div class="profileinfo"> apellido</div>
                    </div>
                    <hr class="line"/>    
                    <div class="description">
                    <div class="profileinfo"> nombre</div>
                        <hr class="verticaldiv"/>
                    <div class="profileinfo"> apellido</div>
                    </div>
                    <hr class="line"/>
                    <div class="description">
                    <div class="profileinfo"> 
                        <button class="social"></button>
                        <button class="social"></button>
                        <button class="social"></button>
                    </div>
                        <hr class="verticaldiv"/>
                    <div class="profileinfo"> apellido</div>
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
    outline: 2px solid black;
    visibility: ${(props)=>props.appear};

`