console.log("eventHandlers")

const handleRestaurant = () => {
    // Selecting the input field with the class name of 'foodType' and assigning to variable 'foodInput'
    const foodInput = document.querySelector(".foodType")
// Creating new object called 'foodSearch' that has a key value of the foodInput value
    let foodSearch = {
        foodType: foodInput.value
    };
    console.log(foodSearch)
    
    postRestaurant(foodSearch) 
    .then(() => zomatoCall())
    .then(parsedResponse => appendRestaurantFragment(parsedResponse))
}

handleRestaurant();