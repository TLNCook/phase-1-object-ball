function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 1 
                },
                "Reggie Evans": {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7 
                },
                "Brook Lopez": {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists': 10,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 15 
                },
                "Mason Plumlee": {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5 
                },
                "Jason Terry": {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1 
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise, Purple"],
            players: {
                "Jeff Adrien": {
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2 
                },
                "Bismak Biyombo": {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10 
                },
                "DeSagna Diop": {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5 
                },
                "Ben Gordon": {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0 
                },
                "Brendan Haywood": {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12 
                }
            }
        }
    };
};

const gameObj = gameObject()
const allPlayers = playersObject()
const teams = Object.values(gameObj)

function playersObject() {
    return Object.assign( {}, awayTeam().players, homeTeam().players);
}
function homeTeamName() {
    return gameObj['home']['teamName']
};
function homeTeam() {
    return gameObj.home
};
function awayTeamName() {
    return gameObj['away']['teamName']
};
function awayTeam() {
    return gameObj.away
};
function numPointsScored(playersName) {
    return allPlayers[playersName].points
};
function shoeSize(playersName) {
    return allPlayers[playersName].shoe
};
function teamColors(teamName) {
    let myTeamColors;
    Object.keys(gameObj).forEach(key => {
        if(teamName === gameObj[key].teamName){
            myTeamColors = gameObj[key].colors;
        }
    })
    return myTeamColors ? myTeamColors : 'No team found!';
};

//function teamColors(teamName) {
//  return findByTeamName(teamName).colors
//}
//function findByTeamName(teamName) {
//  return teams.find(team => teamName === team.teamName)
//}
//function teamNames() {
//  return teams.map(team => team.teamName)
//}
function playerNumbers(teamName) {
    const playerNumbersArr = [];
    Object.keys(gameObj).forEach(key => {
        if(teamName === gameObj[key].teamName){
            const keysArray = Object.keys(gameObj[key].players);
            keysArray.forEach(player => {
                playerNumbersArr.push(gameObj[key].players[player].number)
            })
        }
    })
    return playerNumbersArr.length > 0 ? playerNumbersArr : 'No team found!';
}
function playerStats(playerName) {
    return allPlayers[playerName]
};

function bigShoeRebounds() {
    let biggestShoeSize = 0; // sets variable to track biggest shoe size 
    let playerNameWithBiggestShoe; // name belonging to biggest shoe size
    Object.keys(allPlayers).forEach(player => { //creates an array of keys of the allPlayers object.  iterates over each to get individual player
        if (allPlayers[player].shoe > biggestShoeSize) { // does comparisson while iterating. checking shoe size with next up player
            biggestShoeSize = allPlayers[player].shoe; // updates variable with current biggest shoe size
            playerNameWithBiggestShoe = player; // assignes variable 
        }
    })
    return `${playerNameWithBiggestShoe}'s rebounds: ${allPlayers[playerNameWithBiggestShoe].rebounds}`; //returns the rebounds of player with biggest shoe size
}
// function mostPointsScored() {
    
// }
// function winningTeam() {
    
// }
// function playerWithLongestName() {
    
// }
// function doeslongNameStealATon() {
    
// }

// function teamColors(teamName) { // teamName === Brooklyn Nets
//     const gameObj = gameObject(); //assign gameObject() to variable
//     const gameObjKeys = Object.keys(gameObj) // home, away
//     let colors; // creates an unassigned variable with no data type
//     gameObjKeys.forEach(key => { // first loop through key === home, second loop through key === away....additional loops if you have more than home and away
//         if (gameObj[key].teamName === teamName) { // gameObj['home'].teamName === 'Brooklyn Nets' eveluates to true
//             colors = gameObj[key].colors; // colors = gameObj['home'].colors
//         }
//     }) 
//     /*
//         loops over each of the keys of the game object with forEach
//         if you have a gameObject with a key.teamName that matches
//         the passed in teamName then we will get the colors for that team.
//     */
//     return colors;
// };