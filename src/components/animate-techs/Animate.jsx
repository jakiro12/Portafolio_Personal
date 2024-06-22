import { useEffect } from 'react';

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
        function animateLeaf() {
            canvas_context.clearRect(0, 0, canvasTag.width, canvasTag.height);
            
            // Guardar el estado actual del contexto
            canvas_context.save();
            
            // Calcular las coordenadas para centrar la hoja
            const centerX = canvasTag.width / 2;
            const centerY = canvasTag.height / 2;
            
            // Aumentar el tamaño de la hoja
            const leafSize = 100; // Tamaño de la hoja
            
            // Rotar la hoja 45 grados (convertir a radianes)
            const angleInRadians = 75 * Math.PI / 180;
            
            // Aplicar la rotación al contexto del canvas
            canvas_context.translate(centerX, centerY); // Mover el origen al centro de la hoja
            canvas_context.rotate(angleInRadians); // Rotar
            canvas_context.translate(-centerX, -centerY); // Mover el origen de nuevo al punto original
            
            // Dibujo del bezierPath
            canvas_context.fillStyle = '#5DC1B9';
            canvas_context.beginPath();
            canvas_context.moveTo(centerX + leafSize / 2, centerY);
            canvas_context.quadraticCurveTo(centerX, centerY - leafSize / 2, centerX - leafSize / 2, centerY);
            canvas_context.quadraticCurveTo(centerX - leafSize, centerY + leafSize / 2, centerX, centerY + leafSize);
            canvas_context.quadraticCurveTo(centerX + leafSize, centerY + leafSize / 2, centerX + leafSize / 2, centerY);
            canvas_context.closePath();
            canvas_context.fill();
            
            // Restaurar el estado original del contexto
            canvas_context.restore();
        }
        
        

        animateLeaf();

    }, []);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative", boxShadow: "inset 0px 0px 5px 5px #ffffff", background: "#000000" }}>
            <canvas id='canvas_animation' style={{ position: 'absolute' }}></canvas>
        </div>
    );
}
