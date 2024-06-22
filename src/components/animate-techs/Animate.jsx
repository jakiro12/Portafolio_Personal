import { useEffect } from 'react';
import './styles.css'
export default function AnimateTechs() {
    useEffect(() => {
        const canvasTag = document.querySelector('#canvas_animation');
        const canvas_context = canvasTag.getContext('2d');

        // Obtener el tamaño del canvas y su elemento padre
        const widthScreen = window.innerWidth;
        const parentHeight = canvasTag.parentElement.offsetHeight;

        // Configurar el tamaño del canvas
        canvasTag.width = widthScreen;
        canvasTag.height = parentHeight;
    }, []);

    return (
        <aside className="container_box">
        <canvas id='canvas_animation' style={{ position: 'absolute' }}></canvas>
        <div className="cube">
            <div className="face front_box" style={{
                 backgroundImage: `url(${'/CSS3.png'}`,
                 backgroundRepeat:'no-repeat',
                 backgroundSize:'cover',
                }}></div>
            <div className="face back_box"
            style={{
                backgroundImage: `url(${'/CSS3.png'}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face top_box"
            style={{
                backgroundImage: `url(${'/CSS3.png'}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face bottom_box"
            style={{
                backgroundImage: `url(${'/CSS3.png'}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face left_box"
            style={{
                backgroundImage: `url(${'/CSS3.png'}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
            <div className="face right_box"
            style={{
                backgroundImage: `url(${'/CSS3.png'}`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
               }}></div>
        </div>
    </aside>
    );
}
