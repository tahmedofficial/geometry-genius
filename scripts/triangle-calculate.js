function calculateTriangleArea() {
    // get triangle base
    const triangleBaseInput = document.getElementById("triangle_base");
    const triangleBaseText = triangleBaseInput.value;
    const flotBase = parseFloat(triangleBaseText);

    // get triangle height
    const triangleHeightInput = document.getElementById("triangle_height");
    const triangleHeightInputValue = triangleHeightInput.value;
    const flotHeight = parseFloat(triangleHeightInputValue);

    // calculate triangle area
    const area = 0.5 * flotBase * flotHeight;
    console.log("area of the traingle is:", area);
    // Diaplay triangle area
    const traingleArea = document.getElementById("triangle_area");
    traingleArea.innerText = area;

}

function calculateRectangleArea(){
    // get length of the rectangle
    const rectangleLengthTag =document.getElementById("rectangle_length");
    const rectangleLengthValue = rectangleLengthTag.valur;
    console.log(rectangleLengthValue);
    // const 
}