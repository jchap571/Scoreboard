let Home = 0
let Away = 0

console.log('Ready to Start')


function homePlus1() {
  Home++
  console.log(Home);
  console.log("Button Clicked!")

  const homeScoreElem = document.getElementById('home-score')
  console.log(homeScoreElem)
  homeScoreElem.innerText = 'Home Score:' + Home

}

function homePlus3() {
  Home += 3
  console.log(Home);
  console.log("Button Clicked!")

  const homeScoreElem = document.getElementById('home-score')
  console.log(homeScoreElem)
  homeScoreElem.innerText = 'Home Score: ' + Home
}

function awayPlus1() {
  Away++
  console.log(Away);
  console.log("Button Clicked!")

  const awayScoreElem = document.getElementById('away-score')
  console.log(awayScoreElem)
  awayScoreElem.innerText = 'Away Score: ' + Away

}

function awayPlus3() {
  Away += 3
  console.log(Away);
  console.log("Button Clicked!")

  const awayScoreElem = document.getElementById('away-score')
  console.log(awayScoreElem)
  awayScoreElem.innerText = 'Away Score: ' + Away

}


function resetScore() {
  Home = 0
  Away = 0
  const awayScoreElem = document.getElementById('away-score')
  const homeScoreElem = document.getElementById('home-score')
  awayScoreElem.innerText = 'Away Score: ' + Away
  homeScoreElem.innerText = 'Home Score: ' + Home
}