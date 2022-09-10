const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const inputsContainer = document.getElementById('inputs-container');
const textPromptContainer = document.getElementById('text-prompt-container');

const fortune = document.getElementById('fortune')

const answers = [
  'Youve died'
  'You kill 1 goblin, but die to the rest',
  'You kill 2 goblins, but die to the rest',
  'option 4',
  'option 5',
  'option 6',
  'option 7',
  'option 8',
  'option 9',
  'option 10',
  'option 11',
  'option 12',
  'option 13',
  'option 14',
  'option 15',
  'option 16',
  'option 17',
  'option 18',
  'option 19',
  'critical hit',
];

usernameButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length)
    results.textContent = Answer[randNum];

  inputsContainer.classList.toggle('hide');
  textPromptContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.childElementCount.toggle('hide');});


//document.getElementById( "d20.jpg" ).onclick = function(roll) {
  // img clicked

//<button onclick="username()">The name button</button>;


//const myArr =(1,20){
  //  return Array (end-start +1).fill().map((_, idx) => start + idx)
//}
//var result = range(1,20);
//console.log(result)
//function roll(1)


 //<script>
 //function myFunction() {
  // document.getElementById("username").innerHTML = "$username";
 //}
 //</script>
 //






// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state */