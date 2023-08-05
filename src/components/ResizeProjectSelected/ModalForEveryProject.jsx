import styled from "styled-components";
export default function ModalToSeeDetails({closeModal,deployResizeChosen}){
    let rio=require('../../images/rio-muestra.jpg')
    let disney =require('../../images/disney.jpg')
    let tres=require('../../images/cartags.jpg')
    let cuatro=require('../../images/skate.jpeg')
    const techOfEachProject=[
        ['ReactJs','StyledComponents','CSS','HTML','Redux','NodeJs'],
        ['HTML','CSS','ReactJS','NextJs','ContexApi'],
        ['ReactJs','StyledComponents','CSS','HTML','Redux','NodeJs'],
        ['HTML','CSS','ReactJS','NextJs','ContexApi'],
    ]
    return(
        <Modal>
           <article>
           <header>
            <h3>
                {deployResizeChosen === 1 ? 'Rio' : deployResizeChosen === 2 ? 'disney' : deployResizeChosen === 3 ? 'morty' : deployResizeChosen ? 'nada' : undefined}
            </h3>
            <button onClick={closeModal} className="close_modal">X</button>
           </header>
           <main>
            <img className='img_deploy' src={deployResizeChosen === 1 ? rio : deployResizeChosen === 2 ? disney : deployResizeChosen === 3 ? tres : cuatro} alt="holaa"/>
           </main>
           <footer>
            <h4>Tecnologias utilizadas:</h4>
            <div className="techs">
                {
                    techOfEachProject[deployResizeChosen - 1].map((e,i)=>(
                        <p key={i} className="tech_inside">{e}</p>
                    ))
                }
            </div>
            <button className="open_project">Ver</button>
           </footer>
           </article>
        </Modal>
    )
}


const Modal=styled.div`
        position: fixed;
        z-index: 1;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(143, 143, 143);
        display: flex;
        justify-content: center;
        align-items: center;
        article{
            width: min(400px,80%);
            height: 75%;
            display: grid;
            grid-template-columns:1fr;
            grid-template-rows: 12% 53% 35%;
            background-color: white;
            border-radius: 10px;
            box-shadow: 3px 3px 10px black;
        }
        header{
            width: 90%;
            height: 100%;
            margin-inline: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .close_modal{
                width: fit-content;
                height: fit-content;
                padding: 4px 7px 4px 7px;
                font-weight: bold;
                font-size: larger;
                border: none;
                background-color: transparent;
                border-radius: 5px;
                cursor: pointer;
            }
            & > h3{
                width: 60%;
                height: fit-content;
                display: flex;
                justify-content: flex-end;
            }
        }
        main{
            width: 90%;
            height: 90%;
            margin: auto;
        }
        footer{
            width: 90%;
            height: 95%;
            margin: auto;
            outline: 2px solid black;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 15% 60% 25% ;
        }
        .img_deploy{
            width: 100%;
            object-fit: fill;
            height: 100%;
        }
        .img_deploy:nth-last-child(1){
            object-fit: contain;
        }
        .techs{
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(5,1fr);
        }
        h4{
            text-decoration: underline;
        }
        .open_project{
            width: fit-content;
            height: fit-content;
            border: 2px  solid black;
            background-color: black;
            color: white;
            margin: auto;
            font-size: larger;
            border-radius: 5px;
            cursor: pointer;
            }
        .tech_inside{
            width: fit-content;
            height: fit-content;
            margin: auto;
        }
`