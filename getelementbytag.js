// Select the element or group of element the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
//HtmlCollection = array-like object
// index, length property but not array methods(forEach)

//querySelectorAll() in most cases
// NodeList - objects are collection of nodes
// can run forEach
// turn them into array - spread operator[...]
// after that can use any array properties

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange'

const betteritems = [...items]

betteritems.forEach(function(item){
    console.log(item);
})

console.log(items);
console.log(betteritems);