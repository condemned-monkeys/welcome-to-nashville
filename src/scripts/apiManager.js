console.log("apiManager")


// const restaurantCall = fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city", {
//         headers: {
//             "Accept": "application/json",
//             "user-key": "c923ec70397d003b73aba4165d60099a"
//         }
//     })
//     .then(r => r.json())
//     .then(results => {
//         console.log(results)
//     })
// const getRestaurants = () => {
//     for (let i = 0; i < 
// }

const getRestaurant = (search_string) => {
    return fetch(
    
            `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${search_string}`, {
                headers: {
                    Accept: "application/json",
                    "user-key": "c923ec70397d003b73aba4165d60099a"
                }
            }
        )
        .then(r => r.json())
};


// zomatoCall("Chinese")


// https://developers.zomato.com/api/v2.1/categories
// get function for fetch. value is from what you put into text field or drop down box
const getPark = (value) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${value}=Yes`)
        .then(response => response.json())
}


const ebToken = "FYOXQG3KRECQPYKYM4SU";
const ebString = "";

const getMeetup = (ebString) => {
    return fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${ebString}&location.address=nashville&token=${ebToken}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(r => r.json())
    //   .then(results => console.log(results));
  };

  getMeetup(ebString);

const getTicketmaster = (value) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=QKR7sYWGTQBc6cD1N3neXFCkbr92yttr&city=Nashville&countryCode=US&classificationName=${value}`)
        .then(response => response.json())
}



const putPark = (newParkObject) => {
  return fetch("http://localhost:8088/itinerary?id=1", {
    method: "PATCH",
    body: JSON.stringify(newParkObject),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
}



const getItinerary = () => {
  return fetch ("http://localhost:8088/itinerary")
    .then(response => response.json())
}

