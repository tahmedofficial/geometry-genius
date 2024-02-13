function calculateTriangleArea() {
    // get triangle base
    const triangleBaseInput = document.getElementById("triangle_base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // get triangle height
    const triangleHeightInput = document.getElementById("triangle_height");
    const triangleHeightInputValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightInputValue);

    // calculate triangle area
    const traingleArea = 0.5 * base * height;

    // Diaplay triangle area
    const displayTriangleArea = document.getElementById("dispiay_triangle_area");
    displayTriangleArea.innerText = traingleArea;

}

function calculateRectangleArea() {
    // get length of the rectangle
    const rectangleLengthTag = document.getElementById("rectangle_length");
    const rectangleLengthValue = rectangleLengthTag.value;
    const length = parseFloat(rectangleLengthValue);

    // get width of the rectangle
    const rectangleWidthTag = document.getElementById("rectangle_width");
    const rectangleWidthValue = rectangleWidthTag.value;
    const width = parseFloat(rectangleWidthValue);

    // calculate rectangle area
    const rectangleArea = length * width;

    // display rectangle area
    const displayRectangleArea = document.getElementById("display_rectangle_area");
    displayRectangleArea.innerText = rectangleArea;
}