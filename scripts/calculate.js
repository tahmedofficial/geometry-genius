// Rectangle function
function calculateRectangleArea() {
    // get length of the rectangle
    const length = getInputValue("rectangle_length");

    // get width of the rectangle
    const width = getInputValue("rectangle_width");

    // calculate rectangle area
    const rectangleArea = length * width;

    // display rectangle area
    setDisplayValue("display_rectangle_area", rectangleArea);
    // const displayRectangleArea = document.getElementById("display_rectangle_area");
    // displayRectangleArea.innerText = rectangleArea;
};

// Traingle function
function calculateTriangleArea() {
    // get triangle base
    const base = getInputValue("triangle_base");

    // get triangle height
    const height = getInputValue("triangle_height");

    // calculate triangle area
    const traingleArea = 0.5 * base * height;

    // Diaplay triangle area
    setDisplayValue("dispiay_triangle_area", traingleArea);

};

// Parallelogram function
function calculateParallelogramArea() {

    // get parallelogram base
    const base = getInputValue("parallelogram_base");

    // get parallelogram height
    const height = getInputValue("parallelogram_height");

    // calculate parallelogram area
    const parallelogramArea = base * height;

    // Diaplay parallelogram area
    setDisplayValue("dispiay_parallelogram_area", parallelogramArea);

};

function getInputValue(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;

};

function setDisplayValue(displayId, value) {
    const displayValue = document.getElementById(displayId);
    displayValue.innerText = value;
};
