let intervalId;

const randomColor = function(){
    const hex ='0123456789ABCDEF';
    let color ='#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const startChangingColor = function(){
   const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor();
   }
   if(!intervalId){
    intervalId = setInterval(changeBgColor,1000)
   }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);