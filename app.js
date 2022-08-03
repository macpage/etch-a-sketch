
const block = document.querySelector(".block")
document.body.appendChild(block);
const container = document.createElement("div");
container.classList.add("container");
block.appendChild(container);

const underBlock = document.querySelector(".under-block");
document.body.appendChild(underBlock);
const side = document.querySelector(".side");
block.appendChild(side);
let isDown;


let eraserOn;
 const eraser = document.querySelector(".eraser");

 eraser.addEventListener("click", () => eraserOn = true);

 const pick = document.querySelector("#colorpicker");

 pick.addEventListener("click", () => eraserOn = false);

    for(let i = 0; i<256;i++){
const grid = document.createElement("div");
    grid.classList.add("pixel");
    container.appendChild(grid);

}  
 
   let content = container.querySelectorAll("div");
   


    container.addEventListener("mousedown", () =>  {
        isDown = true;
         console.log(isDown);
    })



    container.addEventListener("mouseup", () => {
        isDown = false;
        console.log(isDown);
    })



    content.forEach(e => e.addEventListener("click", () => {
        console.log("hey");
        const color = document.querySelector("#colorpicker").value;
console.log(color);

        if(!eraserOn){
            e.style.backgroundColor = color;  
        } else{
            e.style.backgroundColor = "#ffffff";
        }
        
          
 
    }));



      content.forEach(e => e.addEventListener("mouseover", () => {
        console.log("hey");
        const color = document.querySelector("#colorpicker").value;
console.log(color);
        if(isDown){
            if(!eraserOn){
                e.style.backgroundColor = color;  
            } else{
                e.style.backgroundColor = "#ffffff";
            }
            
        }
       
        
    }));



    let isLiked;
    const liking = document.querySelector(".pic1");
    
    document.querySelector(".pic1").addEventListener("click", function () {
        this.style.transform = "scale(1.3)";
        setTimeout(()=>{
           this.style.transform = "scale(1)";
        },200)
      });

            liking.addEventListener("click", () => {      
                if(!isLiked){
        document.querySelector(".pic1").src = "pics-and-icons/liked.png";  
    isLiked = true;
    console.log("liked!")
                } else {
                    document.querySelector(".pic1").src = "pics-and-icons/like.png"; 
                    isLiked = false;
                    console.log("not liked!")
                }

})


let isOpen;

document.querySelector(".pic2").addEventListener("click", function () {
    this.style.transform = "scale(1.3)";
    setTimeout(()=>{
       this.style.transform = "scale(1)";
    },200)
  });

const comment = document.querySelector(".pic2");




    

comment.addEventListener("click", () => {      
    if(!isOpen){
document.querySelector(".box").style.display = "block";
document.querySelector(".box").classList.remove("close");
isOpen = true;
console.log("open!")
    } else {
        document.querySelector(".box").classList.add("close");
        isOpen = false;
        console.log("not open!")
    }

})



