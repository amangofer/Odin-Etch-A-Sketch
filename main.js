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