const container = document.querySelector("#container");
const formSection = document.createElement("section");
let frag = document.createDocumentFragment()
formSection.id = "formSection"
console.log(container)

function createElement (elementName, text, inputName, content, class1) {
    let element = document.createElement(elementName)
    element.type = text
    element.textContent = content
    element.placeholder = inputName
    element.className = class1
    frag.appendChild(element);
}

//creates title and sub title
createElement("h1", "", "", "Welcome to Nashville!", "title")
createElement("h4", "","", "Search for stuff to do today", "subTitle")
//title and subtitle end

//creates input fields and submit buttons
createElement("input", "text", "parks by feature", "", "parkFeature")
createElement("button", "button", "", "search", "parkButton")

createElement("input", "text", "restaurants by food type", "", "foodType")
createElement("button", "button", "", "search", "restaurantButton")

createElement("input", "text", "meetups by topic", "", "meetupTopic")
createElement("button", "button", "", "search", "meetupButton")

createElement("input", "text", "concerts by genre", "", "concertGenre")
createElement("button", "button", "", "search", "concertButton")
//input fields and buttons end

container.appendChild(formSection)
formSection.appendChild(frag)


