const svg = document.getElementById("svgCanvas");
const colorPicker = document.getElementById("colorPicker");

let drawing = false;
let path = "";
let currentPath;

svg.addEventListener("pointerdown", (e) => {
    drawing = true;

    const p = svg.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;

    const point = p.matrixTransform(svg.getScreenCTM().inverse());

    path = `M ${point.x} ${point.y}`;

    currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    currentPath.setAttribute("stroke", colorPicker.value);
    currentPath.setAttribute("stroke-width", 2);
    currentPath.setAttribute("fill", "none");

    svg.appendChild(currentPath);
});

svg.addEventListener("pointermove", (e) => {
    if (!drawing) return;

    const p = svg.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;

    const point = p.matrixTransform(svg.getScreenCTM().inverse());

    path += ` L ${point.x} ${point.y}`;
    currentPath.setAttribute("d", path);
});

svg.addEventListener("pointerup", () => {
    drawing = false;
});

function clearScreen() {
    svg.innerHTML = "";
}
document.getElementById("clearButton").addEventListener("click", clearScreen);