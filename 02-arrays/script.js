const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(`Esercizio 1: ${reversedTeachers}`);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 1; i < teachers.length; i++){
  if (teachers[i].length >= 5){
    longNames.push(teachers[i])
  }
}

console.log(`Esercizio 2: ${longNames}`);

// 3. Rimuovi 'Ed' dall'array teachers

const edName = teachers.indexOf("Ed");
teachers.splice(edName, 1);
console.log(`Esercizio 3: ${teachers}`);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf("Fabio") !== -1;
console.log(`Esercizio 4: ${isFabioPresent}`)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");
console.log(teachersString)