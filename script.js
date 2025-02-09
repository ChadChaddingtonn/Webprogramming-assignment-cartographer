// #region Mission objects and elements

const missions = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
    }
  ],
  "extra": [
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
    }
  ],
}

const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]

// #endregion

// #region Creating the map and fucntion to change a grid's background

let timeLeft = 28;

let mapValues = new Array(11).fill(0).map(() => new Array(11).fill(0));
mapValues[1][1] = 1;
mapValues[3][8] = 1;
mapValues[5][4] = 1;
mapValues[8][9] = 1;
mapValues[9][5] = 1;

const elementIDS = {
  'water': 2,
  'forest': 3,
  'town': 4,
  'farm': 5,
}

const seasons = ['Tavasz', 'Nyár', 'Ősz', 'Tél'];
const missionsforseason = ['AB', 'BC', 'CD', 'AD'];
let pointsPerMission = [0, 0, 0, 0];

document.addEventListener('DOMContentLoaded', function () {
  const map = document.getElementById('map');

  // Létrehozunk egy 11x11-es négyzetrácsot
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      const cell = document.createElement('div');
      cell.setAttribute('id', i * 11 + j);
      cell.classList.add('cell');

      // Ellenőrizzük, hogy a cella egy hegycella-e
      if ((i === 1 && j === 1) || (i === 3 && j === 8) || (i === 5 && j === 4) || (i === 8 && j === 9) || (i === 9 && j === 5)) {
          cell.classList.add('mountain');
      }

      map.appendChild(cell);
    }
  }
  showNextBlock();
});

function changeBackground(id, type = null, hover = false){
  if (isNaN(id)) return;
  const cell = document.getElementById(id);
  cell.classList.remove('water', 'forest', 'town', 'farm', 'mountain', 'hover');
  if (type != null) cell.classList.add(type);
  if (hover) cell.classList.add('hover');
}

// #endregion

// #region Show Block functions and shuffle the deck

let shuffledDeck = [...elements].sort(() => 0.5 - Math.random());

const nextBlockDiv = document.getElementById('currentBlock');
const timeDiv = document.getElementById('timeValue');
var nextBlock;
var shape;

function showNextBlock(){
  nextBlock = shuffledDeck.shift();
  nextBlockDiv.innerHTML = '';

  showCurrentBlock();
  
  timeDiv.innerHTML = nextBlock.time + '🕒';
}

function showCurrentBlock() {
  for (let i = 0; i < nextBlock.shape.length; i++){
    for (let j = 0; j < nextBlock.shape[i].length; j++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (nextBlock.shape[i][j] === 1){
        cell.classList.add(nextBlock.type);
      }
      nextBlockDiv.appendChild(cell);
    }
  }

  shape = [...nextBlock.shape].map(e => e.every(x => x === 0) ? null : e).filter(e => e != null);
  if (![...shape].map(x => x[2]).includes(1)) shape = shape.map(e => {e[2] = null; return e.filter(x => x != null);});
  if (![...shape].map(x => x[0]).includes(1)) shape = shape.map(e => {e[0] = null; return e.filter(x => x != null);});
  shape = shape.filter(e => !e.every(x => x == null));
}

// #endregion

// #region Block button functions

const rotateButton = document.getElementById('rotateButton');
const mirrorButton = document.getElementById('mirrorButton');

function rotateBlock() {
  nextBlock.shape = changeRowCol(nextBlock.shape).map(row => row.reverse())

  nextBlock.rotation = (nextBlock.rotation + 1) % 4;
  nextBlockDiv.innerHTML = '';
  
  showCurrentBlock();
}

function mirrorBlock() {
  nextBlock.shape = nextBlock.shape.map(row => row.reverse());

  nextBlock.mirrored = !nextBlock.mirrored;
  nextBlockDiv.innerHTML = '';
  
  showCurrentBlock();
}

rotateButton.addEventListener('click', rotateBlock);
mirrorButton.addEventListener('click', mirrorBlock);

// #endregion

//#region Point elements and functions

let pointsInTotal = 0;

const springPoints = document.getElementById('tavaszpont');
const summerPoints = document.getElementById('nyarpont');
const autumnPoints = document.getElementById('oszpont');
const winterPoints = document.getElementById('telpont');
const totalPoints = document.getElementById('osszpont');

springPoints.innerHTML = '0 pont';
summerPoints.innerHTML = '0 pont';
autumnPoints.innerHTML = '0 pont';
winterPoints.innerHTML = '0 pont';
totalPoints.innerHTML = 'Összesen: 0 pont';


function changePoint(season, points){
  if (season == 'tavasz'){
    springPoints.innerHTML = `${points} pont`;
  }
  else if (season == 'nyar'){
    summerPoints.innerHTML = `${points} pont`;
  }
  else if (season == 'osz'){
    autumnPoints.innerHTML = `${points} pont`;
  }
  else {
    winterPoints.innerHTML = `${points} pont`;
  }
  pointsInTotal += points;
  totalPoints.innerHTML = `Összesen: ${pointsInTotal} pont`;
}

// #endregion

// #region Event listeners for the map and function to place the block

const allCells = document.querySelector('#map');
var changedCells = [];

allCells.addEventListener('mouseover', elem => {
  if (timeLeft <= 0) return;
  changedCells = [];
  currentID = parseInt(elem.target.id);

  if (!canPlace(elem)){
    return;
  }

  for (let i = 0; i < shape.length; i++){
    for (let j = 0; j < shape[i].length; j++){
      if (shape[i][j] === 1){
        id = currentID - ((shape[0].length - 1) - j) + 11 * i;
        if (document.getElementById(id).classList != 'cell') { changedCells = []; return; }
        changedCells.push(id);
      }
    }
  }

  changedCells.forEach(e => {
    changeBackground(e, nextBlock.type, true);
  });
});

allCells.addEventListener('mouseout', () => {
  if (timeLeft <= 0) return;
  changedCells.forEach(e => {
    changeBackground(e);
  });
});

allCells.addEventListener('click', elem => {
  if (canPlace(elem) && changedCells.length != 0) placeBlock();
  if (timeLeft <= 0) {
    nextBlockDiv.innerHTML = '';
    timeDiv.innerHTML = '';
    return;
  }
});

function placeBlock() {
  changedCells.forEach(e => {
    changeBackground(e, nextBlock.type);
    mapValues[Math.floor(e / 11)][e % 11] = elementIDS[nextBlock.type];
  });
  changedCells = [];
  changeTimeLeft(nextBlock.time);
  showNextBlock();
}

// #endregion

// #region Season elements

const seasonTimeLeft = document.getElementById('hatralevoido');
const currentSeason = document.getElementById('evszak');
seasonTimeLeft.innerHTML = `Évszakból hátralévő idő: ${timeLeft % 7 == 0 ? 7 : timeLeft % 7}/7`;
currentSeason.innerHTML = `Jelenlegi évszak: ${seasons[0]} (${missionsforseason[0]})`;

// #endregion

// #region Random missions and mission divs

const randomMissions = ([...Array(missions['basic'].length + missions['extra'].length).keys()].map(e => e + 1)).sort(() => 0.5 - Math.random()).slice(0, 4);
const missionsDiv = {
  'A': document.getElementById('amission'),
  'B': document.getElementById('bmission'),
  'C': document.getElementById('cmission'),
  'D': document.getElementById('dmission')
};


const aimg = document.createElement('img');
aimg.src = `assets/missions/mission${randomMissions[0]}.png`;
missionsDiv['A'].appendChild(aimg);
const aMissionDiv = document.createElement('div');
aMissionDiv.classList.add('mission');
missionsDiv['A'].appendChild(aMissionDiv);
const aMissionPt = document.createElement('div');
aMissionPt.classList.add('missionPoints');
aMissionPt.innerHTML = '(0 pont)';
missionsDiv['A'].appendChild(aMissionPt);

const bimg = document.createElement('img');
bimg.src = `assets/missions/mission${randomMissions[1]}.png`;
missionsDiv['B'].appendChild(bimg);
const bMissionDiv = document.createElement('div');
bMissionDiv.classList.add('mission');
missionsDiv['B'].appendChild(bMissionDiv);
const bMissionPt = document.createElement('div');
bMissionPt.classList.add('missionPoints');
bMissionPt.innerHTML = '(0 pont)';
missionsDiv['B'].appendChild(bMissionPt);

const cimg = document.createElement('img');
cimg.src = `assets/missions/mission${randomMissions[2]}.png`;
missionsDiv['C'].appendChild(cimg);
const cMissionDiv = document.createElement('div');
cMissionDiv.classList.add('mission');
missionsDiv['C'].appendChild(cMissionDiv);
const cMissionPt = document.createElement('div');
cMissionPt.classList.add('missionPoints');
cMissionPt.innerHTML = '(0 pont)';
missionsDiv['C'].appendChild(cMissionPt);

const dimg = document.createElement('img');
dimg.src = `assets/missions/mission${randomMissions[3]}.png`;
missionsDiv['D'].appendChild(dimg);
const dMissionDiv = document.createElement('div');
dMissionDiv.classList.add('mission');
missionsDiv['D'].appendChild(dMissionDiv);
const dMissionPt = document.createElement('div');
dMissionPt.classList.add('missionPoints');
dMissionPt.innerHTML = '(0 pont)';
missionsDiv['D'].appendChild(dMissionPt);

// #endregion

// #region Change texts for missions

const missionTexts = document.querySelectorAll('.mission');
const missionPoints = document.querySelectorAll('.missionPoints');

function changeMissionText(circle = true) {
  if (circle) _temp = 3 - Math.floor((timeLeft - 1) / 7);
  for (let i = 0; i < missionTexts.length; i++){
    missionTexts[i].innerHTML = '';
    if (circle && (
      i == Object.keys(missionsDiv).findIndex(e => e == missionsforseason[_temp][0]) ||
      i == Object.keys(missionsDiv).findIndex(e => e == missionsforseason[_temp][1]))){
      missionTexts[i].innerHTML = '🟢';
    }
    missionTexts[i].innerHTML += `${Object.keys(missionsDiv)[i]}`;
  }
}

changeMissionText();

function changeTimeLeft(time) {
  timeLeft -= time;
  if (timeLeft <= 0) {
    point = calculateMissionPoints(Object.keys(missionsDiv).indexOf(missionsforseason[3][0]));
    point += calculateMissionPoints(Object.keys(missionsDiv).indexOf(missionsforseason[3][1]));
    numOfSurrMountains = surroundedMountains();
    point += numOfSurrMountains - mountainPoints;
    mountainPoints = numOfSurrMountains;
    changePoint(seasons[3].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""), point);
    changeMissionText(false);
    currentSeason.innerHTML = 'Vége van a játéknak!'
    seasonTimeLeft.innerHTML = 'Vége van a játéknak!';
    window.alert('Vége a játéknak!' + `\nÖsszesen ${pointsInTotal} pontot értél el!`);
    nextBlockDiv.innerHTML = '';
    timeDiv.innerHTML = '';
    return;
  }

  seasonTimeLeft.innerHTML = `Évszakból hátralévő idő: ${timeLeft % 7 == 0 ? 7 : timeLeft % 7}/7`;
  if (timeLeft > 0 && (timeLeft % 7 == 0 || (timeLeft % 7 == 6 && time == 2))) {
    const temp = 3 - Math.floor((timeLeft - 1) / 7);
    currentSeason.innerHTML = `Jelenlegi évszak: ${seasons[temp]} (${missionsforseason[temp]})`;
    shuffledDeck = [...elements].sort(() => 0.5 - Math.random());

    point = calculateMissionPoints(Object.keys(missionsDiv).indexOf(missionsforseason[temp - 1][0]));
    point += calculateMissionPoints(Object.keys(missionsDiv).indexOf(missionsforseason[temp - 1][1]));
    numOfSurrMountains = surroundedMountains();
    point += numOfSurrMountains - mountainPoints;
    mountainPoints = numOfSurrMountains;
    changePoint(seasons[temp - 1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""), point);

    changeMissionText();
  }
}

// #endregion

// #region Help functions

function canPlace(cell) {
  if ((shape.map(x => x[0]).includes(1) && cell.target.id % 11 == 0) ||
  (shape.map(x => x[1]).includes(1) && shape.map(x => x[2]).includes(1) && cell.target.id % 11 == 1) ||
  (shape.length == 2 && Math.floor(cell.target.id / 11) == 10) ||
  (shape.length == 3 && Math.floor(cell.target.id / 11) >= 9) ||
  (isNaN(parseInt(cell.target.id)))){
    return false;
  }
  return true;
}

const changeRowCol = matrix => matrix[0].map((_, i) => matrix.map(row => row[i]));

// #endregion

// #region Mission point calculation

const erdoszeleMission = function() {
  points = 0;

  for (let i = 0; i < mapValues[0].length; i++){
    if (mapValues[0][i] == 3) points++;
    if (mapValues[10][i] == 3) points++;
  }
  for (let i = 1; i < mapValues.length - 1; i++){
    if (mapValues[i][0] == 3) points++;
    if (mapValues[i][10] == 3) points++;
  }

  return points;
}

const almosvolgyMission = function() {
  points = 0;

  mapValues.forEach(e => {
    e.filter(x => x == 3).length == 3 ? points += 4 : null;
  });

  return points;
}

const krumpliontozesMission = function() {
  points = 0;

  mapValues.forEach((e, row) => {
    e.forEach((x, col) => {
      if (x == 2){
        switch (row) {
          case 0:
            switch (col){
              case 0:
                if (mapValues[row][col + 1] == 5) { points += 2; break; }
                if (mapValues[row + 1][col] == 5) { points += 2; break; }
                break;
              case 10:
                if (mapValues[row][col - 1] == 5) { points += 2; break; }
                if (mapValues[row + 1][col] == 5) { points += 2; break; }
                break;
              default:
                if (mapValues[row][col + 1] == 5) { points += 2; break; }
                if (mapValues[row][col - 1] == 5) { points += 2; break; }
                if (mapValues[row + 1][col] == 5) { points += 2; break; }
                break;
            }
            break;
          case 10:
            switch (col){
              case 0:
                if (mapValues[row][col + 1] == 5) { points += 2; break; }
                if (mapValues[row - 1][col] == 5) { points += 2; break; }
                break;
              case 10:
                if (mapValues[row][col - 1] == 5) { points += 2; break; }
                if (mapValues[row - 1][col] == 5) { points += 2; break; }
                break;
              default:
                if (mapValues[row][col + 1] == 5) { points += 2; break; }
                if (mapValues[row][col - 1] == 5) { points += 2; break; }
                if (mapValues[row - 1][col] == 5) { points += 2; break; }
                break;
              }
            break;
          default:
          switch (col){
            case 0:
              if (mapValues[row][col + 1] == 5) { points += 2; break; }
              if (mapValues[row + 1][col] == 5) { points += 2; break; }
              if (mapValues[row - 1][col] == 5) { points += 2; break; }
              break;
            case 10:
              if (mapValues[row][col - 1] == 5) { points += 2; break; }
              if (mapValues[row + 1][col] == 5) { points += 2; break; }
              if (mapValues[row - 1][col] == 5) { points += 2; break; }
              break;
            default:
              if (mapValues[row][col + 1] == 5) { points += 2; break; }
              if (mapValues[row][col - 1] == 5) { points += 2; break; }
              if (mapValues[row + 1][col] == 5) { points += 2; break; }
              if (mapValues[row - 1][col] == 5) { points += 2; break; }
              break;
            }
            break;
        }
      }
    });
  });

  return points;
}

const hatarvidekMission = function() {
  points = 0;
  rotatedMap = changeRowCol(mapValues);

  mapValues.forEach(e => {
    if (!e.some(x => x == 0)) points += 6;
  });

  rotatedMap.forEach(e => {
    if (!e.some(x => x == 0)) points += 6;
  });

  return points;
}

const fasorMission = function() {
  points = 0;
  rotatedMap = changeRowCol(mapValues);
  longestLine = 0;

  rotatedMap.forEach(e => {
    currLen = 0;
    for (let i = 0; i < e.length; i++){
      if (e[i] == 3) currLen++;
      else {
        if (currLen > longestLine) longestLine = currLen;
        currLen = 0;
      }
    }
    if (currLen > longestLine) longestLine = currLen;
  });

  return longestLine * 2;
}

const gazdagvarosMission = function() {
  points = 0;

  mapValues.forEach((e, row) => {
    e.forEach((val, col) => {
      neighbors = [0, 0, 0, 0, 0];
      if (val == 4) {
        switch (row) {
          case 0:
            switch (col){
              case 0:
                neighbors[mapValues[row][col + 1] - 1] = 1;
                neighbors[mapValues[row + 1][col] - 1] = 1;
                break;
              case 10:
                neighbors[mapValues[row][col - 1] - 1] = 1;
                neighbors[mapValues[row + 1][col] - 1] = 1;
                break;
              default:
                neighbors[mapValues[row][col + 1] - 1] = 1;
                neighbors[mapValues[row][col - 1] - 1] = 1;
                neighbors[mapValues[row + 1][col] - 1] = 1;
                break;
            }
            break;
          case 10:
            switch (col){
              case 0:
                neighbors[mapValues[row][col + 1] - 1] = 1;
                neighbors[mapValues[row - 1][col] - 1] = 1;
                break;
              case 10:
                neighbors[mapValues[row][col - 1] - 1] = 1;
                neighbors[mapValues[row - 1][col] - 1] = 1;
                break;
              default:
                neighbors[mapValues[row][col + 1] - 1] = 1;
                neighbors[mapValues[row][col - 1] - 1] = 1;
                neighbors[mapValues[row - 1][col] - 1] = 1;
                break;
              }
            break;
          default:
          switch (col){
            case 0:
              neighbors[mapValues[row][col + 1] - 1] = 1;
              neighbors[mapValues[row + 1][col] - 1] = 1;
              neighbors[mapValues[row - 1][col] - 1] = 1;
              break;
            case 10:
              neighbors[mapValues[row][col - 1] - 1] = 1;
              neighbors[mapValues[row + 1][col] - 1] = 1;
              neighbors[mapValues[row - 1][col] - 1] = 1;
              break;
            default:
              neighbors[mapValues[row][col + 1] - 1] = 1;
              neighbors[mapValues[row][col - 1] - 1] = 1;
              neighbors[mapValues[row + 1][col] - 1] = 1;
              neighbors[mapValues[row - 1][col] - 1] = 1;
              break;
            }
            break;
        }
      }
      points += neighbors.filter(x => x == 1).length == 3 ? 3 : 0;
    });
  });

  return points;
}

const ontozocsatornaMission = function() {
  points = 0;
  rotatedMap = changeRowCol(mapValues);

  rotatedMap.forEach(e => {
    if (e.filter(x => x == 5).length == e.filter(x => x == 2).length && e.filter(x => x == 5) != 0) points += 4;
  });
  
  return points;
}

const magusokvolgyeMission = function() {
  points = 0;
  
  mapValues.forEach((e, row) => {
    e.forEach((val, col) => {
      if (val == 1){
        if (mapValues[row + 1][col] == 2) points += 3;
        if (mapValues[row - 1][col] == 2) points += 3;
        if (mapValues[row][col + 1] == 2) points += 3;
        if (mapValues[row][col - 1] == 2) points += 3;
      }
    });
  });

  return points;
}

const urestelekMission = function() {
  points = 0;

  mapValues.forEach((e, row) => {
    e.forEach((val, col) => {
      if (val == 0) {
        switch (row) {
          case 0:
            switch (col){
              case 0:
                if (mapValues[row][col + 1] == 4) { points += 2; break; }
                if (mapValues[row + 1][col] == 4) { points += 2; break; }
                break;
              case 10:
                if (mapValues[row][col - 1] == 4) { points += 2; break; }
                if (mapValues[row + 1][col] == 4) { points += 2; break; }
                break;
              default:
                if (mapValues[row][col + 1] == 4) { points += 2; break; }
                if (mapValues[row][col - 1] == 4) { points += 2; break; }
                if (mapValues[row + 1][col] == 4) { points += 2; break; }
                break;
            }
            break;
          case 10:
            switch (col){
              case 0:
                if (mapValues[row][col + 1] == 4) { points += 2; break; }
                if (mapValues[row - 1][col] == 4) { points += 2; break; }
                break;
              case 10:
                if (mapValues[row][col - 1] == 4) { points += 2; break; }
                if (mapValues[row - 1][col] == 4) { points += 2; break; }
                break;
              default:
                if (mapValues[row][col + 1] == 4) { points += 2; break; }
                if (mapValues[row][col - 1] == 4) { points += 2; break; }
                if (mapValues[row - 1][col] == 4) { points += 2; break; }
                break;
              }
            break;
          default:
          switch (col){
            case 0:
              if (mapValues[row][col + 1] == 4) { points += 2; break; }
              if (mapValues[row + 1][col] == 4) { points += 2; break; }
              if (mapValues[row - 1][col] == 4) { points += 2; break; }
              break;
            case 10:
              if (mapValues[row][col - 1] == 4) { points += 2; break; }
              if (mapValues[row + 1][col] == 4) { points += 2; break; }
              if (mapValues[row - 1][col] == 4) { points += 2; break; }
              break;
            default:
              if (mapValues[row][col + 1] == 4) { points += 2; break; }
              if (mapValues[row][col - 1] == 4) { points += 2; break; }
              if (mapValues[row + 1][col] == 4) { points += 2; break; }
              if (mapValues[row - 1][col] == 4) { points += 2; break; }
              break;
            }
            break;
        }
      }
    });
  });

  return points;
}

const sorhazMission = function() {
  points = 0;
  
  maxLengthForRow = new Array(11).fill(0);

  mapValues.forEach((e, row) => {
    currentLen = 0;
    for (let i = 0; i < e.length; i++){
      if (e[i] == 4) currentLen++;
      else {
        if (currentLen > maxLengthForRow[row]) maxLengthForRow[row] = currentLen;
        currentLen = 0;
      }
    }
    if (currentLen > maxLengthForRow[row]) maxLengthForRow[row] = currentLen;
  });

  maxLength = Math.max(...maxLengthForRow);
  points = (maxLengthForRow.filter(x => x == maxLength).length) * maxLength * 2;

  return points;
}

const paratlansilokMission = function() {
  points = 0;
  rotatedMap = changeRowCol(mapValues);

  rotatedMap.forEach((e, col) => {
    if (col % 2 == 0 && !e.some(x => x == 0)) points += 10;
  });

  return points;
}

const gazdagvidekMission = function() {
  points = 0;

  mapValues.forEach(e => {
    rowValues = new Array(5).fill(0);
    for (let i = 0; i < e.length; i++){
      if (e[i] != 0) rowValues[e[i] - 1]++;
    }
    if (!rowValues.some(x => x == 0)) points += 4;
  });

  return points;
}

const missionFunctions = [
  erdoszeleMission,
  almosvolgyMission,
  krumpliontozesMission,
  hatarvidekMission,
  fasorMission,
  gazdagvarosMission,
  ontozocsatornaMission,
  magusokvolgyeMission,
  urestelekMission,
  sorhazMission,
  paratlansilokMission,
  gazdagvidekMission
];

function calculateMissionPoints(id){
  pointsPerMission[id] += missionFunctions[randomMissions[id] - 1]();
  missionPoints[id].innerHTML = `(${pointsPerMission[id]} pont)`;

  return points;
}

let mountainPoints = 0;

function surroundedMountains() {
  surrmountains = 0;
  mapValues.forEach((e, row) => {
    neighborCells = 0;
    e.forEach((val, col) => {
      if (val == 1) {
        if (row < 10 && mapValues[row + 1][col] != 0) neighborCells++;
        if (row > 0 && mapValues[row - 1][col] != 0) neighborCells++;
        if (col < 10 && mapValues[row][col + 1] != 0) neighborCells++;
        if (col > 0 && mapValues[row][col - 1] != 0) neighborCells++;
        
        if (((row == 10 || row == 0) && neighborCells == 3) ||
        ((col == 10 || col == 0) && neighborCells == 3) || 
        (row == 0 && (col == 0 || col == 10)) && neighborCells == 2 ||
        (row == 10 && (col == 0 || col == 10)) && neighborCells == 2 ||
        neighborCells == 4) surrmountains++;
      }
    });
  });
  return surrmountains;
}

// #endregion