
var allWords = {};
var winner = 0;
var computerWord = "Placeholder";
var computerScore = 0;
var computerWordLen = 0;
var greenMandoLetter = "";
var brownMandoLetter = "";
var greenSupportLetters = [];
var brownSupportLetters = [];
var brownBlankTrigger = 0;
var greenBlankTrigger = 0;
var attacker = {};
var defender = {};
var k = 0;
var j = 0;
var loserLetter = "AA";
var loserTeam = "None";
var hints = 0;
var hintMarker = 0;
var humanLetter = "";
var humanScore = 0;
var placeholder = 0;
var difficultyDefault = 4;
var newDifficulty = 4;
var randomPairingCount = 0;
var sharedSpace = "";
var circleTarget = [];
var circleAttacker = [];
var searchersCompare = [];
var movesForComp = [];
var targetCol = 0;
var pairingsCount = 0
var targetRow = 0;
var totalDistance = 0;
var checkedDistance = 0;
var shortestDistance = 0;
var columnThird = 0;
var rowThird = 0;
var tempCol = 0;
var tempRow = 0;
var timeToMoveOn = 1;
var nameLock = [];
var victim = [];
var attackOrder = [];
var highestBrownBlankWord = "";
var highestBrownBlankScore = 0;
var commonLetters = [];
var computerRandomization = 0;
var randomizedLetter = 0;
var brownBlankCounter = 0;
var greenBlankCounter = 0;
var poolListBrownTest = [];
var poolListGreenTest = [];
var greenListNumbers = [];
var greenSpaced = [];
var queenNum = 0;
var queenColor = "";
var noWords = 0;
var targetComputer = [];
var attackComputer = [];
var searchers = [];
var a;
var hello = "Placeholder";
var b;
var upNumA;
var upNumB;
var downNumA;
var downNumB;
var personalLongestWord = "a";
var personalHighestScore = 0;
var personalBestWord = "a";
var spot1, spot2, spot3, spot4, spot5, spot6 = [];
var wordSpot1, wordSpot2, wordSpot3, wordSpot4, wordSpot5, wordSpot6 = "";

var wordAttackFlank0 = "";
var attackFlank1, attackFlank2, attackFlank3, attackFlank4, attackFlank5, attackFlank6 = [];
var wordAttackFlank1, wordAttackFlank2, wordAttackFlank3, wordAttackFlank4, wordAttackFlank5, wordAttackFlank6 = "";

var wordValues = {Q:6, Z:5, X:5, J:5, K:5, B:4, F:4, W:4, P:4, V:4, G:3, M:3, Y:3, C:3, H:3, L:2, U:2, D:2, N:2, I:2, E:1, T:1, A:1, R:1, S:1, O:1};

var poolListGreen = [];
var poolListBrown = [];
var poolListGreenFinal = [];
var poolListBrownFinal = [];
var brownSupportLocation = [];
var greenSupportLocation = [];
var winner = 0;
var winnerName = "";
var currentMoves = 4;
var billyClicker = 0;
var wordSpot0 = "";
var teamMarker = "Green";
var newTotal = 0;
var numberOfLettersGreen = 0;
var numberOfLettersBrown = 0;

var thirdPartyStorage = {color:0, letter:"", number:"", name:"", askBlank: 0, flank: 0, hidden: 0};
var nextMovesGreen = 4;
var nextMovesBrown = 4;
var teamTurn = 1;

var potentialLettersColor2 = ["B", "P", "V", "F", "H", "C", "M", "Y", "W", "G", "L", "S", "U", "D", "D", "N", "N", "R", "T", "T", "O", "O", "I", "A", "A", "E", "E"];

var poolOfLetters = ["U", "C", "R", "N", "R", "O", "I", "L", "E", "A", "S", "D", "E", "T", "I", "O", "U", "O", "W", "Y", "G", "E", "S", "I", "T", "H", "D", "M", "E", "F", "A", "V", "N", "A"];

var poolListFinal = [];

var potentialLettersColor3 = ["B", "P", "V", "F", "H", "C", "M", "Y", "W", "G", "L", "S", "U", "D", "D", "N", "N", "R", "T", "T", "O", "O", "I", "A", "A", "E", "E"];

var color1 = ["col2_row5", "col2_row6", "col2_row7", "col2_row7", "col2_row9", "col2_row10", "col2_row11", "col3_row4", "col3_row11", "col4_row4", "col4_row12", "col5_row3", "col5_row12", "col6_row3", "col6_row13", "col7_row2", "col7_row3", "col7_row4", "col7_row5", "col7_row6", "col7_row7", "col7_row8", "col7_row9", "col7_row10", "col7_row11", "col7_row12", "col7_row13", "col8_row2", "col8_row3", "col8_row4", "col8_row5", "col8_row6", "col8_row7", "col8_row8", "col8_row9", "col8_row10", "col8_row11", "col8_row12", "col8_row13", "col8_row14", "col9_row2", "col9_row3", "col9_row4", "col9_row5", "col9_row6", "col9_row7", "col9_row8", "col9_row9", "col9_row10", "col9_row11", "col9_row12", "col9_row13", "col12_row4", "col12_row12", "col10_row3", "col10_row12", "col11_row3", "col11_row13", "col13_row4", "col13_row11", "col14_row5", "col14_row6", "col14_row7", "col14_row7", "col14_row9", "col14_row10", "col14_row11", "col11_row12", "col10_row13"];

var col11_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row2 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row2 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row14 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row2 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
  col14_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0} ;

//Organized list Left-to-Right for the Pairings Computer move. 
var orderedListLeft = ["col2_row5","col2_row6","col2_row7","col2_row8","col2_row9","col2_row10","col2_row11","col3_row4","col3_row5","col3_row6","col3_row7","col3_row8","col3_row9","col3_row10","col3_row11","col4_row4","col4_row5","col4_row6","col4_row7","col4_row8","col4_row9","col4_row10","col4_row11","col4_row12","col5_row3","col5_row4","col5_row5","col5_row6","col5_row7","col5_row8","col5_row9","col5_row10","col5_row11","col5_row12","col6_row3","col6_row4","col6_row5","col6_row6","col6_row7","col6_row8","col6_row9","col6_row10","col6_row11","col6_row12","col6_row13","col7_row2","col7_row3","col7_row4","col7_row5","col7_row6","col7_row7","col7_row8","col7_row9","col7_row10","col7_row11","col7_row12","col7_row13","col8_row2","col8_row3","col8_row4","col8_row5","col8_row6","col8_row7","col8_row8","col8_row9","col8_row10","col8_row11","col8_row12","col8_row13","col8_row14","col9_row2","col9_row3","col9_row4","col9_row5","col9_row6","col9_row7","col9_row8","col9_row9","col9_row10","col9_row11","col9_row12","col9_row13","col10_row3","col10_row4","col10_row5","col10_row6","col10_row7","col10_row8","col10_row9","col10_row10","col10_row11","col10_row12","col10_row13","col10_row14","col11_row3","col11_row4","col11_row5","col11_row6","col11_row7","col11_row8","col11_row9","col11_row10","col11_row11","col11_row12","col11_row13","col12_row4","col12_row5","col12_row6","col12_row7","col12_row8","col12_row9","col12_row10","col12_row11","col12_row12","col13_row4","col13_row5","col13_row6","col13_row7","col13_row8","col13_row9","col13_row10","col13_row11","col14_row5","col14_row6","col14_row7","col14_row8","col14_row9","col14_row10","col14_row11"];

var directionsLeft =[];

var allListings = ["col14_row5", "col14_row6", "col14_row7", "col14_row8", "col14_row9", "col14_row10", "col14_row11", "col13_row4", "col13_row5", "col13_row6", "col13_row7", "col13_row8", "col13_row9", "col13_row10", "col13_row11", "col12_row4", "col12_row5", "col12_row6", "col12_row7", "col12_row8", "col12_row9", "col12_row10", "col12_row11",  "col12_row12", "col11_row12", "col11_row3", "col11_row4", "col11_row5", "col11_row6", "col11_row7", "col11_row8", "col11_row9", "col11_row10", "col11_row11", "col11_row12", "col11_row13", "col10_row3", "col10_row12", "col10_row4", "col10_row5", "col10_row6", "col10_row7", "col10_row8", "col10_row9", "col10_row10", "col10_row11", "col10_row12", "col10_row13", "col9_row2", "col9_row3", "col9_row4", "col9_row5", "col9_row6", "col9_row7", "col9_row8", "col9_row9", "col9_row10", "col9_row11", "col9_row12", "col9_row13", "col8_row2", "col8_row3", "col8_row4", "col8_row5", "col8_row6", "col8_row7", "col8_row8", "col8_row9", "col8_row10", "col8_row11", "col8_row12", "col8_row13", "col8_row14", "col7_row2", "col7_row3", "col7_row4", "col7_row5", "col7_row6", "col7_row7", "col7_row8", "col7_row9", "col7_row10", "col7_row11", "col7_row12", "col7_row13", "col6_row3", "col6_row13", "col6_row4", "col6_row5", "col6_row6", "col6_row7", "col6_row8", "col6_row9", "col6_row10", "col6_row11", "col6_row12", "col5_row3", "col5_row12", "col5_row4", "col5_row5", "col5_row6", "col5_row7", "col5_row8", "col5_row9", "col5_row10", "col5_row11", "col4_row4", "col4_row12", "col4_row5", "col4_row6", "col4_row7", "col4_row8", "col4_row9", "col4_row10", "col4_row11", "col3_row4", "col3_row5", "col3_row6", "col3_row7", "col3_row8", "col3_row9", "col3_row10", "col3_row11", "col2_row8", "col2_row5",  "col2_row6", "col2_row7", "col2_row7", "col2_row9", "col2_row10", "col2_row11"];
// for (var i = 0; i < color1.length; i++){
//   var color1[0] =
// }

//Setup for slightly more random attacks from the AI
var allListings1 = ["col14_row8", "col14_row5", "col14_row6", "col14_row7", "col14_row7", "col14_row9", "col14_row10", "col14_row11"];
var allListings2 = ["col13_row4", "col13_row11", "col13_row5", "col13_row6", "col13_row7", "col13_row8", "col13_row9", "col13_row10"];
var allListings3 = ["col12_row4", "col12_row12", "col12_row5", "col12_row6", "col12_row7", "col12_row8", "col12_row9", "col12_row10", "col12_row11"];
var allListings4 = ["col11_row3", "col11_row4", "col11_row5", "col11_row6", "col11_row7", "col11_row8", "col11_row9", "col11_row10", "col11_row11", "col11_row12", "col11_row13" ];
var allListings5 = ["col10_row3", "col10_row4", "col10_row5", "col10_row6", "col10_row7", "col10_row8", "col10_row9", "col10_row10", "col10_row11", "col10_row12", "col10_row13"];
var allListings6 = ["col9_row2", "col9_row3", "col9_row4", "col9_row5", "col9_row6", "col9_row7", "col9_row8", "col9_row9", "col9_row10", "col9_row11", "col9_row12", "col9_row13"];
var allListings7 = ["col8_row2", "col8_row3", "col8_row4", "col8_row5", "col8_row6", "col8_row7", "col8_row8", "col8_row9", "col8_row10", "col8_row11", "col8_row12", "col8_row13", "col8_row14"];
var allListings8 = ["col7_row2", "col7_row3", "col7_row4", "col7_row5", "col7_row6", "col7_row7", "col7_row8", "col7_row9", "col7_row10", "col7_row11", "col7_row12", "col7_row13"];
var allListings9 = ["col6_row3", "col6_row13", "col6_row4", "col6_row5", "col6_row6", "col6_row7", "col6_row8", "col6_row9", "col6_row10", "col6_row11", "col6_row12"];
var allListings10 = ["col5_row3", "col5_row12", "col5_row4", "col5_row5", "col5_row6", "col5_row7", "col5_row8", "col5_row9", "col5_row10", "col5_row11"];
var allListings11 = ["col4_row4", "col4_row12", "col4_row5", "col4_row6", "col4_row7", "col4_row8", "col4_row9", "col4_row10", "col4_row11"];
var allListings12 = ["col3_row4", "col3_row5", "col3_row6", "col3_row7", "col3_row8", "col3_row9", "col3_row10", "col3_row11",];
var allListings13 = ["col2_row8", "col2_row5",  "col2_row6", "col2_row7", "col2_row7", "col2_row9", "col2_row10", "col2_row11"];
var allListing = [allListings1, allListings2,allListings3,allListings4,allListings5,allListings6,allListings7,allListings8,allListings9,allListings10,allListings11,allListings12,allListings13];

var mixedMessages;

// OUTER ROW SPOTS, for blank creation

var blankListBrown = ["col2_row5", "col2_row6", "col2_row7", "col2_row8", "col2_row9", "col2_row10", "col2_row11"];
var blankListGreen = ["col14_row5", "col14_row6", "col14_row7", "col14_row8", "col14_row9", "col14_row10", "col14_row11"];


//COLOR 3 = BROWN AI-TEAM  (RIGHT), COLOR 2 = GREEN HUMAN TEAM (LEFT), COLOR 1 = YELLOW (NEUTRAL SPACES), COLOR 4 = ALLOWABLE MOVE SPACES (PINK) 

var color2 = ["col3_row5", "col3_row6", "col3_row7", "col3_row8", "col3_row9", "col3_row10", "col4_row5", "col4_row6", "col4_row7", "col4_row8", "col4_row9", "col4_row10", "col4_row11", "col5_row4", "col5_row5", "col5_row6", "col5_row7", "col5_row8", "col5_row9", "col5_row10", "col5_row11", "col6_row4", "col6_row5", "col6_row6", "col6_row7", "col6_row8", "col6_row9", "col6_row10", "col6_row11", "col6_row12"]; 

var color3 = ["col10_row4", "col10_row5", "col10_row6", "col10_row7", "col10_row8", "col10_row9", "col10_row10", "col10_row11", "col10_row12", "col11_row4", "col11_row5", "col11_row6", "col11_row7", "col11_row8", "col11_row9", "col11_row10", "col11_row11", "col12_row5", "col12_row6", "col12_row7", "col12_row8", "col12_row9", "col12_row10", "col12_row11", "col13_row5", "col13_row6", "col13_row7", "col13_row8", "col13_row9", "col13_row10"];

var col10_row4 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row11 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row12 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row4 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row11 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row11 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0};

var col3_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row11 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row4 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row11 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row4 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row11 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row12 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0};

// The outerBlack tiles (unused)
var col15_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row5 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row6 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row7 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row8 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row9 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row10 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
  col15_row11 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
  col15_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row15 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row5 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row6 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row7 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row8 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
col1_row9 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row10 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row11 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row15 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, 
col2_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
col5_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
col4_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, 
col14_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
col13_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0};

function adjustDifficulty(){
	var difficulties = ["Dan Quayle", "Very Easy", "Easy", "Normal", "Hard", "F*$#ing Ridiculous", undefined];
	placeholder = difficulties[parseInt(difficultyDefault)];
	difficultyDefault = window.prompt("Difficulty currently set to: " + difficulties[newDifficulty] + ".\n\n Enter:\n 1 for Dan Quayle\n 2 for Very Easy\n 3 for Easy\n 4 for Normal\n 5 for Hard\n 6 for F*$#ing Ridiculous\n");
	while (difficultyDefault !== "1" && difficultyDefault !== "2" && difficultyDefault !== "3" && difficultyDefault !== "4" && difficultyDefault !== "5" && difficultyDefault !== "6" && difficultyDefault !== undefined && isNaN(difficultyDefault)){
		difficultyDefault = window.prompt("Please try again.\nDifficulty currently set to: " + placeholder + ".\n\n Enter:\n 1 for Dan Quayle\n 2 for Very Easy\n 3 for Easy\n 4 for Normal\n 5 for Hard\n 6 for F*$#ing Ridiculous\n");	
		if(difficultyDefault == undefined || isNaN(difficultyDefault)){
			difficultyDefault = placeholder;
			break;
		}
	}
	if(difficultyDefault == undefined){
		difficultyDefault = parseInt(difficulties.indexOf(placeholder));
	} else if (isNaN(difficultyDefault)){
		difficultyDefault = parseInt(difficulties.indexOf(placeholder));
	} else {
	difficultyDefault = parseInt(difficultyDefault);
	--difficultyDefault;
	newDifficulty = difficultyDefault;
	alert("Your difficulty is now set for '" + difficulties[newDifficulty] + "'. Good luck!");
	}
	
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffleâ€¦
  while (m) {

    // Pick a remaining elementâ€¦
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


// Function calculating the total point value based on the predefined points for each letter
function pointsValue(x) {
	var total = 0;
	for (var i =0; i < x.length; i++){
	total += wordValues[x[i]];
}
return total
}
 
// Function checks if every letter in a word, 'word' are also contained in 'letters', for example, twoCheck("CTAEBIH", "CAT")
// is true, since all the letters in "CAT" are also somewhere in "CTAEBIH". 
function twoCheck(letters, word){
		var newbie = letters.split("");
		var wordChecker = word.split("");
		var counter = 0;
			for (var i = 0; i < wordChecker.length; i++){
				for (var j = 0; j < newbie.length; j++){
					if (wordChecker[i] === newbie[j]){
						newbie[j] = 0;
						counter++;
						if (counter === wordChecker.length){
							allWords[wordChecker] = pointsValue(wordChecker);
							return true;
						}
						break;
					}

				}
			}
}

function blankCheck(letters, word, blankNum){
		var newbie = letters.split("");
		var wordChecker = word.split("");
		var blankCounter = blankNum;
		var counter = 0;
			for (var i = 0; i < wordChecker.length; i++){
				for (var j = 0; j < newbie.length; j++){
					if (wordChecker[i] === newbie[j]){
						newbie[j] = 0;
						counter++;
						if (counter === (wordChecker.length - blankNum)){
							allWords[wordChecker] = pointsValue(wordChecker);
							return true;
						}
						break;
					}

				}
			}
}

function checkTheWholeList(availableLetters, wordsList){
	allWords = {};
	for (var i =0; i < wordsList.length; i++){
		twoCheck(availableLetters, wordsList[i]);
	}
	finalAverage(allWords);
}

function checkTheWholeListGreen(availableLetters, wordsList){
	allWords = {};
	for (var i =0; i < wordsList.length; i++){
		twoCheck(availableLetters, wordsList[i]);
	}
	finalAverageGreen(allWords);
}

function getKeyByValue(object, value) {
 	return Object.keys(object).find(key => object[key] === value);
}


function finalAverage(wordSelection){
	k = 0;
	var sum = 0;
	var highest = 0;
	noWords = 0;

	if (Object.keys(allWords).length === 0){
		noWords = 1;
		return;
	}

	var len = Object.keys(wordSelection).length;
	for (var i = 0; i < len; i++){
		if (Object.values(allWords)[i] > highest){
			highest = Object.values(allWords)[i];
		}
		sum += Object.values(allWords)[i]
	}
	var average = sum / len;

	 	switch (difficultyDefault) {
	 			case 0:  higherAverage = Math.floor((average + highest)*.275);
	 					  // console.log("Dan Quayle Difficulty: ", higherAverage);
	 					  var calcDan = Math.floor((average + highest)*.275);
	 					 var calcVeryEasy = Math.floor((average + highest)*.3333);
	 					 var calcEasy = Math.floor((average + highest)*.4);
	 					 var calcNormal = Math.floor((average + highest)*.5);
	 					 var calcHard = highest-2;

	 				break;
	 			case 1: higherAverage = Math.floor((average + highest)*.3333);
		     			 // console.log("Very Easy Difficulty: ", higherAverage);
		     			 var calcDan = Math.floor((average + highest)*.275);
	 					 var calcVeryEasy = Math.floor((average + highest)*.3333);
	 					 var calcEasy = Math.floor((average + highest)*.4);
	 					 var calcNormal = Math.floor((average + highest)*.5);
	 					 var calcHard = highest-2;

	 				break;
	 			case 2:  higherAverage = Math.floor((average + highest)*.4);
		     			 // console.log("Easy Difficulty: ", higherAverage);
		     			 var calcDan = Math.floor((average + highest)*.275);
	 					 var calcVeryEasy = Math.floor((average + highest)*.3333);
	 					 var calcEasy = Math.floor((average + highest)*.4);
	 					 var calcNormal = Math.floor((average + highest)*.5);
	 					 var calcHard = highest-2;
	 
	 				break;
	 			case 3: higherAverage = Math.floor((average + highest)*.5);
			 			 // console.log("Normal Difficulty: ", higherAverage);
			 			 var calcDan = Math.floor((average + highest)*.275);
	 					 var calcVeryEasy = Math.floor((average + highest)*.3333);
	 					 var calcEasy = Math.floor((average + highest)*.4);
	 					 var calcNormal = Math.floor((average + highest)*.5);
	 					 var calcHard = highest-2;
	 				break;
	 			case 4:  higherAverage = highest - 2;
	 					 // console.log("Hard Difficulty: ", higherAverage);
	 					 var calcDan = Math.floor((average + highest)*.275);
	 					 var calcVeryEasy = Math.floor((average + highest)*.3333);
	 					 var calcEasy = Math.floor((average + highest)*.4);
	 					 var calcNormal = Math.floor((average + highest)*.5);
	 					 var calcHard = highest-2;
	 				break;
	 			case 5:  higherAverage = highest;
		     			 // console.log("F*#$ing Ridiculous Difficulty: ", higherAverage);
		     			 var calcDan = Math.floor((average + highest)*.275);
	 					 var calcVeryEasy = Math.floor((average + highest)*.3333);
	 					 var calcEasy = Math.floor((average + highest)*.4);
	 					 var calcNormal = Math.floor((average + highest)*.5);
	 					 var calcHard = highest-2;
	 				break;
	 		}

		k = getKeyByValue(allWords, higherAverage);

		while (k === undefined){
			++higherAverage;
			k = getKeyByValue(allWords, higherAverage);
		};

		k = k.replace(/[, ]+/g, "").trim();
		// console.log(k);
		computerWord = k;
		computerScore = pointsValue(computerWord);
		// console.log(allWords)
		return Math.floor(higherAverage);
}

function finalAverageGreen(wordSelection){
	k = 0;
	var sum = 0;
	var highest = 0;
	noWords = 0;

	if (Object.keys(allWords).length === 0){
		noWords = 1;
		return;
	}

	var len = Object.keys(wordSelection).length;
	for (var i = 0; i < len; i++){
		if (Object.values(allWords)[i] > highest){
			highest = Object.values(allWords)[i];
		}
		sum += Object.values(allWords)[i]
	}
	var average = sum / len;

	
		    higherAverage = highest;
		    // console.log("F*#$ing Ridiculous Helper: ", higherAverage);

		// var higherAverage = Math.floor((average + highest)/2);
		
		// console.log("Highest: ", highest);
		// console.log("Average: ", average);
		// console.log("HigherAverage, Rounded: ", higherAverage);
		// debugger;

		j = getKeyByValue(allWords, higherAverage);

		while (j === undefined){
			++higherAverage;
			j = getKeyByValue(allWords, higherAverage);
		};

		j = j.replace(/[, ]+/g, "").trim();
		// console.log(j);
		humanLetter = j;
		humanScore = pointsValue(humanLetter);
		// console.log(allWords)
		return Math.floor(higherAverage);
}

function turnCounter (){
	var finalSpaced = [];
	for (var i = 0; i < poolListFinal.length; i++){
		switch (pointsValue(poolListFinal[i])) {
		 			case 1: finalSpaced.push("\u2081");
		 				break;
		 			case 2: finalSpaced.push("\u2082");
		 				break;
		 			case 3: finalSpaced.push("\u2083");
		 				break;
		 			case 4: finalSpaced.push("\u2084");
		 				break;
		 			case 5: finalSpaced.push("\u2085");
		 				break;
		 			case 6: finalSpaced.push("\u2086");
		 				break;
		 		}
	 	}

  document.getElementById("poolList").innerHTML = "Letters: <strong style='color:#ffbc06; font-family: verdana,sans-serif'>" + poolListFinal[0] + finalSpaced[0] + "  " + poolListFinal[1] + finalSpaced[1] + "   " + poolListFinal[2] + finalSpaced[2] + "   " + poolListFinal[3] + finalSpaced[3] + "   " + poolListFinal[4] + finalSpaced[4] + "   " + poolListFinal[5] + finalSpaced[5] + " </strong> " + teamMarker + " Moves: <strong style='color:#ffbc06'> " + currentMoves + "</strong>" ;
};

function successfulMove (){
    eval(wordSpot0).color = thirdPartyStorage.color;
    eval(wordSpot0).letter = thirdPartyStorage.letter;
    eval(wordSpot0).number = thirdPartyStorage.number;
    eval(wordSpot0).askBlank = thirdPartyStorage.askBlank;
    var audio = document.getElementById("audioShort");
       audio.play();
    // console.log("successfulMove");
    makeHidden();
    eval(eval(thirdPartyStorage).name).color = 1;
    eval(eval(thirdPartyStorage).name).letter = "";
    eval(eval(thirdPartyStorage).name).number = "";
    eval(eval(thirdPartyStorage).name).name = "";
    eval(eval(thirdPartyStorage).name).askBlank = 0;
    --currentMoves;
    checkForTeamSwitch();
    turnCounter();
    errantClick();

}

function computerMove(){

}

function howToPlay(){
	alert("This is how to Play.");
}

function setupGame(){
	alert("This is how to setup the game.");
}

function activateHex (a, b){
 
    makeHidden();
    wordSpot0 = "col" + a + "_row" + b;

      if (billyClicker === 0 && eval(wordSpot0).color !== 5){

        //CHECKING FOR INCORRECT CLICKS//
          if (teamTurn === 1 && eval(wordSpot0).color === 3){
            alert("It's not Brown's turn.");
            
            return;
          };
          if (teamTurn === 0 && eval(wordSpot0).color === 2){
                // alert("It's not Green's turn.");
                
                return;
              };
          if (eval(wordSpot0).color === 1){

                return;
              };
        //SPECIAL CASE FOR BOTTOM TILE//
          if (a === 8 && b === 14){
              var wordSpot1, wordSpot2, wordSpot3 = "";
              var spot1, spot2, spot3 = [];
              var upNumA = a+1;
              var upNumB = b+1;
              var downNumA = a-1;
              var downNumB = b-1;
            spot1 = [a, downNumB]; // 
            spot2 = [downNumA, downNumB];
            spot3 = [upNumA, downNumB];
            wordSpot1 = "col" + spot1[0] + "_row" + spot1[1];
            wordSpot2 = "col" + spot2[0] + "_row" + spot2[1];
            wordSpot3 = "col" + spot3[0] + "_row" + spot3[1];

            eval(wordSpot0).activated = 2;

          if (eval(wordSpot1).color !== eval(wordSpot0).color && eval(wordSpot1).color !== 5) {
             if ((eval(wordSpot1).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot1).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot1+"_color").className="hexagon color-4";
            eval(wordSpot1).activated = 3;

            } else {
              document.getElementById(wordSpot1+"_text").innerHTML="<strong style = 'color: purple'>" + "&#8673" + "</strong>";
              document.getElementById(wordSpot1+"_color").className="hexagon color-4";
              eval(wordSpot1).activated = 1;
             }
           }

          if (eval(wordSpot2).color !== eval(wordSpot0).color && eval(wordSpot2).color !== 5) {
             if ((eval(wordSpot2).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot2).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot2+"_color").className="hexagon color-4";
            eval(wordSpot2).activated = 3;

            } else {
            document.getElementById(wordSpot2+"_text").innerHTML="<strong style = 'transform: rotateZ(-135deg); color: purple'>" + "&#8674;" + "</strong>";
            document.getElementById(wordSpot2+"_color").className="hexagon color-4";
            eval(wordSpot2).activated = 1;
            }
          }
          
          if (eval(wordSpot3).color !== eval(wordSpot0).color && eval(wordSpot3).color !== 5) {
             if ((eval(wordSpot3).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot3).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot3+"_color").className="hexagon color-4";
            eval(wordSpot3).activated = 3;

            } else {
            document.getElementById(wordSpot3+"_text").innerHTML="<strong style = 'transform: rotateZ(-45deg); color: purple'>" + "&#8674;" + "</strong>";
            document.getElementById(wordSpot3+"_color").className="hexagon color-4";
            eval(wordSpot3).activated = 1;
           }
         }
            billyClicker = 1;
            thirdPartyStorage = {askBlank: eval(wordSpot0).askBlank, color: eval(wordSpot0).color, number: eval(wordSpot0).number, letter: eval(wordSpot0).letter, name:wordSpot0};
            return;
          };



          var hello = "col" + a + "_row" + b;
          var upNumA = a+1
          var upNumB = b+1;
          var downNumA = a-1;
          var downNumB = b-1;
          var spot1, spot2, spot3, spot4, spot5, spot6 = [];
          var wordSpot1, wordSpot2, wordSpot3, wordSpot4, wordSpot5, wordSpot6 = "";
          if (a % 2 === 0){
            spot5 = [downNumA, downNumB];
            spot4 = [upNumA, downNumB];
          } else {
            spot5 = [downNumA, upNumB];
            spot4 = [upNumA, upNumB];
          };
            spot1 = [a, downNumB]; // 
            spot2 = [a, upNumB];
            spot3 = [upNumA, b];
            spot6 = [downNumA, b];

            wordSpot1 = "col" + spot1[0] + "_row" + spot1[1];
            wordSpot2 = "col" + spot2[0] + "_row" + spot2[1];
            wordSpot3 = "col" + spot3[0] + "_row" + spot3[1];
            wordSpot4 = "col" + spot4[0] + "_row" + spot4[1];
            wordSpot5 = "col" + spot5[0] + "_row" + spot5[1];
            wordSpot6 = "col" + spot6[0] + "_row" + spot6[1];

            // The main space is a special re-click case.
            eval(wordSpot0).activated = 2;

          if (eval(wordSpot1).color !== eval(wordSpot0).color && eval(wordSpot1).color !== 5) {
            if ((eval(wordSpot1).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot1).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot1+"_color").className="hexagon color-4";
            eval(wordSpot1).activated = 3;

            } else {
              document.getElementById(wordSpot1+"_text").innerHTML="<strong style = 'color: purple'>" + "&#8673;" + "</strong>";
              document.getElementById(wordSpot1+"_color").className="hexagon color-4";
              eval(wordSpot1).activated = 1;
             }
           }

          if (eval(wordSpot2).color !== eval(wordSpot0).color && eval(wordSpot2).color !== 5) {
            if ((eval(wordSpot2).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot2).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot2+"_color").className="hexagon color-4";
            eval(wordSpot2).activated = 3;

            } else {
            document.getElementById(wordSpot2+"_text").innerHTML="<strong style = 'color: purple'>" + "&#8675;" + "</strong>";
            document.getElementById(wordSpot2+"_color").className="hexagon color-4";
            eval(wordSpot2).activated = 1;
          }
            }
          
          if (eval(wordSpot3).color !== eval(wordSpot0).color && eval(wordSpot3).color !== 5) {

            if ((eval(wordSpot3).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot3).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot3+"_color").className="hexagon color-4";
            eval(wordSpot3).activated = 3;

            } else {
            if (a % 2 === 0){
            document.getElementById(wordSpot3+"_text").innerHTML="<strong style = 'transform: rotateZ(45deg); color: purple'>" + "&#8674;" + "</strong>";
          } else {
            document.getElementById(wordSpot3+"_text").innerHTML="<strong style = 'transform: rotateZ(-45deg); color: purple'>" + "&#8674;" + "</strong>";
          }
            document.getElementById(wordSpot3+"_color").className="hexagon color-4";
            eval(wordSpot3).activated = 1;
           }
         }
          
          if (eval(wordSpot4).color !== eval(wordSpot0).color && eval(wordSpot4).color !== 5) {

             if ((eval(wordSpot4).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot4).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot4+"_color").className="hexagon color-4";
            eval(wordSpot4).activated = 3;

            } else {
             if (a % 2 === 0){
            document.getElementById(wordSpot4+"_text").innerHTML="<strong style = 'transform: rotateZ(-45deg); color: purple'>" + "&#8674;" + "</strong>";
          } else {
            document.getElementById(wordSpot4+"_text").innerHTML="<strong style = 'transform: rotateZ(45deg); color: purple'>" + "&#8674;" + "</strong>";
          }
            document.getElementById(wordSpot4+"_color").className="hexagon color-4";
            eval(wordSpot4).activated = 1;
          }
        }
         
         if (eval(wordSpot5).color !== eval(wordSpot0).color && eval(wordSpot5).color !== 5) {
           if ((eval(wordSpot5).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot5).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot5+"_color").className="hexagon color-4";
            eval(wordSpot5).activated = 3;

            } else {
             if (a % 2 === 0){
            document.getElementById(wordSpot5+"_text").innerHTML="<strong style = 'transform: rotateZ(-135deg); color: purple'>" + "&#8674;" + "</strong>";
          } else {
            document.getElementById(wordSpot5+"_text").innerHTML="<strong style = 'transform: rotateZ(135deg); color: purple'>" + "&#8674;" + "</strong>";
          }
            document.getElementById(wordSpot5+"_color").className="hexagon color-4";
            eval(wordSpot5).activated = 1;
         }
       }

         if (eval(wordSpot6).color !== eval(wordSpot0).color && eval(wordSpot6).color !== 5) {
           if ((eval(wordSpot6).color === 2 && eval(wordSpot0).color === 3) || (eval(wordSpot6).color === 3 && eval(wordSpot0).color === 2)) {
            document.getElementById(wordSpot6+"_color").className="hexagon color-4";
            eval(wordSpot6).activated = 3;

            } else {
           if (a % 2 === 0){
            document.getElementById(wordSpot6+"_text").innerHTML="<strong style = 'transform: rotateZ(135deg); color: purple'>" + "&#8674;" + "</strong>";
          } else {
            document.getElementById(wordSpot6+"_text").innerHTML="<strong style = 'transform: rotateZ(-135deg); color: purple'>" + "&#8674;" + "</strong>";
          }
          document.getElementById(wordSpot6+"_color").className="hexagon color-4";
          eval(wordSpot6).activated = 1;
          }
        }

          // console.log(wordSpot1 + " " + wordSpot2 + " " + wordSpot3 + " " + wordSpot4 + " " + wordSpot5 + " " + wordSpot6 + " a: " + a + " b: " + b + " downNumA: " + downNumA + " downNumB: " + downNumB + " upNumA: " + upNumA + " upNumB: " + upNumB);

          billyClicker = 1;
          thirdPartyStorage = {color: eval(wordSpot0).color, number: eval(wordSpot0).number, letter: eval(wordSpot0).letter, name:wordSpot0, askBlank: eval(wordSpot0).askBlank};
      } else if (billyClicker === 1 && eval(wordSpot0).activated === 2) {
         // console.log("Well, that happened");
         errantClick();
         return;
        } else if (billyClicker === 1 && eval(wordSpot0).activated === 0){
          // console.log("Way off");
          if(teamTurn === 1){
          alert("Try again. Single-click on a bee, then click on one of the pink tiles to move/attack.");
      	};
          errantClick();
        } else if (billyClicker === 1 && eval(wordSpot0).activated === 3){
        	if(teamTurn === 0){
        	 document.getElementById("banner").className = "colorRed";
       		 // console.log("Anybody home?");
       		 document.getElementById("bannerWord").innerHTML="BUZZ-OFF";
       		 
       		var audio2 = document.getElementById("audioLong");
       		audio2.play();
         	 alert("Your " + eval(wordSpot0).letter + " is under attack!");
      		} else {
      			var audio2 = document.getElementById("audioLong");
       			audio2.play();
      		}
      		
            battleSequence();
        } else if (billyClicker === 1 && eval(wordSpot0).activated === 1){
          successfulMove();
         }
      // console.log("Not Allowed In!")
      };

function battleSequence (){
 	if (eval(wordSpot0).attack === 1){
 		alert("Cannot attack with the same tile more than once per turn (except Queen).");
 		inDecisionMove();

 		// to avoid the "Are you sure you want to battle" pop-up.
 	// } else if (eval(wordSpot0).color === 2){
 	// defender = eval(wordSpot0);
  //   defender.name = wordSpot0;
   
  //   attacker = eval(thirdPartyStorage);
   
  //   attackerMandoLetter = eval(thirdPartyStorage).letter;
  //   defenderMandoLetter = eval(wordSpot0).letter;
    
  //   if (eval(wordSpot0).color === 2){
  //   	greenMandoLetter = eval(wordSpot0).letter;
  //   	brownMandoLetter = eval(thirdPartyStorage).letter;
  //   } else {
  //   	greenMandoLetter = eval(thirdPartyStorage).letter;
  //   	brownMandoLetter = eval(wordSpot0).letter;
  //   }
  //  flankSetup(eval(defender).name);
  //   haveBattle();
  // } else if (confirm("Are you sure you want to attack this letter?")){
  } else {
  	
  	document.getElementById("banner").className = "colorRed";
    // console.log("Anybody home?");
    document.getElementById("bannerWord").innerHTML="BUZZ-OFF";
    // successfulMove();
    defender = eval(wordSpot0);
    defender.name = wordSpot0;
    // eval(defender.name).hidden = -1;
    attacker = eval(thirdPartyStorage);
    // eval(attacker.name).attack = 1;
    // eval(attacker.name).hidden = -1;
    attackerMandoLetter = eval(thirdPartyStorage).letter;
    defenderMandoLetter = eval(wordSpot0).letter;
    // thirdPartyStorage.hidden = -1;
    if (eval(wordSpot0).color === 2){
    	greenMandoLetter = eval(wordSpot0).letter;
    	brownMandoLetter = eval(thirdPartyStorage).letter;
    } else {
    	greenMandoLetter = eval(thirdPartyStorage).letter;
    	brownMandoLetter = eval(wordSpot0).letter;
    }
   flankSetup(eval(defender).name);
    haveBattle();
}
  // } else {
  //   inDecisionMove();
  // }
}

// THIS IS USED TO DETERMINE WHETHER A LETTER IS ALLOWED TO SUPPORT/DEFEND AN ATTACK NEARBY, AND ALSO SETS UP WHETHER A 
// SPACE IS MOVEABLE FOR THE NEXT MOVE.
function flankSetup(people){
		  // debugger;

		  var a = 0;
	      var b = 0;

	      for (var i = 0; i < 15; i++){
	      	for (var j = 0; j < 15; j++){
	      		if (("col" + i + "_row" + j) === people){
	      			a = i;
	      			b = j;
	      			
	      		}
	      	}
	      }

	      var upNumA = a+1
          var upNumB = b+1;
          var downNumA = a-1;
          var downNumB = b-1;
          if (a % 2 === 0){
            attackFlank5 = [downNumA, downNumB];
            attackFlank4 = [upNumA, downNumB];
          } else {
            attackFlank5 = [downNumA, upNumB];
            attackFlank4 = [upNumA, upNumB];
          };
            attackFlank1 = [a, downNumB]; // 
            attackFlank2 = [a, upNumB];
            attackFlank3 = [upNumA, b];
            attackFlank6 = [downNumA, b];

            wordAttackFlank0 = people;

            wordAttackFlank1 = "col" + attackFlank1[0] + "_row" + attackFlank1[1];
            wordAttackFlank2 = "col" + attackFlank2[0] + "_row" + attackFlank2[1];
            wordAttackFlank3 = "col" + attackFlank3[0] + "_row" + attackFlank3[1];
            wordAttackFlank4 = "col" + attackFlank4[0] + "_row" + attackFlank4[1];
            wordAttackFlank5 = "col" + attackFlank5[0] + "_row" + attackFlank5[1];
            wordAttackFlank6 = "col" + attackFlank6[0] + "_row" + attackFlank6[1];

         //    console.log(wordAttackFlank1);
        	// console.log(wordAttackFlank1);
        	// console.log(wordAttackFlank2);
        	// console.log(wordAttackFlank3);
        	// console.log(wordAttackFlank4);
        	// console.log(wordAttackFlank5);
        	// console.log(wordAttackFlank6);

          if (eval(wordAttackFlank1).color !== eval(wordAttackFlank0).color && eval(wordAttackFlank1).color !== 5) {
            if ((eval(wordAttackFlank1).color === 2 && eval(wordAttackFlank0).color === 3) || (eval(wordAttackFlank1).color === 3 && eval(wordAttackFlank0).color === 2)) {
            
            eval(wordAttackFlank1).flank = 4;

            } 
           };
          if (eval(wordAttackFlank2).color !== eval(wordAttackFlank0).color && eval(wordAttackFlank2).color !== 5) {
            if ((eval(wordAttackFlank2).color === 2 && eval(wordAttackFlank0).color === 3) || (eval(wordAttackFlank2).color === 3 && eval(wordAttackFlank0).color === 2)) {
            
            eval(wordAttackFlank2).flank = 4;

            } 
           };
            if (eval(wordAttackFlank3).color !== eval(wordAttackFlank0).color && eval(wordAttackFlank3).color !== 5) {
            if ((eval(wordAttackFlank3).color === 2 && eval(wordAttackFlank0).color === 3) || (eval(wordAttackFlank3).color === 3 && eval(wordAttackFlank0).color === 2)) {
            
            eval(wordAttackFlank3).flank = 4;

            } 
           };
            if (eval(wordAttackFlank4).color !== eval(wordAttackFlank0).color && eval(wordAttackFlank4).color !== 5) {
            if ((eval(wordAttackFlank4).color === 2 && eval(wordAttackFlank0).color === 3) || (eval(wordAttackFlank4).color === 3 && eval(wordAttackFlank0).color === 2)) {
            
            eval(wordAttackFlank4).flank = 4;

            } 
           };
            if (eval(wordAttackFlank5).color !== eval(wordAttackFlank0).color && eval(wordAttackFlank5).color !== 5) {
            if ((eval(wordAttackFlank5).color === 2 && eval(wordAttackFlank0).color === 3) || (eval(wordAttackFlank5).color === 3 && eval(wordAttackFlank0).color === 2)) {
            
            eval(wordAttackFlank5).flank = 4;

            } 
           };
            if (eval(wordAttackFlank6).color !== eval(wordAttackFlank0).color && eval(wordAttackFlank6).color !== 5) {
            if ((eval(wordAttackFlank6).color === 2 && eval(wordAttackFlank0).color === 3) || (eval(wordAttackFlank6).color === 3 && eval(wordAttackFlank0).color === 2)) {
            
            eval(wordAttackFlank6).flank = 4;

            } 
           };
};

// THIS FUNCTION DEALS WITH WHETHER A BEE HAS MOVED TO THE OPPONENT'S LAST ROW. 
function checkBlank(){
	// debugger;
	for (var i = 0; i < blankListGreen.length; i++){
		if(eval(blankListGreen[i]).color === 2 && eval(blankListGreen[i]).letter !== "Q" && eval(blankListGreen[i]).askBlank === 0){
			eval(blankListGreen[i]).askBlank = 1;
			if (teamTurn === 0 && confirm("You've reached your opponent's hive! Would you like to convert your tile to a blank? (0 point value)")){
			eval(blankListGreen[i]).letter = "*";
			eval(blankListGreen[i]).hidden = -1;
			eval(blankListGreen[i]).number = 0;
			document.getElementById(allListings[i] + "_text").innerHTML="<strong>" + eval(allListings[i]).letter + "</strong><small>" + eval(allListings[i]).number + "</small>";
		}

	}

		if(eval(blankListBrown[i]).color === 3 && eval(blankListBrown[i]).letter !== "Q" && eval(blankListBrown[i]).askBlank === 0){
			eval(blankListBrown[i]).askBlank = 1;
			if (teamTurn === 1){
			eval(blankListBrown[i]).letter = "*";
			eval(blankListBrown[i]).hidden = -1;
			eval(blankListBrown[i]).number = 0;
			document.getElementById(allListings[i] + "_text").innerHTML="<strong>" + eval(allListings[i]).letter + "</strong><small>" + eval(allListings[i]).number + "</small>";
		}}


	}


}


function haveBattle(){
	// debugger;
	// I HAVEN'T SOLVED THIS GLITCH YET, BUT THE FOLLOWING BANNER WORD/COLOR CHANGE DOES NOT WORK ON CHROME.
	document.getElementById("banner").className = "colorRed";
       		// console.log("Anybody home?");
    document.getElementById("bannerWord").innerHTML="BUZZ-OFF";
	hintMarker = 0;
	winner = 0;
	winnerName = "";
	brownSupportLetters = [];
	greenSupportLetters = [];
	brownSupportLocation = [];
	greenSupportLocation = [];
	brownBlankTrigger = 0;
	greenBlankTrigger = 0;
	poolListBrown = [];
	poolListGreen = [];
	for (var i = 0; i < allListings.length; i++){
		if (eval(allListings[i]).activated === 3 && eval(allListings[i]).color === 3){
			brownSupportLetters.push(eval(allListings[i]).letter);
			brownSupportLocation.push(eval(allListings[i]).name);
			poolListBrown.push(eval(allListings[i]).letter);
		} else if (eval(allListings[i]).activated === 3 && eval(allListings[i]).color === 2){
			greenSupportLetters.push(eval(allListings[i]).letter);
			greenSupportLocation.push(eval(allListings[i]).name);
			poolListGreen.push(eval(allListings[i]).letter);
		}
	};

	for (var i = 0; i < allListings.length; i++){
		if (eval(allListings[i]).flank === 4 && eval(allListings[i]).color === 3){
			brownSupportLetters.push(eval(allListings[i]).letter);
			poolListBrown.push(eval(allListings[i]).letter);
			brownSupportLocation.push(eval(allListings[i]).name);
		} else if (eval(allListings[i]).flank === 4 && eval(allListings[i]).color === 2){
			greenSupportLetters.push(eval(allListings[i]).letter);
			poolListGreen.push(eval(allListings[i]).letter);
			greenSupportLocation.push(eval(allListings[i]).name);
		}
	};
	brownBlankCounter = 0;
	greenBlankCounter = 0;
	greenListNumbers = [];
	poolListGreenFinal = (poolListFinal.concat(poolListGreen)).join("");

	poolListGreenFinal = poolListGreenFinal.split("");

	for(var i = 0; i < poolListGreenFinal.length; i++){
		if(poolListGreenFinal[i] === greenMandoLetter){
			poolListGreenFinal.splice(i, 1);
			poolListGreenFinal.splice(0, 0, greenMandoLetter);
			break;
		}
	}

	poolListGreenFinal = poolListGreenFinal.join("");


	// THIS IS A RANDOM SEEDING IN THE SCENARIO WHERE THE AI HAS A BLANK TILE ... IT WOULD BE TOO INTENSIVE TO SEARCH ALL THE POSSIBILITIES
	// OF THE ALPHABET WITH 6 LETTERS PLUS A BLANK, SO THIS RANDOMLY ASSIGNS A 'GOOD' LETTER AS THE BLANK. 
	var commonLetters = ["R", "S", "T", "L", "N", "E"];
	randomizedLetter = Math.floor(Math.random()*6);


	for (var i = 0; i < poolListBrown.length; i++){
		if(poolListBrown[i] === "*"){
			if(brownMandoLetter === "*"){
				brownMandoLetter = commonLetters[randomizedLetter];
			};
			poolListBrown[i] = commonLetters[randomizedLetter];
		}
	};

	poolListBrownFinal = (poolListFinal.concat(poolListBrown)).join("");
	checkTheWholeList(poolListBrownFinal, totalList);
	if (noWords === 1){
			computerScore = 0;
			computerWord = "@";
		};

	for (var i = 0; i < greenSupportLetters.length; i++){
		if(greenSupportLetters[i] === "*"){
			++greenBlankCounter;	
		}
	};

	greenSpaced = [];

	// for (var i = 0; i < poolListGreenFinal.length; i++){
	// 	if (poolListGreenFinal[i] === "*"){
	// 		greenListNumbers.push("(0)");
	// 	} else {
	// 		greenListNumbers.push("(" + pointsValue(poolListGreenFinal[i]) + ")");
	// 		}
	// 	greenSpaced.push(poolListGreenFinal[i]);
	// }

	 for (var i = 0; i < poolListGreenFinal.length; i++){
	 	greenSpaced.push(poolListGreenFinal[i]);
	 	if (poolListGreenFinal[i] === "*"){
	 		greenSpaced.push("\u2080");
	 	} else {
	 		switch (pointsValue(poolListGreenFinal[i])) {
	 			case 1: greenSpaced.push("\u2081");
	 				break;
	 			case 2: greenSpaced.push("\u2082");
	 				break;
	 			case 3: greenSpaced.push("\u2083");
	 				break;
	 			case 4: greenSpaced.push("\u2084");
	 				break;
	 			case 5: greenSpaced.push("\u2085");
	 				break;
	 			case 6: greenSpaced.push("\u2086");
	 				break;
	 		}
	 		// greenListNumbers.push("(" + pointsValue(poolListGreenFinal[i]) + ")");
	 		}
	 }

	if (greenBlankCounter > 0){
		if(greenMandoLetter === "*"){
			result = window.prompt(greenSpaced.join(" ") + "\n\nType 'giveup' to concede.").toUpperCase();

		    	while (blankCheck(poolListGreenFinal, result, greenBlankCounter) !== true || dictionaryCheck(result, totalList) !== true){
    						result = window.prompt(greenSpaced.join("  ") + "\nTry again." + "\n\nType 'giveup' to concede.\n").toUpperCase();
		    			if (result === "GIVEUP" || result === null || result === "HELPME"){
			    				break;
			    			}
		    		};
		} else { // Type "#" to give
			result = window.prompt(greenSpaced.join(" ") + "\n\nMust spell with '" + greenMandoLetter + "'.\n\nType 'giveup' to concede,\n or 'helpme' for a hint.").toUpperCase();

			    	while (twoCheck(result, greenMandoLetter) !== true || blankCheck(poolListGreenFinal, result, greenBlankCounter) !== true || dictionaryCheck(result, totalList) !== true){
    						if (result === "GIVEUP" || result === null || result === "HELPME"){
			    				break;
			    			}
    						result = window.prompt(greenSpaced.join(" ") + "\n\nTry again. Must spell with '" + greenMandoLetter + "'.\n\nType 'giveup' to concede,\n or 'helpme' for a hint.").toUpperCase();
			    		};
		}
	} else {
		result = window.prompt("" + greenSpaced.join(" ") + "\n\nMust spell with '" + greenMandoLetter + "'.\n\nType 'giveup' to concede,\n or 'helpme' for a hint.").toUpperCase();
		// debugger;
    	while (twoCheck(result, greenMandoLetter) !== true || twoCheck(poolListGreenFinal, result) !== true || dictionaryCheck(result, totalList) !== true){
    			if (result === "GIVEUP" || result === null || result === "HELPME"){
    				break;
    			}
    			result = window.prompt(greenSpaced.join(" ") + "\n\nTry again. Must spell with '" + greenMandoLetter + "'.\n\nType 'giveup' to concede,\n or 'helpme' for a hint.").toUpperCase();
    		};
	}

    var newTotal = pointsValue(result);

    if (result.toUpperCase() === "GIVEUP" || result === null){
		newTotal = 0;
		result = "...nothing";
	}
	if (result.toUpperCase() === "HELPME"){
		++hints;
		hintMarker = 1;
		checkTheWholeListGreen(poolListGreenFinal, totalList);
		newTotal = humanScore;
		result = humanLetter;
		result = window.prompt("" + greenSpaced.join(" ") + "\n\n'" + greenMandoLetter + "' is mandatory.\n\nType 'giveup' to concede,\n or 'helpme' for a hint.", "Hint: " + humanLetter).toUpperCase();
		// debugger;
    	while (twoCheck(result, greenMandoLetter) !== true || twoCheck(poolListGreenFinal, result) !== true || dictionaryCheck(result, totalList) !== true){
    			if (result === "GIVEUP" || result === null){
    				break;
    			}
    			result = window.prompt(greenSpaced.join(" ") + "\n\nTry again. Must spell with '" + greenMandoLetter + "'.\n\nType 'giveup' to concede.").toUpperCase();
    		};
	}
    if (computerScore > newTotal){
    	winner = 2;
    	winnerName = "Brown";
    	loserTeam = "green";
    	loserLetter = greenMandoLetter;
    } else if (computerScore < newTotal){
    	winner = 1;
    	winnerName = "Green";
    	loserTeam = "brown";
    	loserLetter = brownMandoLetter;
    } else {
    	if (computerWord.length > result.length){
    		winner = 2;
    		winnerName = "Brown";
    		loserTeam = "green";
    		loserLetter = greenMandoLetter;
    	} else if (computerWord.length < result.length){
    		winner = 1;
    		winnerName = "Green";
    		loserTeam = "brown";
    		loserLetter = brownMandoLetter;
    	} else if (defender.color === 2){
    		winner = 1;
    		winnerName = "Green";
    		loserTeam = "brown";
    		loserLetter = brownMandoLetter;
    	} else {
    		winner = 2;
    		winnerName = "Brown";
    		loserTeam = "green";
    		loserLetter = greenMandoLetter;
    	}
    }

   
		if (result.length > personalLongestWord.length && result !== "...nothing" && hintMarker !== 1){
		    	personalLongestWord = result;
		    }

	    if (newTotal > personalHighestScore && hintMarker !==1){
	    	personalHighestScore = newTotal;
	    	personalBestWord = result;
	    	if (computerWord === "@"){
	    		alert("Brown spells ...nothing, Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'...\n\nNice! That's your best word of the day!");
	    	} else {
	    		alert("Brown spells " + computerWord + ", Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'...\n\nNice! That's your best word of the day!");
	    		// console.log("New High Score")
	    	}
	    } else {
	    	if (hintMarker === 1){
	    		if (computerWord === "@"){
	   				alert("Brown spells ...nothing, Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'... (Hints used: " + hints + ")");
	   			} else {
	   				alert("Brown spells " + computerWord + ", Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'... (Hints used: " + hints + ")");

	   			}
	    	} else if (computerWord === "@"){
	    		if (winnerName === "GREEN"){
	    			alert("Brown spells ...nothing, Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'...");

	    		} else {
	    			alert("Brown spells ...nothing, Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'...");

	    		}
	   		} else {
	   			alert("Brown spells " + computerWord + ", Score: " + computerScore + " vs. Green's " + result + ", Score: " + newTotal + "!\n" + winnerName + " defeats " + loserTeam + "'s '" + loserLetter + "'...");
	   		// console.log("normal event.");

	   		} 
    }

   
 
    // debugger;
    if (teamMarker === "Brown"){
    	if (winner === 1) {
    		loseMove();
    	} else {
    		winMove();
    	}
    } else {
    	if (winner === 2){
    		loseMove();
    	} else {
    		winMove();
    	}
    }
   
}

// This function checks if a given word, 'word', can be found somewhere in an array, 'list'. This is used on the giant Scrabble dictionary array in the other js file.
function dictionaryCheck(word, list){
	for (var i = 0; i < list.length; i++){
		if(list[i] === word){
			return true;
		}
	};
}
// THIS FUNCTION CHECKS IF IT'S THE OTHER TEAM'S TURN 
function checkForTeamSwitch(){
  if(currentMoves === 0){
      if(teamTurn === 1){
        teamTurn = 0;
        currentMoves = nextMovesBrown;
        
        teamMarker = "Brown";
        document.getElementById("banner").className = "colorBrown";
        // console.log("Are we in here?");
        document.getElementById("bannerWord").innerHTML="BROWN'S TURN";
        turnCounter(); 
        letterPoolReset();
        toggleHidden();
        makeHidden();
        computerTurn();     
  }  else {
        teamTurn = 1;
        currentMoves = nextMovesGreen;
        document.getElementById("banner").className = "colorGreen";
        // console.log("Anybody home?");
        document.getElementById("bannerWord").innerHTML="GREEN'S TURN";
        teamMarker = "Green";
        turnCounter();
        letterPoolReset();
        toggleHidden();
        makeHidden();      
      
    }
  }
}


// THIS FUNCTION SETS UP THE AI'S TURN. IT STARTS BY CREATING ARRAYS OF ALL REMAINING GREEN ('TARGETCOMPUTER') HEXES AND REMAINING BROWN ('ATTACKCOMPUTER') HEXES,
 // CHECKS IF IT KNOWS WHERE THE GREEN 'Q' IS, IF NOT, IT ATTACKS THE NEAREST GREEN BEE WITH IT'S LEFTMOST AI BROWN BEE.
function computerTurn(){
	targetComputer = [];
	attackComputer = [];
	attackOrder = [];
	victim = [];

	mixedMessages = allListings1.sort(function(a, b){return 0.5 - Math.random()});
	for (var i = 1; i < 13; i++){
		mixedMessages = mixedMessages.concat(allListing[i].sort(function(a, b){return 0.5 - Math.random()}));
	}

	for (var i = 0; i < mixedMessages.length; i++){
		if (eval(mixedMessages[i]).color === 2 && eval(mixedMessages[i]).letter === "Q" && eval(mixedMessages[i]).hidden === -1){
			targetComputer.splice(0,0,mixedMessages[i]);
		} else if (eval(mixedMessages[i]).color === 2){
			targetComputer.push(mixedMessages[i]);
		} else if (eval(mixedMessages[i]).color === 3){
			attackComputer.push(mixedMessages[i]);
		}
	}

		columnThird = 0;
		rowThird = 0;
		nameLock = [];
		shortestDistance = 30;
		totalDistance = 0;

		for (var i = 0; i < attackComputer.length; i++){
			totalDistance = Math.abs(eval(targetComputer[0]).col - eval(attackComputer[i]).col) + Math.abs(eval(targetComputer[0]).row - eval(attackComputer[i]).row);
				if(totalDistance < shortestDistance || totalDistance === shortestDistance ){
					shortestDistance = totalDistance;
					nameLock = [];
					nameLock.splice(0,0,attackComputer[i]);
				} else {
					nameLock.push(attackComputer[i]);
				}
			
		}
	// AI MOVE DECISION 

	// Randomization of what the computer will do
	computerRandomization = Math.floor(Math.random()*100);

	// Chance for agressive seek-and-destroy attack. 
	
	if ((computerRandomization >= 60) || eval(nameLock[0]).col > 10 || targetComputer.length < 10){
		// ensuring that "Q" isn't itself attacking others aggressively if it isn't the only piece left on the board
		if (eval(nameLock[0]).letter === "Q" && nameLock.length > 1){
			getToOneAway(nameLock[1]);
			// console.log("Queen was avoided");
			} else {
				getToOneAway(nameLock[0]);
			}
	} else if (computerRandomization < 60 ) {
		// console.log("Pairings.")
		computerTravelsTogether();
	}


	
			
	
		

	// for (var i = 0; i < 10; i++){
	// 	for (var j = 0; j < attackComputer.length; j++){
	// 		if (eval(attackComputer[j]).col === eval(targetComputer[0]).col+1+j && eval(attackComputer[j]).row === (eval(targetComputer[0]).row-j)){
	// 			attackOrder.push(attackComputer[j]);
	// 		} else if (eval(attackComputer[j]).col === eval(targetComputer[0]).col-1-j && eval(attackComputer[j]).row === (eval(targetComputer[0]).row-j)){
	// 			attackOrder.push(attackComputer[j]);
	// 		} else if (eval(attackComputer[j]).col === eval(targetComputer[0]).col-j && eval(attackComputer[j]).row === (eval(targetComputer[0]).row-1-j)){
	// 			attackOrder.push(attackComputer[j]);
	// 		} else if (eval(attackComputer[j]).col === eval(targetComputer[0]).col+j && eval(attackComputer[j]).row === (eval(targetComputer[0]).row+1+j)){
	// 			attackOrder.push(attackComputer[j]);
	// 		}
	// 	}
	// }

}

// THIS FUNCTION IS ONE OF THE TWO MAIN AI-STYLES OF PLAY, WHERE TWO NEIGHBORING AI PIECES TRAVEL TOGETHER TWO MOVES EACH, TO SUPPORT FLANKING.
function computerTravelsTogether(){

	targetComputer = [];
	attackComputer = [];
	attackOrder = [];
	victim = [];

	for (var i = 0; i < allListings.length; i++){
		if (eval(allListings[i]).color === 2 && eval(allListings[i]).letter === "Q" && eval(allListings[i]).hidden === -1){
			targetComputer.splice(0,0,allListings[i]);
		} else if (eval(allListings[i]).color === 2){
			targetComputer.push(allListings[i]);
		} else if (eval(allListings[i]).color === 3){
			attackComputer.push(allListings[i]);
		}
	}

		columnThird = 0;
		rowThird = 0;
		nameLock = [];
		shortestDistance = 30;
		totalDistance = 0;

		for (var i = 0; i < attackComputer.length; i++){
			totalDistance = Math.abs(eval(targetComputer[0]).col - eval(attackComputer[i]).col) + Math.abs(eval(targetComputer[0]).row - eval(attackComputer[i]).row);
				if(totalDistance < shortestDistance || totalDistance === shortestDistance ){
					shortestDistance = totalDistance;
					nameLock = [];
					nameLock.splice(0,0,attackComputer[i]);
				} else {
					nameLock.push(attackComputer[i]);
				}
			
		}


	var currentMoveThing1 = [];
	var currentMoveThing2 = [];
	
	directionsLeft = [];

	for(var i = 0; i < orderedListLeft.length-1; i++){
		if(eval(orderedListLeft[i]).color === 3 && eval(orderedListLeft[i+1]).color === 3 && eval(orderedListLeft[i]).col === eval(orderedListLeft[i+1]).col){
			directionsLeft.push([orderedListLeft[i], orderedListLeft[i+1]]);
		}
	}

	if(directionsLeft.length === 0){
		computerTurn();
		return;
	}

	// var randomPairing = Math.floor(Math.random()*100);

	pairingsCount = 0;

	for (var i = 1; i < directionsLeft.length; i++){
		if (eval(directionsLeft[i][0]).col === eval(directionsLeft[0][0]).col){
			++pairingsCount;
		}
	};

	randomPairingCount = Math.floor(Math.random()*pairingsCount);

	
	currentMoveThing1 = [eval(directionsLeft[randomPairingCount][0]).col, eval(directionsLeft[randomPairingCount][0]).row];
	currentMoveThing2 = [eval(directionsLeft[randomPairingCount][1]).col, eval(directionsLeft[randomPairingCount][1]).row];


	setTimeout(function (){
	if(teamTurn === 0){
		activateHex(currentMoveThing1[0],currentMoveThing1[1]);
 		activateHex((currentMoveThing1[0]-1),currentMoveThing1[1]);
	 };
	},1000);


		setTimeout(function (){
			if(teamTurn === 0){
				activateHex(currentMoveThing2[0],currentMoveThing2[1]);
		 		activateHex((currentMoveThing2[0]-1),currentMoveThing2[1]);
			 };
		},2000);


		setTimeout(function (){
			if(teamTurn === 0){
				activateHex((currentMoveThing1[0]-1),currentMoveThing1[1]);
		 		activateHex((currentMoveThing1[0]-2),currentMoveThing1[1]);
			 };
		},3000);

		setTimeout(function (){
			if(teamTurn === 0){
				activateHex((currentMoveThing2[0]-1),currentMoveThing2[1]);
		 		activateHex((currentMoveThing2[0]-2),currentMoveThing2[1]);
			 };
		},4000);

		setTimeout(function (){
				if(teamTurn === 0){
				computerTurn();
			 };
		},5000);

}

// THIS FUNCTION IS THE OTHER MAJOR AI STYLE OF PLAY, WHERE IT SENDS OUT ONLY ONE BEE TOWARDS AND OPPONENT.
function getToOneAway(majorThing){

	// debugger; 

		targetCol = eval(targetComputer[0]).col;
		targetRow = eval(targetComputer[0]).row;
		tempCol = eval(majorThing).col;
		tempRow = eval(majorThing).row;
		movesForComp = [[tempCol, tempRow]];

		checkedDistance = Math.abs(targetCol - tempCol) + Math.abs(targetRow - tempRow);

		while (checkedDistance > 1){
				
				if(Math.abs(tempCol - targetCol) > Math.abs(tempRow - targetRow)){
					if(tempCol < targetCol){
						if(runTester(targetCol, targetRow, tempCol, tempRow) === true){
							movesForComp.push([eval(sharedSpace).col, eval(sharedSpace).row]);
							checkedDistance = 1;
							break;
						};
						++tempCol; 
						movesForComp.push([tempCol, tempRow]);
		    		 	checkedDistance = Math.abs(targetCol - tempCol) + Math.abs(targetRow - tempRow);

					} else {
						if(runTester(targetCol, targetRow, tempCol, tempRow) === true){
							movesForComp.push([eval(sharedSpace).col, eval(sharedSpace).row]);
							checkedDistance = 1;
							break;
						};
						--tempCol;
						movesForComp.push([tempCol, tempRow]);
		    		 	checkedDistance = Math.abs(targetCol - tempCol) + Math.abs(targetRow - tempRow);

					}
				} else {
					if(tempRow < targetRow){
						if(runTester(targetCol, targetRow, tempCol, tempRow) === true){
							movesForComp.push([eval(sharedSpace).col, eval(sharedSpace).row]);
							checkedDistance = 1;
							break;
						};
						++tempRow;
						movesForComp.push([tempCol, tempRow]);
		    		 	checkedDistance = Math.abs(targetCol - tempCol) + Math.abs(targetRow - tempRow);

					} else {
						if(runTester(targetCol, targetRow, tempCol, tempRow) === true){
							movesForComp.push([eval(sharedSpace).col, eval(sharedSpace).row]);
							checkedDistance = 1;
							break;
						};
						--tempRow;
						movesForComp.push([tempCol, tempRow]);
		    		 	checkedDistance = Math.abs(targetCol - tempCol) + Math.abs(targetRow - tempRow);

					}
				}
			checkedDistance = Math.abs(targetCol - tempCol) + Math.abs(targetRow - tempRow);
			}
		
// THE FOLLOWING SETTIMEOUTS ARE IN PLACE TO SLOW DOWN THE AI ENOUGH FOR THE HUMAN PLAYER TO SEE WHERE THE AI MOVES EACH OF THEIR FOUR MOVES.
// UNFORTUNATELY, IF THE AI'S FIRST MOVE IS AN ATTACK, IT SEEMS A LITTLE SLOW (SINCE THE AI'S FIRST ATTACK HAS A FULL 5000 SET TIMEOUT)
		setTimeout(function (){
			if(movesForComp[1] !== undefined && teamTurn === 0){
				activateHex(movesForComp[0][0],movesForComp[0][1]);
		 		activateHex(movesForComp[1][0],movesForComp[1][1]);
			 };
		},1000);


		setTimeout(function (){
			if(movesForComp[2] !== undefined && teamTurn === 0){
				activateHex(movesForComp[1][0],movesForComp[1][1]);
		 		activateHex(movesForComp[2][0],movesForComp[2][1]);
			 } 
		},2000);


		setTimeout(function (){
			if(movesForComp[3] !== undefined && teamTurn === 0){
				activateHex(movesForComp[2][0],movesForComp[2][1]);
		 		activateHex(movesForComp[3][0],movesForComp[3][1]);
			 };
		},3000);

		setTimeout(function (){
				if(teamTurn === 0){
				document.getElementById(targetComputer[0] + "_color").className="hexagon color-10";
				activateHex(movesForComp[movesForComp.length-1][0],movesForComp[movesForComp.length-1][1]);
		 		activateHex(targetCol, targetRow);
			 };
		},4000);

		setTimeout(function (){
				if(teamTurn === 0){
				computerTurn();
			 };
		},5000);
}


function runTester(targetCol, targetRow, tempCol, tempRow){
	circleTarget = expandTheSearch(targetCol, targetRow);
	circleAttacker = expandTheSearch(tempCol, tempRow);
	sharedSpace = "";

	for (var i = 0; i < circleTarget.length; i++){
		for(var j = 0; j < circleAttacker.length; j++){
			if (circleTarget[i] === circleAttacker[j]){
				sharedSpace = circleTarget[i];
				return true;
			}
		}
	}

}

function expandTheSearch(crazy, lazy){
			// debugger;
			searchers = [];
			// hello = "col" + crazy + "_row" + lazy;
            upNumA = crazy+1;
            upNumB = lazy+1;
            downNumA = crazy-1;
            downNumB = lazy-1;
            spot1, spot2, spot3, spot4, spot5, spot6 = [];
          	wordSpot1, wordSpot2, wordSpot3, wordSpot4, wordSpot5, wordSpot6 = "";
          if (crazy % 2 === 0){
            spot5 = [downNumA, downNumB];
            spot4 = [upNumA, downNumB];
          } else {
            spot5 = [downNumA, upNumB];
            spot4 = [upNumA, upNumB];
          };
            spot1 = [crazy, downNumB]; // 
            spot2 = [crazy, upNumB];
            spot3 = [upNumA, lazy];
            spot6 = [downNumA, lazy];

            wordSpot1 = "col" + spot1[0].toString() + "_row" + spot1[1].toString();
            wordSpot2 = "col" + spot2[0].toString() + "_row" + spot2[1].toString();
            wordSpot3 = "col" + spot3[0].toString() + "_row" + spot3[1].toString();
            wordSpot4 = "col" + spot4[0].toString() + "_row" + spot4[1].toString();
            wordSpot5 = "col" + spot5[0].toString() + "_row" + spot5[1].toString();
            wordSpot6 = "col" + spot6[0].toString() + "_row" + spot6[1].toString();

            searchers.push(wordSpot1, wordSpot2, wordSpot3, wordSpot4, wordSpot5, wordSpot6);

            for (var i = 0; i < attackComputer.length; i++){
				for (var j = 0; j < searchers.length; j++){
					if (attackComputer[i] === searchers[j]){
						attackOrder.push(attackComputer[i]);
						victim.push(searchers[j]);

					}
				}
			}
			return searchers;

}

function toggleHidden(){

	if(teamTurn === 1){
		for (var i = 0; i < allListings.length; i++){
			if (eval(allListings[i]).color === 2 && eval(allListings[i]).hidden !== -1){
				eval(allListings[i]).hidden = 0;
			} else if (eval(allListings[i]).color === 3 && eval(allListings[i]).hidden !== -1){
				eval(allListings[i]).hidden = 1;
			}
		}
	 } 
	// else {
	// 	for (var i = 0; i < allListings.length; i++){
	// 		if (eval(allListings[i]).color === 3 && eval(allListings[i]).hidden !== -1){
	// 			eval(allListings[i]).hidden = 0;
	// 		} else if (eval(allListings[i]).color === 2 && eval(allListings[i]).hidden !== -1){
	// 			eval(allListings[i]).hidden = 1;
	// 		}
	// 	}
	// }
	//THE ABOVE CODE WAS LEFTOVER FROM WHEN I STARTED TO CODE THIS PROGRAM, I PLAYED AS BOTH THE AI AND THE HUMAN PLAYER, AND TOGGLED THE 'HIDDEN'
	// EACH TIME IT WAS THE OPPONENT'S TURN. NOW THAT IT'S ONLY A HUMAN VS. AI VERSION, I ELIMINATED THE HIDDEN TILES FEATURE.
}
function letterPoolReset(){
      poolListFinal = [];
      poolOfLetters = poolOfLetters.sort(function(a, b){return 0.5 - Math.random()});
      for (var i = 0; i < 6; i++){
        poolListFinal.push(poolOfLetters[i]);
        poolListBrown.push(poolOfLetters[i]);
        poolListGreen.push(poolOfLetters[i]);
      }
      var listOfVowels = ["A", "E", "I", "O", "U"];
      var vowelCheck = 0;

     for (var j = 0; j < poolListFinal.length; j++){
     	for (var i = 0; i < listOfVowels.length; i++){
     		if (poolListFinal[j] === listOfVowels[i]){
     			vowelCheck = 1;
     		}
     	}
     }

     if (vowelCheck === 0){
     	poolListFinal = [];
     	 poolOfLetters = poolOfLetters.sort(function(a, b){return 0.5 - Math.random()});
      for (var i = 0; i < 6; i++){
        poolListFinal.push(poolOfLetters[i]);
        poolListBrown.push(poolOfLetters[i]);
        poolListGreen.push(poolOfLetters[i]);
      }
     }


 	 turnCounter();      
  }

function inDecisionMove() {
	   errantClick();
}

function winMove(){
    eval(wordSpot0).color = thirdPartyStorage.color;
    eval(wordSpot0).letter = thirdPartyStorage.letter;
    eval(wordSpot0).number = thirdPartyStorage.number;
    eval(wordSpot0).askBlank = thirdPartyStorage.askBlank;
    eval(wordSpot0).hidden = -1;
    // eval(wordSpot0).attack = 1;
    // eval(wordSpot0).hidden = thirdPartyStorage.hidden;
    eval(eval(thirdPartyStorage).name).color = 1;
    eval(eval(thirdPartyStorage).name).letter = "";
    eval(eval(thirdPartyStorage).name).number = "";
    eval(eval(thirdPartyStorage).name).name = "";
    --currentMoves;
    checkQueenStatus();
    checkForTeamSwitch();
    letterPoolReset();
    turnCounter();
    errantClick(); 
}

function eraseMandos(){
	greenMandoLetter = [];
	brownMandoLetter = [];
	greenSupportLetters = [];
	brownSupportLetters = [];
	poolListGreen = [];
	poolListBrown = [];
}

function loseMove(){
	eval(wordSpot0).hidden = -1;
	eval(eval(thirdPartyStorage).name).color = 1;
    eval(eval(thirdPartyStorage).name).letter = "";
    eval(eval(thirdPartyStorage).name).number = "";
    eval(eval(thirdPartyStorage).name).name = "";
    checkQueenStatus();
	--currentMoves;
    checkForTeamSwitch();
    // eraseMandos();
    letterPoolReset();
    turnCounter();
    errantClick(); 
}

function makeHidden (){
	for (var i = 0; i < allListings.length; i++){
			if (eval(allListings[i]).hidden > -1 && eval(allListings[i]).color === 3){
				document.getElementById(allListings[i] + "_text").innerHTML = "<h1>&#x1f41d;</h1>";
			// } else if (eval(allListings[i]).hidden === 1 && eval(allListings[i]).color === 2){
			// 	document.getElementById(allListings[i] + "_text").innerHTML = "<h1 style = 'transform: scaleX(-1)'>&#x1f41d;</h1>"
			} else if (eval(allListings[i]).hidden === -1){
				document.getElementById(allListings[i] + "_text").innerHTML="<strong>" + eval(allListings[i]).letter + "</strong><small>" + eval(allListings[i]).number + "</small>";
			} 
		}

	


}

function flankReset(){
	for (var i = 0; i < allListings.length; i++){
		if (eval(allListings[i]).flank !== 0) {
			eval(allListings[i]).flank = 0;
		}
	}
}

function errantClick (){
	makeHidden();
	if (teamTurn === 0){
		document.getElementById("banner").className = "colorBrown";
        // console.log("Are we in here?");
        document.getElementById("bannerWord").innerHTML="BROWN'S TURN";
	} else {
		document.getElementById("banner").className = "colorGreen";
        // console.log("Are we in here?");
        document.getElementById("bannerWord").innerHTML="GREEN'S TURN";
	}
	 
  for (var i = 0; i < allListings.length; i++){
   eval(allListings[i]).activated = 0;
   document.getElementById(allListings[i]+"_color").className="hexagon color-" + eval(allListings[i]).color;
   document.getElementById(allListings[i]+"_text").innerHTML="<strong>" + eval(allListings[i]).letter + "</strong><small>" + eval(allListings[i]).number + "</small>";
   thirdPartyStorage = {color:0, letter:"", number:"", name:"", askBlank: 0, flank: 0, activated: 0, attack: 0, hidden: 0};
   billyClicker = 0;
   makeHidden();
   flankReset();
   checkBlank();
   timeToMoveOn = 0;

      }
    

}


function checkQueenStatus() {
	queenColor = [];
	for (var i = 0; i < allListings.length; i++){
		if(eval(allListings[i]).letter === "Q"){
			queenColor.push(eval(allListings[i]).color);
		}
	}
	if(queenColor.length < 2){
		if(queenColor[0] === 2){
			document.getElementById("banner").className = "colorYellow";
       		 // console.log("Anybody home?");
       		 document.getElementById("bannerWord").innerHTML="GREEN WINS! LONG LIVE THE QUEEN!";
			alert("GREEN WINS THE GAME! Your best word was " + personalBestWord + ", and your longest word was " + personalLongestWord + ". Hints used: " + hints);
			window.location.reload(true);
		} else {
			document.getElementById("banner").className = "colorBrown";
       		 // console.log("Anybody home?");
       		 document.getElementById("bannerWord").innerHTML="BROWN WINS! LONG LIVE THE QUEEN!";
			alert("BROWN WINS THE GAME! Your best word was " + personalBestWord + ", and your longest word was " + personalLongestWord  + ". Hints used: " + hints);
			window.location.reload(true);
		}
	}
}

function resetGame(){
	// THERE WAS SOME SORT OF GLITCH WITH MULTIPLE 'Q'S APPEARING IF RESETGAME() INSTEAD JUST TRIGGERED SETUPGAME(), SO WE JUST REFRESH THE PAGE ENTIRELY FOR A NEW GAME.
	window.location.reload(true);
}

function setupGame() {

	
		allWords = {};
		winner = 0;
		computerWord = "Placeholder";
		computerScore = 0;
		computerWordLen = 0;
		greenMandoLetter = "";
		brownMandoLetter = "";
		greenSupportLetters = [];
		brownSupportLetters = [];
		brownBlankTrigger = 0;
		greenBlankTrigger = 0;
		attacker = {};
		defender = {};
		k = 0;
		highestBrownBlankWord = "";
		highestBrownBlankScore = 0;
		commonLetters = [];
		randomizedLetter = 0;
		brownBlankCounter = 0;
		greenBlankCounter = 0;
		poolListBrownTest = [];
		poolListGreenTest = [];
		greenListNumbers = [];
		greenSpaced = [];
		queenNum = 0;
		queenColor = "";

		wordAttackFlank0 = "";
		attackFlank1, attackFlank2, attackFlank3, attackFlank4, attackFlank5, attackFlank6 = [];
		wordAttackFlank1, wordAttackFlank2, wordAttackFlank3, wordAttackFlank4, wordAttackFlank5, wordAttackFlank6 = "";

		poolListGreen = [];
		poolListBrown = [];
		poolListGreenFinal = [];
		poolListBrownFinal = [];
		brownSupportLocation = [];
		greenSupportLocation = [];
		winner = 0;
		winnerName = "";
		currentMoves = 4;
		billyClicker = 0;
		wordSpot0 = "";
		teamMarker = "Green";
		newTotal = 0;
		numberOfLettersGreen = 0;
		numberOfLettersBrown = 0;

		thirdPartyStorage = {color:0, letter:"", number:"", name:"", askBlank: 0, flank: 0, hidden: 0};
		nextMovesGreen = 4;
		nextMovesBrown = 4;
		teamTurn = 1;

		// THE FOLLOWING SECTION IS SEEDING THE BOARD IN TERMS OF BASIC STARTING COLORS (NO LETTERS YET)

		col11_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row2 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row2 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row14 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row2 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row12 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row3 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row13 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row4 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row5 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row6 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row7 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row9 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row10 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row11 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		  col14_row8 = {color: 1, letter: "", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0} 

		// OUTER ROW SPOTS, for blank creation

		//COLOR 3 = BROWNISH (RIGHT), COLOR 2 = GREEN (LEFT), COLOR 1 = YELLOW (NEUTRAL), COLOR 4 = CLICKABLES

		col10_row4 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row11 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row12 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row4 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row11 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row11 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row5 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row6 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row7 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row8 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row9 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row10 = {color:3, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0};

		col3_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row11 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row4 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row11 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row4 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row5 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row6 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row7 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row8 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row9 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row10 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row11 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row12 = {color:2, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0};


			col15_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row5 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row6 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row7 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row8 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row9 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row10 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		  col15_row11 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		  col15_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col15_row15 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row5 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row6 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row7 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row8 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		col1_row9 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row10 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row11 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col1_row15 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, 
		col2_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		col5_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col2_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col3_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		col4_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col4_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col5_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col6_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col7_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col8_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, 
		col14_row1 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row2 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row3 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row4 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col9_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col10_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col11_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col12_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0},
		col13_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col13_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row13 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row14 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0}, col14_row12 = {color:5, letter:"", number:"", activated:0, name:"", askBlank: 0, flank:0, attack: 0, hidden:0};

		col2_row5.col = 2, col2_row5.row = 5, col2_row6.col = 2, col2_row6.row = 6, col2_row7.col = 2, col2_row7.row = 7, col2_row8.col = 2, col2_row8.row = 8, col2_row9.col = 2, col2_row9.row = 9, col2_row10.col = 2, col2_row10.row = 10, col2_row11.col = 2, col2_row11.row = 11, col2_row12.col = 2, col2_row12.row = 12, col2_row13.col = 2, col2_row13.row = 13, col2_row14.col = 2, col2_row14.row = 14, col3_row2.col = 3, col3_row2.row = 2, col3_row3.col = 3, col3_row3.row = 3, col3_row4.col = 3, col3_row4.row = 4, col3_row5.col = 3, col3_row5.row = 5, col3_row6.col = 3, col3_row6.row = 6, col3_row7.col = 3, col3_row7.row = 7, col3_row8.col = 3, col3_row8.row = 8, col3_row9.col = 3, col3_row9.row = 9, col3_row10.col = 3, col3_row10.row = 10, col3_row11.col = 3, col3_row11.row = 11, col3_row12.col = 3, col3_row12.row = 12, col3_row13.col = 3, col3_row13.row = 13, col3_row14.col = 3, col3_row14.row = 14, col4_row2.col = 4, col4_row2.row = 2, col4_row3.col = 4, col4_row3.row = 3, col4_row4.col = 4, col4_row4.row = 4, col4_row5.col = 4, col4_row5.row = 5, col4_row6.col = 4, col4_row6.row = 6, col4_row7.col = 4, col4_row7.row = 7, col4_row8.col = 4, col4_row8.row = 8, col4_row9.col = 4, col4_row9.row = 9, col4_row10.col = 4, col4_row10.row = 10, col4_row11.col = 4, col4_row11.row = 11, col4_row12.col = 4, col4_row12.row = 12, col4_row13.col = 4, col4_row13.row = 13, col4_row14.col = 4, col4_row14.row = 14, col5_row2.col = 5, col5_row2.row = 2, col5_row3.col = 5, col5_row3.row = 3, col5_row4.col = 5, col5_row4.row = 4, col5_row5.col = 5, col5_row5.row = 5, col5_row6.col = 5, col5_row6.row = 6, col5_row7.col = 5, col5_row7.row = 7, col5_row8.col = 5, col5_row8.row = 8, col5_row9.col = 5, col5_row9.row = 9, col5_row10.col = 5, col5_row10.row = 10, col5_row11.col = 5, col5_row11.row = 11, col5_row12.col = 5, col5_row12.row = 12, col5_row13.col = 5, col5_row13.row = 13, col5_row14.col = 5, col5_row14.row = 14, col6_row2.col = 6, col6_row2.row = 2, col6_row3.col = 6, col6_row3.row = 3, col6_row4.col = 6, col6_row4.row = 4, col6_row5.col = 6, col6_row5.row = 5, col6_row6.col = 6, col6_row6.row = 6, col6_row7.col = 6, col6_row7.row = 7, col6_row8.col = 6, col6_row8.row = 8, col6_row9.col = 6, col6_row9.row = 9, col6_row10.col = 6, col6_row10.row = 10, col6_row11.col = 6, col6_row11.row = 11, col6_row12.col = 6, col6_row12.row = 12, col6_row13.col = 6, col6_row13.row = 13, col6_row14.col = 6, col6_row14.row = 14, col7_row2.col = 7, col7_row2.row = 2, col7_row3.col = 7, col7_row3.row = 3, col7_row4.col = 7, col7_row4.row = 4, col7_row5.col = 7, col7_row5.row = 5, col7_row6.col = 7, col7_row6.row = 6, col7_row7.col = 7, col7_row7.row = 7, col7_row8.col = 7, col7_row8.row = 8, col7_row9.col = 7, col7_row9.row = 9, col7_row10.col = 7, col7_row10.row = 10, col7_row11.col = 7, col7_row11.row = 11, col7_row12.col = 7, col7_row12.row = 12, col7_row13.col = 7, col7_row13.row = 13, col7_row14.col = 7, col7_row14.row = 14, col8_row2.col = 8, col8_row2.row = 2, col8_row3.col = 8, col8_row3.row = 3, col8_row4.col = 8, col8_row4.row = 4, col8_row5.col = 8, col8_row5.row = 5, col8_row6.col = 8, col8_row6.row = 6, col8_row7.col = 8, col8_row7.row = 7, col8_row8.col = 8, col8_row8.row = 8, col8_row9.col = 8, col8_row9.row = 9, col8_row10.col = 8, col8_row10.row = 10, col8_row11.col = 8, col8_row11.row = 11, col8_row12.col = 8, col8_row12.row = 12, col8_row13.col = 8, col8_row13.row = 13, col8_row14.col = 8, col8_row14.row = 14, col9_row2.col = 9, col9_row2.row = 2, col9_row3.col = 9, col9_row3.row = 3, col9_row4.col = 9, col9_row4.row = 4, col9_row5.col = 9, col9_row5.row = 5, col9_row6.col = 9, col9_row6.row = 6, col9_row7.col = 9, col9_row7.row = 7, col9_row8.col = 9, col9_row8.row = 8, col9_row9.col = 9, col9_row9.row = 9, col9_row10.col = 9, col9_row10.row = 10, col9_row11.col = 9, col9_row11.row = 11, col9_row12.col = 9, col9_row12.row = 12, col9_row13.col = 9, col9_row13.row = 13, col9_row14.col = 9, col9_row14.row = 14, col10_row2.col = 10, col10_row2.row = 2, col10_row3.col = 10, col10_row3.row = 3, col10_row4.col = 10, col10_row4.row = 4, col10_row5.col = 10, col10_row5.row = 5, col10_row6.col = 10, col10_row6.row = 6, col10_row7.col = 10, col10_row7.row = 7, col10_row8.col = 10, col10_row8.row = 8, col10_row9.col = 10, col10_row9.row = 9, col10_row10.col = 10, col10_row10.row = 10, col10_row11.col = 10, col10_row11.row = 11, col10_row12.col = 10, col10_row12.row = 12, col10_row13.col = 10, col10_row13.row = 13, col10_row14.col = 10, col10_row14.row = 14, col11_row2.col = 11, col11_row2.row = 2, col11_row3.col = 11, col11_row3.row = 3, col11_row4.col = 11, col11_row4.row = 4, col11_row5.col = 11, col11_row5.row = 5, col11_row6.col = 11, col11_row6.row = 6, col11_row7.col = 11, col11_row7.row = 7, col11_row8.col = 11, col11_row8.row = 8, col11_row9.col = 11, col11_row9.row = 9, col11_row10.col = 11, col11_row10.row = 10, col11_row11.col = 11, col11_row11.row = 11, col11_row12.col = 11, col11_row12.row = 12, col11_row13.col = 11, col11_row13.row = 13, col11_row14.col = 11, col11_row14.row = 14, col12_row2.col = 12, col12_row2.row = 2, col12_row3.col = 12, col12_row3.row = 3, col12_row4.col = 12, col12_row4.row = 4, col12_row5.col = 12, col12_row5.row = 5, col12_row6.col = 12, col12_row6.row = 6, col12_row7.col = 12, col12_row7.row = 7, col12_row8.col = 12, col12_row8.row = 8, col12_row9.col = 12, col12_row9.row = 9, col12_row10.col = 12, col12_row10.row = 10, col12_row11.col = 12, col12_row11.row = 11, col12_row12.col = 12, col12_row12.row = 12, col12_row13.col = 12, col12_row13.row = 13, col12_row14.col = 12, col12_row14.row = 14, col13_row2.col = 13, col13_row2.row = 2, col13_row3.col = 13, col13_row3.row = 3, col13_row4.col = 13, col13_row4.row = 4, col13_row5.col = 13, col13_row5.row = 5, col13_row6.col = 13, col13_row6.row = 6, col13_row7.col = 13, col13_row7.row = 7, col13_row8.col = 13, col13_row8.row = 8, col13_row9.col = 13, col13_row9.row = 9, col13_row10.col = 13, col13_row10.row = 10, col13_row11.col = 13, col13_row11.row = 11, col13_row12.col = 13, col13_row12.row = 12, col13_row13.col = 13, col13_row13.row = 13, col13_row14.col = 13, col13_row14.row = 14, col14_row2.col = 14, col14_row2.row = 2, col14_row3.col = 14, col14_row3.row = 3, col14_row4.col = 14, col14_row4.row = 4, col14_row5.col = 14, col14_row5.row = 5, col14_row6.col = 14, col14_row6.row = 6, col14_row7.col = 14, col14_row7.row = 7, col14_row8.col = 14, col14_row8.row = 8, col14_row9.col = 14, col14_row9.row = 9, col14_row10.col = 14, col14_row10.row = 10, col14_row11.col = 14, col14_row11.row = 11, col14_row12.col = 14, col14_row12.row = 12, col14_row13.col = 14, col14_row13.row = 13, col14_row14.col = 14, col14_row14.row = 14;
			
			// HERE, WE SHUFFLE THE LETTERS USED IN THE GAME TO ASSIGN EACH GREEN A LETTER (EXCEPT THE Q,U,I, WHICH ARE TREATED SEPARATELY)
			potentialLettersColor2 = potentialLettersColor2.sort(function(a, b){return 0.5 - Math.random()});

			// RANDOMIZING THE BACK 12 SPOTS, AKA, THE BACK TWO ROWS, SINCE THE Q AND HER PARTNERS, "I" AND "Q" WILL BE PURPOSEFULLY SPLICED RANDOMLY IN THAT AREA. 
			x = Math.floor(Math.random()*12);

			potentialLettersColor2.splice(x, 0, "I", "Q", "U");

			potentialLettersColor3 = potentialLettersColor3.sort(function(a, b){return 0.5 - Math.random()});

			poolOfLetters = poolOfLetters.sort(function(a, b){return 0.5 - Math.random()});

			for (var i = 0; i < 6; i++){
			  poolListFinal.push(poolOfLetters[i]);
			}

			y = Math.floor(Math.random()*13)+17;

			potentialLettersColor3.splice(y, 0, "I", "Q", "U");

		// ATTACHING THE LETTERS (AND THEIR CORRESPONDING VALUES) TO THE RANDOMLY ASSIGNED SPOTS.
		  for (var i = 0; i < 30; i++){
		  document.getElementById(color2[i] + "_text").innerHTML="<strong>" + potentialLettersColor2[i] + "</strong><small>" + wordValues[potentialLettersColor2[i]] + "</small>";
		  eval(color2[i]).letter = potentialLettersColor2[i];
		  eval(color2[i]).number = wordValues[potentialLettersColor2[i]];
		  eval(color2[i]).name = color2[i];

		  document.getElementById(color3[i] + "_text").innerHTML="<strong>" + potentialLettersColor3[i] + "</strong><small>" + wordValues[potentialLettersColor3[i]] + "</small>";
		  eval(color3[i]).letter = potentialLettersColor3[i];
		  eval(color3[i]).number = wordValues[potentialLettersColor3[i]];
		  eval(color3[i]).name = color3[i];
		  }
		  turnCounter();
		  toggleHidden(); 
		  makeHidden(); 

}

// THIS FUNCTION WAS EVENTUALLY SCRAPPED -- IT WOULD SCROLL THE WINDOW SO THAT ONLY THE TOP TEAM BANNER, "GREEN'S TURN" WOULD BE VISIBLE, SO THAT MORE
// OF THE HEX WOULD BE VISIBLE ... BUT UPON MORE TESTING OF DIFFERENT BROWSERS AND OPERATING SYSTEMS, THE VARIATION WAS TOO GREAT TO FORCE A SCROLL ON 
// EVERY CLICK, SO IT WAS ABANDONED. 
function scroller(){
	// window.scrollTo( 0, 150);
}

// SETTING UP THE TWO BUZZ AUDIO SOUND EFFECTS
 document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
    setupGame();
    document.getElementById("audioShort").load();
    document.getElementById("audioLong").load();
    // console.log("And the game setup.");
  });

window.onload = function() {

   
 }