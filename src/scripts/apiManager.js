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
