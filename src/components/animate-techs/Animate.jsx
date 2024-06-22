import { useEffect } from 'react';

export default function AnimateTechs() {
    useEffect(() => {
        const javascriptImg=new Image();
        const typescriptImg = new Image();
        const cssImg = new Image();
        const htmlImg=new Image();
        const reactImg=new Image();
        const nextImg=new Image();
        typescriptImg.src = '/TypeScript.png';
        javascriptImg.src='/JavaScript.png'
        cssImg.src = '/CSS3.png';
        htmlImg.src='/HTML5.png'
        reactImg.src='/React.png'
        nextImg.src='/Nextjs.png'
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
        const squareSize = 10;
        function drawSquares(context,xPosition,yPosition,size){
            context.fillRect(xPosition - size, yPosition - size,size,size)
        }
        javascriptImg.onload= function () {     
            function animateStacks() {
                canvas_context.clearRect(0, 0, canvasTag.width,canvasTag.height); 
              
                canvas_context.fillStyle = '#5DC1B9'; // Color           
                //j      
                drawSquares(canvas_context,widthScreen * 0.12, centerY * 2 * 0.75, squareSize)
                drawSquares(canvas_context,widthScreen * 0.15, centerY * 2 * 0.85, squareSize)
                drawSquares(canvas_context,widthScreen * 0.18, centerY * 2 * 0.25, squareSize)
                drawSquares(canvas_context,widthScreen * 0.18, centerY * 2 * 0.5, squareSize)
                drawSquares(canvas_context,widthScreen * 0.18, centerY * 2 * 0.75, squareSize)
                //a
                drawSquares(canvas_context,widthScreen * 0.23, centerY * 2 * 0.85, squareSize)
                drawSquares(canvas_context,widthScreen * 0.24, centerY * 2 * 0.7, squareSize)
                drawSquares(canvas_context,widthScreen * 0.25, centerY * 2 * 0.45, squareSize)
                drawSquares(canvas_context,widthScreen * 0.26, centerY * 2 * 0.25, squareSize)
                drawSquares(canvas_context,widthScreen * 0.26, centerY * 2 * 0.6, squareSize)
                drawSquares(canvas_context,widthScreen * 0.27, centerY * 2 * 0.45, squareSize)
                drawSquares(canvas_context,widthScreen * 0.28, centerY * 2 * 0.7, squareSize)
                drawSquares(canvas_context,widthScreen * 0.29, centerY * 2 * 0.85, squareSize)
                //v
                drawSquares(canvas_context,widthScreen * 0.32, centerY * 2 * 0.25, squareSize)
                drawSquares(canvas_context,widthScreen * 0.33, centerY * 2 * 0.45, squareSize)
                drawSquares(canvas_context,widthScreen * 0.34, centerY * 2 * 0.65, squareSize)
                drawSquares(canvas_context,widthScreen * 0.35, centerY * 2 * 0.85, squareSize)
                drawSquares(canvas_context,widthScreen * 0.38, centerY * 2 * 0.25, squareSize)
                drawSquares(canvas_context,widthScreen * 0.37, centerY * 2 * 0.45, squareSize)
                drawSquares(canvas_context,widthScreen * 0.36, centerY * 2 * 0.65, squareSize)
                //a
                drawSquares(canvas_context,widthScreen * 0.41, centerY * 2 * 0.85, squareSize)
                drawSquares(canvas_context,widthScreen * 0.42, centerY * 2 * 0.7, squareSize)
                drawSquares(canvas_context,widthScreen * 0.43, centerY * 2 * 0.45, squareSize)
                drawSquares(canvas_context,widthScreen * 0.44, centerY * 2 * 0.25, squareSize)
                drawSquares(canvas_context,widthScreen * 0.44, centerY * 2 * 0.6, squareSize)
                drawSquares(canvas_context,widthScreen * 0.45, centerY * 2 * 0.45, squareSize)
                drawSquares(canvas_context,widthScreen * 0.46, centerY * 2 * 0.7, squareSize)
                drawSquares(canvas_context,widthScreen * 0.47, centerY * 2 * 0.85, squareSize)
                //s
                drawSquares(canvas_context,widthScreen * 0.50, centerY * 2 * 0.75, squareSize)
                drawSquares(canvas_context,widthScreen * 0.53, centerY * 2 * 0.85, squareSize)
                drawSquares(canvas_context,widthScreen * 0.56, centerY * 2 * 0.75, squareSize)
                drawSquares(canvas_context,widthScreen * 0.52, centerY * 2 * 0.5, squareSize)
                drawSquares(canvas_context,widthScreen * 0.54, centerY * 2 * 0.6, squareSize)
                drawSquares(canvas_context,widthScreen * 0.50, centerY * 2 * 0.35, squareSize)
                drawSquares(canvas_context,widthScreen * 0.53, centerY * 2 * 0.25, squareSize)
                drawSquares(canvas_context,widthScreen * 0.56, centerY * 2 * 0.35, squareSize)
                canvas_context.save();
                canvas_context.translate(widthScreen * 0.14, 100);
                canvas_context.rotate((Math.sin(startAngle * Math.PI / 180) * angleRotation + 0) * Math.PI / 180);  
                canvas_context.drawImage(javascriptImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                canvas_context.restore();
    
                canvas_context.save();
                canvas_context.translate(widthScreen * 0.28, 100);
                canvas_context.rotate((Math.sin(startAngle * Math.PI / 180) * angleRotation + 0) * Math.PI / 180);  
                canvas_context.drawImage(cssImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                canvas_context.restore();
    
                canvas_context.save();
                canvas_context.translate(widthScreen * 0.42, 100);
                canvas_context.rotate((Math.sin(startAngle * Math.PI / 180) * angleRotation + 0) * Math.PI / 180);  
                canvas_context.drawImage(htmlImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                canvas_context.restore();
                
                canvas_context.save();
                canvas_context.translate(widthScreen * 0.56, 100);
                canvas_context.rotate((Math.sin(startAngle * Math.PI / 180) * angleRotation + 0) * Math.PI / 180);  
                canvas_context.drawImage(typescriptImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                canvas_context.restore();
    
                canvas_context.save();
                canvas_context.translate(widthScreen * 0.7, 100);
                canvas_context.rotate((Math.sin(startAngle * Math.PI / 180) * angleRotation + 0) * Math.PI / 180);  
                canvas_context.drawImage(reactImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                canvas_context.restore();
    
                canvas_context.save();
                canvas_context.translate(widthScreen * 0.84, 100);
                canvas_context.rotate((Math.sin(startAngle * Math.PI / 180) * angleRotation + 0) * Math.PI / 180);  
                canvas_context.drawImage(nextImg, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                canvas_context.restore();
                startAngle += 1;
                requestAnimationFrame(animateStacks);
            }
            animateStacks();
        }

    }, []);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative",boxShadow: "0px 0px 5px 5px #b4b1b1"  }}>
            <canvas id='canvas_animation' style={{ position: 'absolute' }}></canvas>
        </div>
    );
}
