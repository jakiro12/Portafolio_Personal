import styled from "styled-components";
export default function ModalToSeeDetails({closeModal}){
    return(
        <Modal>
           <article>
           <header>
            <h3>Titulo</h3>
            <button onClick={closeModal}>X</button>
           </header>
           <main>fotoo</main>
           <footer>descripcion y link</footer>
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
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        article{
            width: min(400px,80%);
            height: 80%;
            outline: 2px solid black;
            display: grid;
            grid-template-columns:1fr;
            grid-template-rows: 10% 55% 35%;
            background-color: white;
            border-radius: 10px;
        }
        header{
            width: 90%;
            height: 100%;
            margin-inline: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > button{
                width: fit-content;
                height: fit-content;
                padding: 4px 7px 4px 7px;
                font-weight: bold;
                font-size: larger;
                border: none;
                color: white;
                background-color: black;
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
            outline: 2px solid black;
            margin: auto;
        }
        footer{
            width: 90%;
            height: 95%;
            margin: auto;
            outline: 2px solid black;
        }

`