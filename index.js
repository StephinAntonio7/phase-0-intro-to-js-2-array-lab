// index.js
const cats = ["Milo", "Otis", "Garfield"];
// index.js
// ... (existing code)

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  // index.js
// ... (existing code)

function destructivelyRemoveLastCat() {
    cats.pop();
  }
  // index.js
// ... (existing code)

function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  // index.js
// ... (existing code)

function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  // ... (remaining code)
  // index.js
// ... (existing code)

function appendCat(name) {
    newCats = [...cats, name];
    return newCats;
  }
  
  // ... (remaining code)
// index.js
// ... (existing code)

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  
  // ... (remaining code)
  // index.js
// ... (existing code)

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
  
  // ... (remaining code)
  // index.js
// ... (existing code)

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  
  // ... (remaining code)
  // index.js
// ... (existing code)

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
  
  // ... (remaining code)