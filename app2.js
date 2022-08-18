// createElement('element')
// createTextNode('text content')
// element.appendchild(childElement)

// insertBefore('element','location');
// replaceChild('new', 'old');

const result = document.querySelector('#result');
const first = document.querySelector('.red');

// create empty element

const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv,result);
// result element
// document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingtext = document.createTextNode('dynemic heading');
heading.appendChild(headingtext);
heading.classList.add('blue');
// result.appendChild(heading);

result.insertBefore(heading,first);

const smallheading = document.createElement('h6');
const smallText = document.createTextNode('i m small heading text');
smallheading.classList.add('red');
smallheading.appendChild(smallText)
document.replaceChild(smallHeading,bodyDiv);
console.log(result.children);