const canvas=document.querySelector('#background')
const context=canvas.getContext('2d')
height=window.innerHeight
width=window.innerWidth

canvas.width=width
canvas.height=height

const play= function (){
    const audio= new Audio('song/expactro.mp3');
    audio.play();
}

const drawBackground=function (){
    const background=context.createLinearGradient(0,0,0,height)
    background.addColorStop(0, '#000B27');
    background.addColorStop(1, '#6C2484');
    context.fillStyle=background
    context.fillRect(0,0,width,height)
    
}

const drawForeground=()=>{
    const background=context.createLinearGradient(0,0,0,height)
    background.addColorStop(0, '#4A5360');
    background.addColorStop(1, '#4A5360');
    context.fillStyle='#4A5360';
    context.fillRect(0,height*0.95,width,height)

    

}

const drawWizard=()=>{
   image= new Image();
   image.src='image/wizard.png';
   image.onload=function(){
    context.drawImage(this,(width*0.9)-this.width,(height*0.95)-this.height)
   }
}

const drawStars =  ()=>{
   let starCount= 50;
   let random= (min,max)=>Math.random() * (max-min)+min

   while (starCount--){
    const x=random(25,width-50)
    const y=random(25,height*0.5)
    
    const size=random(1,5)
    context.fillStyle='#FFF'
    context.fillRect(x,y,size,size)
   }
}




drawForeground()
drawBackground()
drawWizard()
drawStars()
