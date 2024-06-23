import { useEffect,useContext } from 'react';
import { ContextPage } from '../LandingPage';
import './styles.css'
export default function AnimateTechs() {
    const {bgImg}=useContext(ContextPage)
    
    useEffect(() => {
        const canvasTag = document.querySelector('#canvas_animation');
        const canvas_context = canvasTag.getContext('2d');
       
        // Obtener el tamaño del canvas y su elemento padre
        const widthScreen = window.innerWidth;
        const parentHeight = canvasTag.parentElement.offsetHeight;

        // Configurar el tamaño del canvas
        canvasTag.width = widthScreen;
        canvasTag.height = parentHeight;
        function drawHorizontalLine(xPosition,yPos) {
            canvas_context.beginPath();
            canvas_context.strokeStyle = 'white';
            canvas_context.lineWidth = 2;
            canvas_context.moveTo(xPosition, yPos);
            canvas_context.lineTo(widthScreen, yPos);
            canvas_context.stroke();
        }
        function drawVerticalLine(xPosition,yPosition){
            canvas_context.beginPath();
            canvas_context.strokeStyle = 'white';
            canvas_context.lineWidth = 2;
            canvas_context.moveTo(xPosition, yPosition);
            canvas_context.lineTo(xPosition, parentHeight);
            canvas_context.stroke();
        }

        // Ejemplo de dibujar tres líneas separadas verticalmente
        drawHorizontalLine(0,parentHeight * 0.15); 
        drawHorizontalLine(0,parentHeight * 0.25); 
        drawHorizontalLine(0,parentHeight * 0.35); 
        drawHorizontalLine(0,parentHeight *0.45); 
        drawHorizontalLine(0,parentHeight *0.5);
        drawHorizontalLine(0,parentHeight *0.55); 
        drawHorizontalLine(0,parentHeight * 0.65); 
        drawHorizontalLine(0,parentHeight * 0.75); 
        drawHorizontalLine(0,parentHeight * 0.85);
        // vertical lines or circles?
        drawVerticalLine(widthScreen * 0.05,0)
        drawVerticalLine(widthScreen * 0.475,0)
        drawVerticalLine(widthScreen * 0.5,0)
        drawVerticalLine(widthScreen * 0.525,0)

    }, []);

    return (
        <aside className="container_box">
        <canvas id='canvas_animation' style={{ position: 'absolute'}}></canvas>
        <div className="cube">
            <div className="face front_box" style={{
                 backgroundImage: `url(${bgImg}`,
                 backgroundRepeat:'no-repeat',
                 backgroundSize:'cover',
                }}></div>
            <div className="face back_box"
            style={{
                backgroundImage: `url(${bgImg}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face top_box"
            style={{
                backgroundImage: `url(${bgImg}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face bottom_box"
            style={{
                backgroundImage: `url(${bgImg}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face left_box"
            style={{
                backgroundImage: `url(${bgImg}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face right_box"
            style={{
                backgroundImage: `url(${bgImg}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
        </div>
    </aside>
    );
}
