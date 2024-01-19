let location = "Halifax";

if(location.toLowerCase() === "halifax") {
    console.log("You are in Halifax.\nYour local airport is: Halifax Stanfield International Airport\nAirport code: YHZ");

}

else {
    // Asking where the person is located and where they are going
    let currentLocation = prompt("Where are you located?");
    let destination = prompt("Where are you going?");
    
    console.log(`You are in ${currentLocation}, and you are going to ${destination}.`);

}

// Checking if date is between Jan 19 and Feb 19
let currentDate = new Date();
let jan19 = new Date(currentDate.getFullYear(), 0, 19);
let feb19 = new Date(currentDate.getFullYear(), 1, 19);

if (currentDate >= jan19 && currentDate <= feb19) {
    console.log("I am traveling in Costa Rica.");

} 

else {
    console.log("I am home in Halifax.");
    
}

// Function to append text to the outputDiv
function appendToOutput(text) {
    // Creating a new paragraph element
    let paragraph = document.createElement("p");
    // Setting the text content of the paragraph
    paragraph.textContent = text;
    // Appending the paragraph to the outputDiv
    document.getElementById("outputDiv").appendChild(paragraph);
}