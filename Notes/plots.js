//Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);

// Bar chart
var barTrace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var barLayout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

// Skill Drill - Pie Chart
var pieTrace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var pieData = [pieTrace];

var pieLayout = {
    title: "'Bar' Chart",
};

//Scatter Chart
var scatterTrace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"], 
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: "markers",
    type: "scatter"
};

Plotly.newPlot("plotArea", [scatterTrace]);

// Map function
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){    //"Num is arbitrary"
    return num + 5;
});
console.log(doubled); //doubled is a new array after the original had something done to it

cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);

//Filter - Return element of original array to new array of the function results to TRUE
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

//Anonymous / Arrow Function
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sNames = words.filter(word => word.startsWith('s'))
console.log(sNames)

//Arrow Equivalency
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

var doubled = numbers.map(function(num){
    return num * 2;
});
var doubled = numbers.map(num => num * 2);

//Sort & Reverse Functions

//Sort
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((anElement,nextElement) => anElement - nextElement);
//sortedAge = familyAge.sort((a,b) => a - b); //Move object if positive
console.log(sortedAge);

//Reverse() = Flip array

// Slice() = Get subset between (start[inclusive], end[exclusive])
var slicedAnimals = words.slice(0,3)
console.log(slicedAnimals);