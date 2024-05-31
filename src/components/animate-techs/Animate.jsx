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
        javascriptImg.onload= function () {     
            function animateStacks() {
                canvas_context.clearRect(0, 0, canvasTag.width,canvasTag.height);
              
    
    
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
              
                canvas_context.strokeStyle = '#9b5a01';
                canvas_context.lineWidth = 2;  
                canvas_context.save();  
                canvas_context.translate(centerX * 2 - 160, 0);  
                canvas_context.rotate(  30 * Math.PI / 180);  
                canvas_context.beginPath();
                canvas_context.moveTo(0, 0);
                canvas_context.lineTo(650, 0);
                canvas_context.stroke();
                canvas_context.restore();  
    
                canvas_context.strokeStyle = '#9b5a01';
                canvas_context.lineWidth = 2;  
                canvas_context.save();  
                canvas_context.translate(centerX * 2 - 160, centerY * 2 );  
                canvas_context.rotate(- 30 * Math.PI / 180);  
                canvas_context.beginPath();
                canvas_context.moveTo(0, 0);
                canvas_context.lineTo(650, 0);
                canvas_context.stroke();
                canvas_context.restore();  
    
    
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
