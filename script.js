// Function to handle button click event
function handleClick() {
    var output = document.getElementById("output");
    output.innerHTML = "Button clicked!";
}

// Attach event listener to button
var button = document.getElementById("clickMeButton");
button.addEventListener("click", handleClick);
