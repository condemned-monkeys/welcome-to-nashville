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

const zomatoCall = (search_string) => {
    fetch(
            `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${search_string}`, {
                headers: {
                    Accept: "application/json",
                    "user-key": "c923ec70397d003b73aba4165d60099a"
                }
            }
        )
        .then(r => r.json())
        .then(results => console.log(results));
};


zomatoCall("Chinese")


// https://developers.zomato.com/api/v2.1/categories
// get function for fetch. value is from what you put into text field or drop down box
const getPark = (value) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${value}=Yes`)
        .then(response => response.json())
}


