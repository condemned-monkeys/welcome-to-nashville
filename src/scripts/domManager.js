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

//creates title and sub title
createElement("h1", "", "", "Welcome to Nashville!", "title")
createElement("h4", "", "", "Search for stuff to do today", "subTitle")
//title and subtitle end

//creates input fields and submit buttons
createDropDown()
createElement("button", "button", "", "search", "parkButton")

createElement("input", "text", "restaurants by food type", "", "foodType")
createElement("button", "button", "", "search", "restaurantButton")

createElement("input", "text", "meetups by topic", "", "meetupTopic")
createElement("button", "button", "", "search", "meetupButton")

createElement("input", "text", "concerts by genre", "", "concertGenre")
createElement("button", "button", "", "search", "concertButton")
//input fields and buttons end

//appends everything into DOM
formSection.appendChild(frag)
container.appendChild(formSection)
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



