let orderList = document.createElement("ol")
orderList.id = "orderListId";

// const createItinerary = (response, key) => {
//     let itineraryTitle = document.createElement("h1")
//     itineraryTitle.textContent = "My itinerary"
//     let ul = document.createElement("ul")
//     let li1 = document.createElement("li")
//     let li2 = document.createElement("li")
//     let li3 = document.createElement("li")
//     let li4 = document.createElement("li")
//     li1.textContent = "Park: " + response.key
//     li2.textContent = "Restaurant: " + response.key
//     li3.textContent = "Meetup: " + response.key
//     li4.textContent = "Concert: " + response.key
//     ul.appendChild(li1)
//     ul.appendChild(li2)
//     ul.appendChild(li3)
//     ul.appendChild(li4)
// }


const handleRestaurant = () => {
    // Selecting the input field with the class name of 'foodType' and assigning to variable 'foodInput'
    const foodInput = document.querySelector(".foodType").value
    // Creating new variable called 'foodSearch' that has a key value of the foodInput value
    // let foodSearch = foodInput
    console.log(foodInput)

    getRestaurant(foodInput)
        .then(parsedValue => {
            console.log(parsedValue)

            for (let i = 0; i < parsedValue.restaurants.length; i++) {
                let listItem = document.createElement("li")
                listItem.classList.add("valueSave" + [i])
                listItem.textContent = parsedValue.restaurants[i].restaurant.name + ":  " + parsedValue.restaurants[i].restaurant.location.address
                let loopButton = document.createElement("button")
                loopButton.textContent = "save"
                loopButton.classList.add("saveButton" + [i])
                orderList.appendChild(listItem)
                orderList.appendChild(loopButton)
                // console.log(i)
            }

            container.appendChild(orderList)

        })
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
}



// create orderlist parent container. this container will the li elements that are created through the loop, based on the length of results from the output




//this function is called from the event listener. the event listener is linked to the search button and is called in domManager.js
const handlePark = () => {

    //     // selectValue is the container for the drop down box. it holds all the options elements containing dog park, hiking, etc.
    const selectValue = document.querySelector("#dropDown")

    //     // variable opt takes the value from the drop down box and allows us to select the value that is currenly shown in the drop down box. this lets us store the value from the box
    let opt = selectValue.options[selectValue.selectedIndex]

    //     // console.log is not needed here, but only shows the value when you click the search button
    console.log(opt.value)

    //     // getPark function is define in apiManager.js, this only fetch URL and coverts the return into js.
    //     //the function takes an argument which is planted into the URL to target the information you want
    //     //opt.value will equal things like dog park, hiking trails, disc golf, etc. 
    getPark(opt.value)
        .then(parsedValue => {
            console.log(parsedValue)


            //             // loops through the response of parsedValue, which is the targeted values. parsedValue will equal the response from the URL that contains the search criteria. the length also equals the amount of parks that have the criteria. parsedValue.length equals the amount of parks that have dog park, hiking, etc. the loop creates LI elements to be planted into the order list and then assign text content to each LI element. the text content equals the array and then using dot notation to target exactly what we want to be used. this also creates a button for each LI
            for (let i = 0; i < parsedValue.length; i++) {
                let listItem = document.createElement("li")
                listItem.classList.add("valueSave" + [i])
                listItem.textContent = parsedValue[i].park_name + ":  " + parsedValue[i].mapped_location_address
                let loopButton = document.createElement("button")
                loopButton.textContent = "save"
                loopButton.classList.add("saveButton" + [i])
                orderList.appendChild(listItem)
                orderList.appendChild(loopButton)
            }

            container.appendChild(orderList)
            let div = document.createElement("div");

            for (let i = 0; i < parsedValue.length; i++) {
                let liValue = document.querySelector(".valueSave" + [i]).textContent
                let saveButton = document.querySelector(".saveButton" + [i])
                let parkObject = {
                    park: liValue
                }
                saveButton.addEventListener("click", () => {
                    putPark(parkObject)
                        .then(() => getItinerary())
                        .then(parsedItinerary => {

                            ul = document.createElement("ul");
                            let li = document.createElement("li");
                            li.textContent = parsedItinerary.park
                            ul.appendChild(li);
                            div.appendChild(ul)
                            container.appendChild(div);

                        })
                    while (div.firstChild) {
                        div.removeChild(div.firstChild);
                    }
                })
            }

        })
    //     // while loop removes the each LI element so when the button is clicked again, it will remove and replace it with new information based on criteria from the drop down menu
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
}

























const handleMeetup = () => {
    const meetupValue = document.querySelector(".meetupTopic").value;

    console.log(meetupValue);

    getMeetup(meetupValue)

        .then(parsedValue => {
            console.log(parsedValue)

            for (let i = 0; i < parsedValue.events.length; i++) {
                let listItem = document.createElement("li")
                listItem.textContent = parsedValue.events[i].name.text
                let loopButton = document.createElement("button")
                loopButton.textContent = "save"
                loopButton.classList.add("saveButton")
                orderList.appendChild(listItem)
                orderList.appendChild(loopButton)
                console.log(i)
            }

            container.appendChild(orderList)
        })

    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
}

// this function is called from the event listener. the event listener is linked to the search button and is called in domManager.js
const handleConcert = () => {

    // selectValue is the container for the content value held in "concertGenre" class. It holds the concert genre input text value.
    const selectValue = document.querySelector(".concertGenre").value

    // getTicketmaster function is define in apiManager.js, this only fetch URL and coverts the return into js.
    //the function takes an argument which is planted into the URL to target the information you want
    //selectValue will equal things like rap, country, rock, etc. 
    getTicketmaster(selectValue)
        .then(parsed => {
            console.log(parsed)

            // loops through the response of parsed objects, which is the targeted values. parsed will equal the response from the URL that contains the search criteria. the length also equals the amount of concerts that have the criteria. parsed.length equals the amount of concerts that have rap, country, rock, etc. the loop creates LI elements to be planted into the order list and then assign text content to each LI element. the text content equals the array and then using dot notation to target exactly what we want to be used. this also creates a button for each LI
            for (let i = 0; i < parsed._embedded.events.length; i++) {
                let listItem = document.createElement("li")
                listItem.classList.add("valueSave" + [i])
                listItem.textContent = parsed._embedded.events[i].name
                let loopButton = document.createElement("button")
                loopButton.textContent = "save"
                loopButton.classList.add("saveButton" + [i])
                orderList.appendChild(listItem)
                orderList.appendChild(loopButton)
            }
            container.appendChild(orderList)
        })
    // while loop removes the each LI element so when the button is clicked again, it will remove and replace it with new information based on criteria from the text input box.
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
}