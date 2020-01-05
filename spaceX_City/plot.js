//Sort cities in descending order of population growth
//Select only top 5 cities
//Create separate arrays for names & population growths
//Use Plotly to create a bar chart arrays

var sortedCities = cityGrowths.sort((a,b) => 
    a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCitiesNames = topFiveCities.map(city => city.City);
var topFiveCitiesGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCitiesGrowths)

var trace = {
    x: topFiveCitiesNames,
    y: topFiveCitiesGrowths,
    type: "bar"
};
var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016 - 2017"}
};

// Largest 7 cities
var sortedCitiesPop = cityGrowths.sort((a,b) => 
    a.population - b.population).reverse();

var topSevenCities = sortedCities.slice(0,7);

var topSevenCitiesNames = topSevenCities.map(city => city.City);
var topSevenCitiesPop = topSevenCities.map(city => parseInt(city.population));
console.log(topSevenCitiesPop)

var trace = {
    x: topSevenCitiesNames,
    y: topSevenCitiesPop,
    type: "bar"
};
data = [trace];

layout = {
    title: "Highest Population Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot("bar-plot", data, layout);