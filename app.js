let HomeScore = 0
let AwayScore = 0



function homePlus1() {
  HomeScore++
  console.log(HomeScore);

  const homeScoreElem = document.getElementById('home-score')
  console.log(homeScoreElem)
  homeScoreElem.innerText = 'Home Score:' + HomeScore

}

function homePlus3() {
  HomeScore += 3
  console.log(HomeScore);

  const homeScoreElem = document.getElementById('home-score')
  console.log(homeScoreElem)
  homeScoreElem.innerText = 'Home Score: ' + HomeScore
}

function awayPlus1() {
  AwayScore++
  console.log(AwayScore);

  const awayScoreElem = document.getElementById('away-score')
  console.log(awayScoreElem)
  awayScoreElem.innerText = 'Away Score: ' + AwayScore

}

function awayPlus3() {
  AwayScore += 3
  console.log(AwayScore);

  const awayScoreElem = document.getElementById('away-score')
  console.log(awayScoreElem)
  awayScoreElem.innerText = 'Away Score: ' + AwayScore

}


function resetScore() {
  let HomeScore = 0
  let AwayScore = 0
  const awayScoreElem = document.getElementById('away-score')
  const homeScoreElem = document.getElementById('home-score')
  awayScoreElem.innerText = 'Away Score: ' + AwayScore
  homeScoreElem.innerText = 'Home Score: ' + HomeScore
}