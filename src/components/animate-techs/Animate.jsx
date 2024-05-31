import { useEffect } from 'react';

export default function AnimateTechs() {
    useEffect(() => {
            const reactImg = new Image();
            reactImg.src = '/React.png';
            const typescriptImg=new Image();
            typescriptImg.src='TypeScript.png'
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
            console.log(centerX,centerY)
            reactImg.onload= function  () {
               function animateStacks(){
                canvas_context.clearRect(0, 0, canvasTag.width, canvasTag.height);
                let imgSize=50
            canvas_context.save();
            canvas_context.translate(centerX, centerY);
            canvas_context.drawImage(reactImg, -imgSize/2, -imgSize/2, imgSize, imgSize);
            canvas_context.restore();


            canvas_context.save();
            canvas_context.translate(centerX + 80, centerY);
            canvas_context.drawImage(typescriptImg, -imgSize/2, -imgSize/2, imgSize, imgSize);
            canvas_context.restore();
            canvas_context.strokeStyle = '#9b5a01';
            canvas_context.lineWidth = 2;  
            canvas_context.save();  
            canvas_context.translate(0, 80);  
            canvas_context.rotate(-10 * Math.PI / 180);  
            canvas_context.beginPath();
            canvas_context.moveTo(0, 0);
            canvas_context.lineTo(650, 0);
            canvas_context.stroke();
            canvas_context.restore();  
        };
        animateStacks()
    }

        

    }, []);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative",boxShadow: "0px 0px 5px 5px #b4b1b1"  }}>
            <canvas id='canvas_animation' style={{ position: 'absolute' }}></canvas>
        </div>
    );
}
