import { fifaData } from "./fifa.js";
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//using arrow function =>

//(a)In one "job" we need to go through the entire array to check for 2014 and home team names. THEN return the list of names for those teams

//(a)
//create a new array
const hometeamname14 = [];

fifaData.forEach(function (item) {
  //for each because we need the loop through
  if (item["Year"] === 2014) {
    //this singles out 2014
    hometeamname14.push(item["Home Team Name"]);
    //remember quote and bracket to call obj
  }
  return hometeamname14;
});

console.log(hometeamname14);

//(b)

const awayTeamName14 = [];

fifaData.forEach(function (item) {
  if (item["Year"] === 2014) {
    awayTeamName14.push(item["Away Team Name"]);
  }
  return awayTeamName14;
});
console.log(awayTeamName14);

//(c)
const hometeamGoals14 = [];

fifaData.forEach(function (item) {
  //for each because we need the loop through
  if (item["Year"] === 2014) {
    //this singles out 2014
    hometeamGoals14.push(item["Home Team Goals"]);
    //remember quote and bracket to call obj
  }
  return hometeamGoals14;
});

console.log(hometeamGoals14);

//(d)

const awayteamgoals14 = [];

fifaData.forEach(function (item) {
  //for each because we need the loop through
  if (item["Year"] === 2014) {
    //this singles out 2014
    awayteamgoals14.push(item["Away Team Goals"]);
    //remember quote and bracket to call obj
  }
  return awayteamgoals14;
});

console.log(awayteamgoals14);

//(e) winner of 2014 cup
//what team has the highest goals

//dont need the year series or the original fifa because we already have it

if (hometeamGoals14 > awayteamgoals14) {
  console.log(hometeamname14[0]);
} else if (awayteamgoals14 > hometeamGoals14) {
  console.log(awayTeamName14[0]);
}

/* Task 2: Create a function called  getFinals that takes `fifaData` as an argument and returns an array of objects with only finals data */

// function getFinals(fifaData) {

//   const finalData = fifaData.filter(function (item) {
//     return item["Stage"] === "Final";
//   });

//   console.log(finalData);
// }

// getFinals(fifaData);

//mario suggestion
function getFinals(fifaData) {
  return fifaData.filter(function (item) {
    return item["Stage"] === "Final";
  });
}
console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {
  /* code here */
}

getYears();

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(/* code here */) {
  /* code here */
}

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(/* code here */) {}

getAllWinners();

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
  /* code here */
}

getAverageGoals();

/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */
