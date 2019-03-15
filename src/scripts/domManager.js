//container is ID for the div thats in index.html
const container = document.querySelector("#container");

//formSection to create container for all form type elements. we did this to make styling easier
const formSection = document.createElement("section");
formSection.id = "formSection"

//fragment 
let frag = document.createDocumentFragment()

// select is only used for the drop down menu to hold all the option elements in it
let select = document.createElement("select");
select.id = "dropDown"
console.log(container)



// function to create basic elements to append to DOM
function createElement(elementName, text, inputName, content, class1) {
    let element = document.createElement(elementName)
    element.type = text
    element.textContent = content
    element.placeholder = inputName
    element.className = class1
    frag.appendChild(element);
}


//function to create options for the drop down menu for the parks api
function createOption(value, content, class2) {
    let option = document.createElement("option");
    option.value = value;
    option.classList.add(class2)
    option.textContent = content;
    select.appendChild(option)
    frag.appendChild(select)
}


//function for drop down menu
function createDropDown() {
    createOption("disc_golf", "disc golf", "discClass")
    createOption("dog_park", "dog park", "dogClass")
    createOption("golf_course", "golf course", "golfClass")
    createOption("hiking_trails", "hiking trails", "hikingClass")
    createOption("lake", "lake", "lakeClass")
    formSection.appendChild(frag)

}

// function to create image elements to append to DOM
function createImageElement(elementName, src, image, alt, Id) {
    let element = document.createElement(elementName)
    element.src = src
    element.type = image
    element.alt = alt
    element.id = Id
    container.appendChild(element);
}

createImageElement("img", "images/nashville-skyline-dan-holland.jpg", "image", "Nashville Skyline Image!", "headerImage")

//creates title and sub title
createElement("h1", "", "", "Welcome to Nashville!", "title")
createElement("h4", "", "", "Search for fun stuff to do around Nashville today!", "subTitle")
//title and subtitle end

//creates input fields and submit buttons
createElement("h4", "", "", "What kind of food do you like?","")
createElement("input", "text", "restaurants by food type", "", "foodType")
createElement("button", "button", "", "search", "restaurantButton")

createElement("h4", "", "", "What topics are you interested in?","")
createElement("input", "text", "meetups by topic", "", "meetupTopic")
createElement("button", "button", "", "search", "meetupButton")

createElement("h4", "", "", "What genre of music do you like?","")
createElement("input", "text", "concerts by genre", "", "concertGenre")
createElement("button", "button", "", "search", "concertButton")

createElement("h4", "", "", "What are you looking for in a park?","")
createDropDown()
createElement("button", "button", "", "search", "parkButton")
//input fields and buttons end


// Creating a container to receive saved itenerary results
let itineraryContainer = document.createElement("section")
itineraryContainer.classList.add("itineraryContainer")
itineraryContainer.textContent = "My Itinerary"

//appends everything into DOM
formSection.appendChild(frag)
container.appendChild(formSection)
container.appendChild(itineraryContainer)

//puts button thats next to park into a variable
const button = document.querySelector(".parkButton")
const restaurantButton = document.querySelector(".restaurantButton")
//eventlistener on parks button, then runs function that is in eventHandlers to take information, and return results of parks
button.addEventListener("click", handlePark)


const meetupButton = document.querySelector(".meetupButton");
meetupButton.addEventListener("click", handleMeetup);

restaurantButton.addEventListener("click", handleRestaurant)


const concertButton = document.querySelector(".concertButton")

concertButton.addEventListener("click", handleConcert)



