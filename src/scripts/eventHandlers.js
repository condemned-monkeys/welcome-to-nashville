// create orderlist parent container. this container will the li elements that are created through the loop, based on the length of results from the output
let orderList = document.createElement("ol")


//this function is called from the event listener. the event listener is linked to the search button and is called in domManager.js
const handlePark = () => {

    // selectValue is the container for the drop down box. it holds all the options elements containing dog park, hiking, etc.
    const selectValue = document.querySelector("#dropDown")

    // variable opt takes the value from the drop down box and allows us to select the value that is currenly shown in the drop down box. this lets us store the value from the box
    let opt = selectValue.options[selectValue.selectedIndex]

    // console.log is not needed here, but only shows the value when you click the search button
    console.log(opt.value)

    // getPark function is define in apiManager.js, this only fetch URL and coverts the return into js.
    //the function takes an argument which is planted into the URL to target the information you want
    //opt.value will equal things like dog park, hiking trails, disc golf, etc. 
    getPark(opt.value)
        .then(parsedValue => {
            console.log(parsedValue)


            // loops through the response of parsedValue, which is the targeted values. parsedValue will equal the response from the URL that contains the search criteria. the length also equals the amount of parks that have the criteria. parsedValue.length equals the amount of parks that have dog park, hiking, etc. the loop creates LI elements to be planted into the order list and then assign text content to each LI element. the text content equals the array and then using dot notation to target exactly what we want to be used. this also creates a button for each LI
            for (let i = 0; i < parsedValue.length; i++) {
                let listItem = document.createElement("li")
                listItem.textContent = parsedValue[i].park_name + ":  " + parsedValue[i].mapped_location_address
                let loopButton = document.createElement("button")
                loopButton.textContent = "save"
                loopButton.classList.add("saveButton" + [i])
                orderList.appendChild(listItem)
                orderList.appendChild(loopButton)
            }

            container.appendChild(orderList)


        })
    // while loop removes the each LI element so when the button is clicked again, it will remove and replace it with new information based on criteria from the drop down menu
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
}

const handleMeetup = () => {
    const meetupValue = document.querySelector(".meetupTopic").value;
    //console.log(meetupValue);
    
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
