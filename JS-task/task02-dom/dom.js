/**
    * ### 2. Feladat
- A dom.js fájlban talál egy függvényt `changeElements` néven.
- A következőképpen kell működnie a függvénynek:
- megkeres az oldalon minden `example` osztályba tartozó elemet és két stílust 
állít be rájuk JAVASCRIPT segítségével: háttérszín `red` és font stílus `italic`.
*/

function changeElements() {
    const examples = document.querySelectorAll('.example');
    for (let i = 0; i < examples.length; i++) {
        examples[i].style.backgroundColor = 'red';
        examples[i].style.fontStyle = 'italic';
    }

    /*
    document.querySelectorAll('.example').forEach( e => {
        e.style.backgroundColor = 'red';
        e.style.fontStyle = 'italic';
    });
    */

    /*
    document.querySelectorAll('.example').forEach( example => {     
        example.style.backgroundColor = 'red';
        example.style.fontStyle = 'italic';
    });
     */
}


export { changeElements };

//////////////////////////////////////////////////
// MÁSIK Feladat
// Van egy users tömbünk amiben userek vannak
// Mindenegyes usernek van egy id-je, van egy neve, és egy emailcime.
// Feladat, járjuk be a users tömb elemeit és az emailcímeket módositsuk úgy. 
// a usereknél a @ előtti rész legyen  user neve kisbetűvel .
const users = [
    {
        id: 1,
        name: 'Jack',
        email: 'j@j.com'
    },
    {
     id: 2,
     name: 'Joe',
     email: 'j@j.com'
    }
  ];
  
  // El kell érni az objektumok propertyeit for of ciklussal
  // for (let user of users) {
  //    user.email = (user.name + '@j.com').toLowerCase();
  //}
  
  // Ha többféle emailcim végződés van akkor el kell vágni a @-nál split -tel,
  // akkor egy olyan tömb lesz aminek 2 eleme lesz. 
  // Az egyik a @ előtti rész, a másik a @ utáni rész. A @ kiesik, az nem lesz a tömbben.
  // ['j', 'j.com'].pop() === 'j.com'
  // A pop leveszi a tömb utolsó elemét és azzal tér vissza.
  for (let user of users) {
     user.email = `${user.name}@${user.email.split('@').pop()}`.toLowerCase();
  }
  // vagy a .pop()  helyett vehetjük a tömb 2.ik elemét  [1]
  
  console.log(users);