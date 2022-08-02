
const block = document.querySelector(".block")
document.body.appendChild(block);
const container = document.createElement("div");
container.classList.add("container");
block.appendChild(container);

const underBlock = document.querySelector(".under-block");
document.body.appendChild(underBlock);
let isDown;



 


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
        
       
          e.style.backgroundColor = "black";  
 
    }));



      content.forEach(e => e.addEventListener("mouseover", () => {
        console.log("hey");
        
        if(isDown){
          e.style.backgroundColor = "black";  
        }
       
        
    }));
  
