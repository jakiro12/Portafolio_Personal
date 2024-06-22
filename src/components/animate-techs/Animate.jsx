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

        // Calcular la posición inicial del cuadrado
        let squareX = widthScreen * Math.random(); // posición x inicial del cuadrado
        let squareY = parentHeight * Math.random(); // posición y inicial del cuadrado
        const squareSize = 10; // tamaño del cuadrado

        // Velocidad y dirección inicial del cuadrado
        let dx = 2; // velocidad en dirección x
        let dy = 2; // velocidad en dirección y

        function drawSquare(context, x, y, size) {
            context.fillRect(x - size / 2, y - size / 2, size, size);
        }

        function animateSquare() {
            canvas_context.clearRect(0, 0, canvasTag.width, canvasTag.height);

            // Dibuja el cuadrado
            canvas_context.fillStyle = '#5DC1B9';
            drawSquare(canvas_context, squareX , squareY, squareSize);
            drawSquare(canvas_context, squareX , squareY, squareSize);

            // Actualiza la posición del cuadrado
            squareX += dx;
            squareY += dy;

            // Detecta colisiones con las paredes del canvas
            if (squareX + squareSize / 2 > canvasTag.width || squareX - squareSize / 2 < 0) {
                dx = -dx; // invierte la dirección en x al colisionar con los bordes laterales
            }
            if (squareY + squareSize / 2 > canvasTag.height || squareY - squareSize / 2 < 0) {
                dy = -dy; // invierte la dirección en y al colisionar con los bordes superior o inferior
            }

            requestAnimationFrame(animateSquare);
        }

        animateSquare();

    }, []);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative", boxShadow: " inset 0px 0px 5px 5px #b4b1b1", background:"#000000" }}>
            <canvas id='canvas_animation' style={{ position: 'absolute' }}></canvas>
        </div>
    );
}
