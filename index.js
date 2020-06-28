const elementToRandomise = document.querySelector('.randomise-typefaces');
const text = elementToRandomise.textContent;

// const newText = text
//     .replace(/[A-Z]/g, '<span class="capital">$&</span>')
//     .replace(/[.,'|}{\[\]+_\-\)0\(9*8&^%\$£@!]/g, '<span class="punctuation">$&</span>')
//     .replace(/[0-9]+/g, '<span class="digit">$&</span>');

// You might not have to add class names, just apply the style directly to the span in js?
const randomlyPickClassName = () => {
    const classNames = ['red', 'blue', 'purple', 'pink'];
    const randomClassName = classNames[Math.floor(Math.random()*classNames.length)];
    return randomClassName;
};

// One downside of this is that a two digit numbers would have different styling
const newText = text
    .split('')
    .map(letter => {
        if (letter.match(/[A-Z]/g)) {
            return `<span class="capital ${randomlyPickClassName()}">${letter}</span>`
        }

        if (letter.match(/[^A-Za-z0-9 ]/)) {
            return `<span class="punctuation ${randomlyPickClassName()}">${letter}</span>`
        }

        if (letter.match(/[0-9]/g)) {
            return `<span class="digit ${randomlyPickClassName()}">${letter}</span>`
        }

        return letter;
    })
    .join('');

elementToRandomise.innerHTML = newText;
