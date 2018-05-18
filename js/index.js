// HTML elements

const body = document.querySelector('body');
const root = document.getElementById('root');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

// Variables

const hash = window.location.hash;

// Site building

writeSection(main);
writeNavOptions(nav);

if (hash.length) {
    const slice = hash.slice(1);
    body.classList.add(slice);
    document.querySelector(`a[href='${hash}']`).classList.add('active', slice);
} else {
    body.classList.add('home');
    document.querySelector(`a[href='#home']`).classList.add('active', 'home');
}


window.onhashchange = () => {
    writeSection(main);
    body.removeAttribute('class');
    body.classList.add(window.location.hash.slice(1));
};