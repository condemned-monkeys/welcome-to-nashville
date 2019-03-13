// get function for fetch. value is from what you put into text field or drop down box
const getPark = (value) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${value}=Yes`)
        .then(response => response.json())
}