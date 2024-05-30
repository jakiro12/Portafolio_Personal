import { useEffect } from 'react';

export default function AnimateTechs() {
    useEffect(() => {
        const typescriptImg = new Image();
        typescriptImg.src = '/TypeScript.png';
        const cssImg = new Image();
        cssImg.src = '/CSS3.svg';
        const canvasTag = document.querySelector('#canvas_animation');
        const canvas_context = canvasTag.getContext('2d');
        
        // Obtener el tamaño del canvas y su elemento padre
        const widthScreen = window.innerWidth;
        const parentHeight = canvasTag.parentElement.offsetHeight;

        // Configurar el tamaño del canvas
        canvasTag.width = widthScreen;
        canvasTag.height = parentHeight;

        // Calcular el centro del canvas
        const centerX = canvasTag.width / 2;
        const centerY = canvasTag.height / 2;
        const angleRotation = 6;
        
        let startAngle = 0;
        const imgSize = 50;

        // Generar una posición aleatoria dentro del canvas
        function randomPosition() {
            const x = Math.random() * (canvasTag.width - imgSize) + imgSize / 2;
            const y = Math.random() * (canvasTag.height - imgSize) + imgSize / 2;
            return { x, y };
        }

        function detectCollision(obj1, obj2) {
            return (
                obj1.x < obj2.x + imgSize &&
                obj1.x + imgSize > obj2.x &&
                obj1.y < obj2.y + imgSize &&
                obj1.y + imgSize > obj2.y
            );
        }

        let typescriptPos = randomPosition();
        let cssPos = randomPosition();

        function animateStacks() {
            canvas_context.clearRect(0, 0, canvasTag.width, canvasTag.height);
            canvas_context.strokeStyle = '#9b5a01';
            canvas_context.lineWidth = 2;  
            canvas_context.save();  
            canvas_context.translate(0, centerY * 2 - 80);  
            canvas_context.rotate(30 * Math.PI / 180);  
            canvas_context.beginPath();
            canvas_context.moveTo(0, 0);
            canvas_context.lineTo(650, 0);
            canvas_context.stroke();
            canvas_context.restore();  

            canvas_context.strokeStyle = '#9b5a01';
            canvas_context.lineWidth = 2;  
            canvas_context.save();  
            canvas_context.translate(0, 80);  
            canvas_context.rotate( - 30 * Math.PI / 180);  
            canvas_context.beginPath();
            canvas_context.moveTo(0, 0);
            canvas_context.lineTo(650, 0);
            canvas_context.stroke();
            canvas_context.restore();  
          
            canvas_context.save();
            canvas_context.translate(typescriptPos.x, typescriptPos.y);
            canvas_context.rotate((Math.sin(startAngle * Math.PI / 240) * angleRotation + 0) * Math.PI / 180);  
            canvas_context.drawImage(typescriptImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
            canvas_context.restore();

            canvas_context.save();
            canvas_context.translate(cssPos.x, cssPos.y);
            canvas_context.rotate((Math.sin(startAngle * Math.PI / 240) * angleRotation + 0) * Math.PI / 180);  
            canvas_context.drawImage(cssImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
            canvas_context.restore();

            // Verificar colisiones y ajustar posiciones
            if (detectCollision(typescriptPos, cssPos)) {
                typescriptPos = randomPosition();
                cssPos = randomPosition();
            }

            startAngle += 1;
            requestAnimationFrame(animateStacks);
        }

        animateStacks();
    }, []);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative",boxShadow: "0px 5px 10px 10px #b4b1b1"  }}>
            <canvas id='canvas_animation' style={{ position: 'absolute' }}></canvas>
        </div>
    );
}
