// STEP 1: Background Color

document.body.style.backgroundColor = "#282c34";
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";

// STEP 2: First Image

let img1 = document.createElement("img");
img1.src = "https://source.unsplash.com/1600x900/?nature,water";
img1.style.width = "100vw";
img1.style.height = "50vh";
img1.style.objectFit = "cover";
img1.style.display = "block";

document.body.appendChild(img1);


// STEP 3: Heading (Updated)

let heading = document.createElement("h1");
heading.textContent = "Explore the Beauty of Nature"; // 
heading.style.textAlign = "center";
heading.style.fontSize = "2.5rem";
heading.style.marginTop = "20px";

document.body.appendChild(heading);


// STEP 4: Paragraph
let para = document.createElement("p");
para.textContent = "Experience the serenity of nature through this dynamic page!"; // <-- Updated text
para.style.color = "#ddd";
para.style.fontSize = "1.2rem";
para.style.textAlign = "center";
para.style.maxWidth = "600px";
para.style.margin = "20px auto";
para.style.lineHeight = "1.6";

document.body.appendChild(para);


// STEP 5: Button

let button = document.createElement("button");
button.textContent = "Click Me";
button.style.display = "block";
button.style.margin = "20px auto";
button.style.padding = "12px 24px";
button.style.fontSize = "1.2rem";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#ff9800";
button.style.color = "white";

document.body.appendChild(button);


// Button Hover Effect

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "#e65100";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "#ff9800";
});



// STEP 6: Card


let card = document.createElement("div");
card.style.width = "300px";
card.style.margin = "30px auto";
card.style.padding = "20px";
card.style.borderRadius = "12px";
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
card.style.backgroundColor = "#333";
card.style.textAlign = "center";

document.body.appendChild(card);



// Card Title

let cardTitle = document.createElement("h2");
cardTitle.textContent = "Discover the Wonders of Nature"; // <-- Updated text
cardTitle.style.color = "#ff9800";


card.appendChild(cardTitle);


// Card Text 

let cardText = document.createElement("p");
cardText.textContent = "Explore the beauty and tranquility of nature through this card."; // <-- Updated text
cardText.style.color = "white";
cardText.style.fontSize = "1rem";
cardText.style.marginTop = "10px";

card.appendChild(cardText);