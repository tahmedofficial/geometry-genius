
// Input function
function getInputValue(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;

};

// Display function
function setDisplayValue(displayId, value) {

    const displayField = document.getElementById(displayId);
    displayField.innerText = value;

};


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

// Rhombus function
function calculateRhombusArea(){

};

// Pentagon function
function calculatePentagonArea() {

    // get pentagon perimeter
    const perimeter = getInputValue("pentagon_perimeter");

    // get pentagon apothem
    const apothem = getInputValue("pentagon_apothem");

    // calculate pentagon area
    const pentagonArea = 0.5 * perimeter * apothem;

    // Diaplay pentagon area
    setDisplayValue("dispiay_pentagon_area", pentagonArea);

};

// Ellipse function
function calculateEllipseArea() {

    // get ellipse major radius
    const majorRadius = getInputValue("ellipse_major_radius");

    // get ellipse minor radius
    const minorRadius = getInputValue("ellipse_minor_radius");

    // calculate ellipse area
    const ellipseArea = 3.14 * majorRadius * minorRadius;

    // Diaplay ellipse area
    setDisplayValue("dispiay_ellipse_area", ellipseArea);

};
