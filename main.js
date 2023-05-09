// create the grid
function populate(size) {
    const grid = document.querySelector(".grid-container");
    const box = document.createElement("div");
    let gridSize = 800;

    let grid_size = gridSize /size;
    if (grid.hasChildNodes()) {
        while (grid.firstChild) {
          grid.removeChild(grid.lastChild);
        }
    }
    box.classList.add("box");
    box.style.width = grid_size + "px";
    box.style.height = grid_size + "px";

    for (let i = 0; i < size * size; i++) {
        grid.appendChild(box.cloneNode(true));
    }

    // color the boxes 
    const coloredBox = document.querySelectorAll(".box");
    coloredBox.forEach((element) => {
    element.addEventListener("mouseover", colorBox);
    });
    shadeBox();
}
populate(16);

// change grid size using the button
const changeGridSize = document.getElementById("grid-size");
changeGridSize.addEventListener("click", () => {
    do{
        size = parseInt(prompt("Insert the new size: "));
    }while(size < 2 || size > 100 || isNaN(size));

    document.getElementById("range-value").textContent = size;
    document.getElementById("range").value = size;
    populate(size);
});

// change grid size using range slider
const slider = document.getElementById("range");
slider.addEventListener("input", () => {
  const sliderValue = document.getElementById("range-value");
  sliderValue.textContent = slider.value;
  populate(slider.value);
});


let color = ""; // value of the assigned background color

// change color
function changeMode(colorChoice){
    color = colorChoice;
}

// colors the boxes
function colorBox(){
    if(color == "random"){
        this.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )})`;
    } else{
        this.style.backgroundColor = color;
    }
}

// shade the boxes with each pass
function shadeBox(){
    const changeRGB = document.querySelectorAll(".box");
    changeRGB.forEach((element) => {
        let i = 240;
        element.addEventListener("mouseover", () => {

            if (element.style.backgroundColor == "white"){
                i = 240;
            }
            if (color == "shade") {
                let part = element.style.backgroundColor.replace(/(rgb\(|\))/g, "").trim();
                let arr = part.split(",");
                let [r,g,b] = [...arr];
                if (r !== g && g !== b ){
                    i = 240;
                    element.style.backgroundColor = `rgb(${i},${i},${i})`;
                }
                    element.style.backgroundColor = `rgb(${i},${i},${i})`;
                    if (i > 0) {
                        i -= 25;
                    } 
            }
        });
        
    });
}

// change the color to black
const black = document.getElementById("black");
black.addEventListener("click", () => {
    changeMode("black");
});

// change the color to white (creating erasing like effect)
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    changeMode("white");
});

// change the color to random rgb color
const random = document.getElementById("random");
random.addEventListener("click", () => {
    changeMode("random");
});

// shade the grid with each pass
const shade = document.getElementById("shade");
shade.addEventListener("click", () => {
    changeMode("shade");
});