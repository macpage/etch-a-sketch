const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
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



      content.forEach(e => e.addEventListener("mouseover", () => {
        console.log("hey");
        
        if(isDown){
          e.style.backgroundColor = "black";  
        }
       
        
    }));
  
