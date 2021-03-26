function getRnd(min, max){

  const Max = max - min + 1;

  let rnd = parseInt(Math.floor(Math.random() * Max) + min);
  return rnd;
}

function es1() {

  // Creare un array di oggetti: ogni oggetto descriverà 
  // una bici da corsa con le seguenti proprietà: nome e peso. 
  // Stampare a schermo la bici con peso minore.

 const Bikes = [

  {'name' : 'bike1', 'weight' : 2},
  {'name' : 'bike2', 'weight' : 8},
  {'name' : 'bike3', 'weight' : 5}

 ]

 let smallWeight = Number.MAX_SAFE_INTEGER;

 for (let i = 0; i < Bikes.length; i++) {

  const Bike = Bikes[i];

  let {weight} = Bike;

  if (weight < smallWeight) {

    smallWeight = weight;
  }
 }
 
 console.log(smallWeight);
}

function es2() {

  // Creare un array di oggetti di squadre di calcio. 
  // Ogni squadra avrà diverse proprietà: 
  // nome, punti fatti, falli subiti.
  // Nome sarà l'unica proprietà da compilare, 
  // le altre saranno tutte settate a 0.

  const Clubs = [

    {'name' : 'Inter', 'score' : 0, 'fouls' : 0},
    {'name' : 'Milan', 'score' : 0, 'fouls' : 0},
    {'name' : 'Juventus', 'score' : 0, 'fouls' : 0},
    {'name' : 'Roma', 'score' : 0, 'fouls' : 0},
    {'name' : 'Napoli', 'score' : 0, 'fouls' : 0}

   ]

   const NewClubs = [];

  // Generare numeri random al posto degli 0 nelle proprietà:
  // punti fatti e falli subiti

  for (let i = 0; i < Clubs.length; i++) {

    const Club = Clubs[i];

    Club['score'] = getRnd(0, 114);
    Club['fouls'] = getRnd(300, 700);

    // Usando la destrutturazione creiamo un nuovo array 
    // i cui elementi contengono solo nomi e falli subiti 
    // e stampiamo tutto in console.

    let {name, fouls} = Club;

    NewClubs.push({name, fouls});
  }

  console.log(Clubs);
  console.log(NewClubs);
}

function init() {

  // es1()
  es2();
}

$(document).ready(init);