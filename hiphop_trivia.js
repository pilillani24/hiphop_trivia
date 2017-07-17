
$(document).ready(function(){

var number = 8;
var questionCounter = 0;
var wrongCount = 0;
var correctCount = 0;
var unAnswered = 0;
var totalMissed = 0;
var intervalId;
var questionsArrayLength;

$("#start").on("click", playGame);
$("#start").on("click", run);
$("#re-start").hide(); 

function playGame(){
  console.log(questionsArrayLength);
  $("#re-start").hide();
  if(questionsArrayLength > 0){
    totalMissed = wrongCount + unAnswered;
    $("#start").hide(); 
    $("#answer").empty();
    $("#answer-image").empty();           
    choice();
    $(".wrong").on("click", wrongAnsCount);
    $(".correct").on("click", rightAnsCount);
    $("#timer").html("<h3>Hurry up yo! You got " + number + " seconds left</h3>");
    $("#question").html("<h2>" + questions[questionCounter].question) + "</h2>";
    questionsArrayLength--;
  }else if(questionsArrayLength <= 0){
    $("#answer").empty();
    $("#timer").empty(); 
    $("#answer-image").empty();
    if(correctCount < totalMissed){
      $("#answer").append("<h2>YOU LOSE! Thats not gangsta.</h2>");
      $("#answer").append("<h3>Correct Answers: " + correctCount) + "</h3>";
      $("#answer").append("<h3>Wrong Answers: " + wrongCount + "</h3>");
      $("#answer").append("<h3>Unanswered: " + unAnswered + "</h3>");
      stop();
      $("#re-start").show(); 
    }else{
      $("#answer").append("<h2>Yeea!...All you do is win, win, win no matter what!</h2>");
      $("#answer").append("<h3>Correct Answers: " + correctCount + "</h3>");
      $("#answer").append("<h3>Wrong Answers: " + wrongCount + "</h3>");
      $("#answer").append("<h3>Unanswered: " + unAnswered + "</h3>");
      stop();
      $("#re-start").show(); 
    }
  }
}

function choice(){
  $("#choice").append("<button class='btn btn-default btn-block'>" + questions[questionCounter].choices[0] + "</button>");
  $("#choice").append("<button class='btn btn-default btn-block'>" + questions[questionCounter].choices[1] + "</button>");            
  $("#choice").append("<button class='btn btn-default btn-block'>" + questions[questionCounter].choices[2] + "</button>");            
  $("#choice").append("<button class='btn btn-default btn-block'>" + questions[questionCounter].choices[3] + "</button>");           
}

function wrongAnsCount(){
  wrongCount++;
  answerPage();
  $("#timer").empty();
  $("#question").html("<h2 style='color:red';>Nah, nah you ain't right!</h2>");
}

function rightAnsCount(){
  correctCount++;  
  answerPage();
    $("#timer").empty();
  $("#question").html("<h2 style='color:green';>That's what's up homie!</h2>");
}          

function answerPage(){
  $("#choice").empty();
  $("#question").empty();
  $("#answer").html("<h2>The answer was: </h2>" + "<h1>" + questions[questionCounter].correctAnswer) + "</h1>";
  $("#answer-image").html(questions[questionCounter].image);
  questionCounter++;
  stop();
  number = 8;   
  setTimeout(playGame,3000);
  setTimeout(run,3000);
}

function run() {
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function decrement() {
  number--;
    $("#timer").html("<h3>Hurry up yo! You got " + number + " seconds left</h3>");
  if (number === 0) {         
    answerPage();
    unAnswered++;
    $("#timer").html("<h2 style='color:blue'>TIME'S UP G!</h2>");
  }else if (questionCounter === 13) {
    $("#timer").empty();
    stop();
  }              
}


var questions = [{
  question: "Which record label featured artists such as Dr. Dre, Tupac, and Snoop Dogg?",
  choices: ["<h4 class='wrong'>Jr. Mafia</h4>","<h4 class='wrong'>The Dungeon Family</h4>","<h4 class='correct'>Death Row Records</h4>","<h4 class='wrong'>Roc-A-Fella Records</h4>"],
  correctAnswer: "Death Row Records",
  image:'<img src="images/death_row.jpg" class="rounded" height="236"">'
  },{
  question: "How old was the Notorious B.I.G. at the time of his death?",
  choices: ["<h4 class='wrong'>26</h4>","<h4 class='correct'>24</h4>","<h4 class='wrong'>25</h4>","<h4 class='wrong'>23</h4>"],
  correctAnswer: "24",
  image:'<img src="images/notoriousBIG.jpg" class="rounded" height="236">'
  }, {
  question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were the members of what rap group?",
  choices: ["<h4 class='wrong'>De La Soul</h4>","<h4 class='correct'>A Tribe Called Quest</h4>","<h4 class='wrong'>Arrested Development</h4>","<h4 class='wrong'>Digital Underground</h4>"],
  correctAnswer: "A Tribe Called Quest",
  image:'<img src="images/aTribeCalledQ.png" class="rounded" height="236">'
  },{
  question: "Complete these lyrics: Now in my younger days I used to sport a shag / When I went to school I ____________",
  choices: ["<h4 class='wrong'>I always had lots of swag</h4>","<h4 class='correct'>I carried lunch in a bag</h4>","<h4 class='wrong'>I flunked all my exams</h4>","<h4 class='wrong'>I didn't have a bagpack</h4>"],
  correctAnswer: "I carried lunch in a bag",
  image:'<img src="images/The-Pharcyde-Passing-Me-By.jpg" class="rounded" height="236">'
  }, {
  question: "Which rapper was NOT a member of Wu-Tang Clan?",
  choices: ["<h4 class='wrong'>Method Man</h4>","<h4 class='wrong'>ODB</h4>","<h4 class='wrong'>U-God</h4>","<h4 class='correct'>Royce Da 5'9'</h4>"],
  correctAnswer: "Royce Da 5'9'",
  image:'<img src="images/royce-da-59.jpg" class="rounded" height="236">'
  }, {
  question: "Which Nas song did Jay-Z sample for his song 'Dead Presidents?'",
  choices: ["<h4 class='correct'>The World Is Yours</h4>","<h4 class='wrong'>One Mic</h4>","<h4 class='wrong'>If I Ruled The World</h4>","<h4 class='wrong'>Made U Look</h4>"],
  correctAnswer: "The World Is Yours",
  image:'<img src="images/nas_twiy.jpg" class="rounded" height="236">'
  }, {
  question: "What does 'O.P.P.' mean?",
  choices: ["<h4 class='wrong'>Other People's Poison</h4>","<h4 class='wrong'>Other People's Problems</h4>","<h4 class='wrong'>No one really knows for sure...</h4>","<h4 class='correct'>Other People's Property</h4>"],
  correctAnswer: "Other People's Property",
  image:'<img src="images/opp.jpg" class="rounded" height="236">'
  }, {
  question: "Which 2 rapper's did 50 Cent have beef with?'",
  choices: ["<h4 class='wrong'>Dr.Dre & Eminem</h4>","<h4 class='correct'>Ja Rule & The Game</h4>","<h4 class='wrong'>DMX & Ice Cube</h4>","<h4 class='wrong'>Snoop Dogg & Nate Dogg</h4>"], 
  correctAnswer: "Ja Rule & The Game",
  image:'<img src="images/jarulethegame.jpg" class="rounded" height="236">'
  },{
  question: "Which rapper had a show that pimped out rides?'",
  choices: ["<h4 class='wrong'>DMX</h4>","<h4 class='wrong'>Puff Daddy</h4>","<h4 class='correct'>Xzibit</h4>","<h4 class='wrong'>Bow Wow</h4>"],
  correctAnswer: "Xzibit",
  image:'<img src="images/Xzibit.jpg" class="rounded" height="236">'
  },{
  question: "Which rapper didn't use his 'AK because it was good day?'",
  choices: ["<h4 class='wrong'>Nate Dogg</h4>","<h4 class='correct'>Ice Cube</h4>","<h4 class='wrong'>Eazy-E</h4>","<h4 class='wrong'>Too Short</h4>"],
  correctAnswer: "Ice Cube",
  image:'<img src="images/ice-cube.jpg" class="rounded" height="236">'
  },{
  question: "Which rapper was a former ballet dancer?'",
  choices: ["<h4 class='wrong'>Eazy-E</h4>","<h4 class='correct'>Tupac</h4>","<h4 class='wrong'>Too Short</h4>","<h4 class='wrong'>B.I.G</h4>"],
  correctAnswer: "Tupac",
  image:'<img src="images/tupac.jpg" class="rounded" height="236">'
  },{
  question: "Which rapper co-starred alongside Whoopi Goldberg in the 1993 release Sister Act 2: Back in the Habit?'",
  choices: ["<h4 class='wrong'>Missy Elliott</h4>","<h4 class='wrong'>Queen Latifah</h4>","<h4 class='correct'>Lauryn Hill</h4>","<h4 class='wrong'>Left Eye</h4>"],
  correctAnswer: "Lauryn Hill",
  image:'<img src="images/LaurynHill.jpg" class="rounded" height="236">'
  },{
  question: "Which rapper failed the 9th grade 3 times and then droped out of school?'",
  choices: ["<h4 class='correct'>Eminem</h4>","<h4 class='wrong'>Method Man</h4>","<h4 class='wrong'>Too Short</h4>","<h4 class='wrong'>Missy Elliott</h4>"],
  correctAnswer: "Eminem",
  image:'<img src="images/eminem.jpg" class="rounded" height="236">'
}];
questionsArrayLength = questions.length;

$("#re-start").on("click", reStart);
$("#re-start").on("click", run);

function reStart(){
  questionsArrayLength = questions.length;
  number = 8;
  questionCounter = 0;
  correctCount = 0;
  unAnswered = 0;
  totalMissed = 0;
  playGame();
}


});
